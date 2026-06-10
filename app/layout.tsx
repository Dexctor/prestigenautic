import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import BackToTop from "@/components/BackToTop";

// Manrope : sans-serif moderne et caractériel, pour les titres.
// Registre premium contemporain (pas « template élégant »).
const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Inter : sans-serif neutre et très lisible, pour le corps de texte.
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#061a2e",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://prestigenautic.com"),
  title: {
    default: "Artisan teck nautique Toulon & Côte d'Azur | Prestige Nautic",
    template: "%s | Prestige Nautic",
  },
  description:
    "Artisan nautique haut de gamme à Toulon : teck synthétique, teck naturel, vaigrage, refit et soudure sur mesure sur toute la Côte d'Azur. Devis gratuit.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Prestige Nautic",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Schéma Organization global (présent sur toutes les pages) pour la marque,
// le logo et les coordonnées. Complète le LocalBusiness détaillé de l'accueil.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://prestigenautic.com/#organization",
  name: "Prestige Nautic",
  image: "https://prestigenautic.com/assets/photo-yacht-luxe-1.webp",
  logo: "https://prestigenautic.com/assets/logo-prestige-nautic.webp",
  url: "https://prestigenautic.com",
  telephone: "+33783345950",
  email: "prestige.nautic@gmail.com",
  priceRange: "€€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 avenue du 1er bataillon Choc",
    addressLocality: "Toulon",
    addressRegion: "Var",
    postalCode: "83200",
    addressCountry: "FR",
  },
  areaServed: [
    "Toulon", "Var", "Côte d'Azur", "Hyères", "Bandol", "Sanary",
    "Saint-Tropez", "Cannes", "Antibes", "Nice", "Monaco", "Marseille",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <BackToTop />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
