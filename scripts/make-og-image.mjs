// Génère l'image de partage social (Open Graph) 1200×630.
// Fond = photo yacht assombrie + dégradé navy ; logo ; accroche ; filet doré.
// Lancer : node scripts/make-og-image.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const A = (p) => join(root, "public", "assets", p);

const W = 1200;
const H = 630;

// 1) Fond : photo yacht, recadrée 1200×630, assombrie pour lisibilité du texte.
const bg = await sharp(A("photo-yacht-luxe-1.webp"))
  .resize(W, H, { fit: "cover", position: "centre" })
  .modulate({ brightness: 0.42, saturation: 0.9 })
  .toBuffer();

// 2) Voile dégradé navy (gauche → droite) + filet doré + texte, en SVG superposé.
const overlaySvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="veil" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0%"  stop-color="#03101e" stop-opacity="0.92"/>
      <stop offset="55%" stop-color="#061a2e" stop-opacity="0.70"/>
      <stop offset="100%" stop-color="#03101e" stop-opacity="0.55"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#veil)"/>
  <!-- filet doré haut -->
  <rect x="0" y="0" width="${W}" height="6" fill="#b8924e"/>
  <!-- eyebrow -->
  <text x="80" y="250" font-family="Arial, Helvetica, sans-serif" font-size="26"
        letter-spacing="6" font-weight="700" fill="#d4b876">ARTISAN NAUTIQUE — CÔTE D'AZUR</text>
  <!-- titre -->
  <text x="78" y="330" font-family="Arial, Helvetica, sans-serif" font-size="76"
        font-weight="800" fill="#ffffff">Teck, vaigrage &amp; refit</text>
  <text x="78" y="412" font-family="Arial, Helvetica, sans-serif" font-size="76"
        font-weight="800" fill="#ffffff">sur mesure à <tspan fill="#d4b876">Toulon</tspan></text>
  <!-- sous-texte -->
  <text x="80" y="480" font-family="Arial, Helvetica, sans-serif" font-size="30"
        fill="#cdd7e2">Yachts &amp; bateaux d'exception · Devis gratuit</text>
  <!-- petit filet doré sous le sous-texte -->
  <rect x="80" y="510" width="120" height="3" fill="#b8924e"/>
</svg>`;

// 3) Logo (en haut à droite), redimensionné.
const logo = await sharp(A("logo-prestige-nautic.webp"))
  .resize({ width: 300 })
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

const out = await sharp(bg)
  .composite([
    { input: Buffer.from(overlaySvg), top: 0, left: 0 },
    { input: logo, top: 70, left: W - (logoMeta.width ?? 300) - 80 },
  ])
  .png({ quality: 90 })
  .toBuffer();

await sharp(out).toFile(A("og-image.png"));

// Variante JPEG plus légère (certaines plateformes préfèrent < 300 Ko).
await sharp(out).jpeg({ quality: 86 }).toFile(A("og-image.jpg"));

const png = await sharp(A("og-image.png")).metadata();
console.log(`OK → og-image.png (${png.width}×${png.height})`);
