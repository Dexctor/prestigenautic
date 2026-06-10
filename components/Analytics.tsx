"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  initConsentModeDefault,
  readConsent,
  type ConsentRecord,
} from "@/lib/consent";

const GA_ID = "G-S71ZDHV3FR";

/**
 * Charge Google Analytics uniquement après consentement "analytics".
 * Utilise Google Consent Mode v2 : par défaut tout est "denied",
 * puis "granted" si l'utilisateur accepte la mesure d'audience.
 */
export default function Analytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    // État par défaut (denied) poussé dès que possible.
    initConsentModeDefault();

    // Lecture du consentement stocké (localStorage, externe au SSR) dans une
    // micro-tâche pour éviter un setState synchrone pendant l'effet.
    const id = window.setTimeout(() => {
      const current = readConsent();
      if (current?.categories.analytics) setAnalyticsAllowed(true);
    }, 0);

    // Réagir aux changements de consentement (accept/refuse/préférences).
    function onChange(e: Event) {
      const detail = (e as CustomEvent<ConsentRecord | null>).detail;
      setAnalyticsAllowed(!!detail?.categories.analytics);
    }
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener(CONSENT_EVENT, onChange);
    };
  }, []);

  if (!analyticsAllowed) return null;

  return (
    <>
      <Script
        id="ga-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'update', { analytics_storage: 'granted' });
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
