"use client";

import { openCookiePreferences } from "@/components/CookieConsent";

/** Lien discret du footer pour rouvrir les préférences cookies (obligation CNIL). */
export default function CookiePreferencesLink() {
  return (
    <button type="button" className="footer-cookie-link" onClick={openCookiePreferences}>
      Gérer les cookies
    </button>
  );
}
