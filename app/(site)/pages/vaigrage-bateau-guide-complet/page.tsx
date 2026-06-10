import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vaigrage de bateau : le guide complet | Prestige Nautic",
  description:
    "Tout savoir sur le vaigrage de bateau : matériaux (cuir, tissu, alcantara), étapes de pose, sur mesure ou kit. Guide d'un artisan à Toulon.",
  alternates: { canonical: "https://prestigenautic.com/pages/vaigrage-bateau-guide-complet.html" },
  openGraph: {
    type: "article",
    url: "https://prestigenautic.com/pages/vaigrage-bateau-guide-complet.html",
    title: "Vaigrage de bateau : guide complet sur l'habillage intérieur nautique",
    description:
      "Tout savoir sur le vaigrage de bateau : matériaux, étapes, sur mesure vs kit. Guide par un artisan nautique de Toulon, Côte d'Azur.",
    images: ["https://prestigenautic.com/assets/vaigrage.webp"],
    locale: "fr_FR",
    siteName: "Prestige Nautic",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vaigrage de bateau : guide complet sur l'habillage intérieur nautique",
  description:
    "Guide complet sur le vaigrage de bateau : définition, matériaux, étapes de pose, comparaison sur mesure vs kit standard, et conseils d'artisan nautique.",
  image: "https://prestigenautic.com/assets/vaigrage.webp",
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "Prestige Nautic" },
  publisher: {
    "@type": "Organization",
    name: "Prestige Nautic",
    logo: { "@type": "ImageObject", url: "https://prestigenautic.com/assets/logo-prestige-nautic.webp" },
  },
  mainEntityOfPage: "https://prestigenautic.com/pages/vaigrage-bateau-guide-complet.html",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://prestigenautic.com/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://prestigenautic.com/articles.html" },
    { "@type": "ListItem", position: 3, name: "Vaigrage de bateau : guide complet", item: "https://prestigenautic.com/pages/vaigrage-bateau-guide-complet.html" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps dure la pose d'un vaigrage sur mesure ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La durée dépend de la surface à traiter et de la complexité des formes. Sur un voilier de 10 à 12 mètres, une prestation de vaigrage complète (cabine avant, carré, coursives) prend généralement entre 3 et 7 jours ouvrés. Un habitacle partiel (plafonds uniquement ou panneaux latéraux d'une cabine) peut se faire en 1 à 2 jours. Nous établissons le planning précis lors du diagnostic à bord.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on choisir librement le matériau et la couleur du vaigrage ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, totalement. Nous travaillons sur mesure et proposons une large gamme de tissus techniques nautiques, de similicuir marin, de cuir véritable et d'alcantara, dans de nombreuses teintes. Nous vous apportons des échantillons à bord lors du premier rendez-vous pour vous aider à visualiser le rendu final dans l'ambiance de votre bateau.",
      },
    },
    {
      "@type": "Question",
      name: "Le vaigrage résiste-t-il à l'humidité et aux moisissures ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cela dépend du matériau choisi et de la qualité de la pose. Le similicuir marin et le cuir traité sont imperméables en surface. Les tissus techniques nautiques sont traités anti-moisissure et sèchent rapidement. Une mauvaise ventilation de la coque reste le principal ennemi : si l'air circule bien derrière le vaigrage, les moisissures n'ont pas de prise. Nous veillons à ce point lors de la pose.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il déposer tout l'ancien vaigrage avant d'en poser un nouveau ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dans la grande majorité des cas, oui. Poser un nouveau vaigrage par-dessus l'ancien masque les problèmes existants (humidité piégée, moisissures sous-jacentes, colle décollée) et donne un résultat moins propre. La dépose permet aussi d'inspecter la coque et le structure, ce qui est toujours une bonne chose sur un bateau d'occasion ou lors d'un refit.",
      },
    },
    {
      "@type": "Question",
      name: "Le vaigrage de bateau est-il réservé aux grandes unités ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pas du tout. Nous travaillons sur toutes les tailles, du semi-rigide avec poste de barre aux grands yachts. Même sur un voilier ou un moteur de 8 mètres, refaire le vaigrage d'une cabine avant ou du carré change radicalement le confort et l'esthétique à bord. L'investissement est proportionnel à la surface traitée.",
      },
    },
  ],
};

const badgeStyle = {
  fontSize: "0.72rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  background: "var(--bg-soft)",
  color: "var(--muted)",
  borderRadius: "2rem",
  padding: "0.2rem 0.6rem",
  display: "inline-block",
  marginBottom: "0.5rem",
};

export default function VaigrageBateauGuideCompletPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="guide-hero">
        <div className="container">
          <nav className="guide-hero__breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <Link href="/articles">Articles</Link>
            <span aria-hidden="true">›</span>
            <span>Vaigrage de bateau</span>
          </nav>
          <h1>Le vaigrage de bateau : <em>guide complet</em></h1>
          <p className="guide-hero__sub">Matériaux, zones concernées, étapes de pose, sur mesure vs kit standard… Tout ce qu&apos;un propriétaire de bateau doit savoir avant de refaire l&apos;habillage intérieur de son bord.</p>
          <p className="guide-hero__meta">Par Prestige Nautic · Toulon, Côte d&apos;Azur · Mai 2026 · Lecture : 9 min</p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="article-prose">

            <p>Le vaigrage, c&apos;est l&apos;habillage intérieur des parois d&apos;un bateau : les cloisons des cabines, les plafonds (que les marins appellent barrots ou barrotins), les coursives, les placards. Il joue un double rôle. Esthétique d&apos;abord : c&apos;est lui qui donne le ton à l&apos;intérieur du bord, qui crée cette première impression quand on descend dans la cabine. Fonctionnel ensuite : un bon vaigrage isole thermiquement et acoustiquement, réduit la condensation sur la coque et protège les structures.</p>

            <p>Sur la Côte d&apos;Azur, nous réalisons des prestations de <Link href="/pages/vaigrage">vaigrage sur mesure</Link> depuis Toulon jusqu&apos;à Monaco. Ce guide vous explique tout ce que vous devez savoir avant de vous lancer dans un projet de refonte intérieure.</p>

            <h2>Qu&apos;est-ce que le vaigrage, <em>exactement ?</em></h2>

            <p>Le terme vient de la construction navale traditionnelle, où le vaigrage désignait le bordé intérieur — les planches clouées sur les membrures à l&apos;intérieur de la coque pour la rigidifier. Aujourd&apos;hui, sur les bateaux de plaisance modernes construits en polyester ou en aluminium, le vaigrage est devenu un élément de décoration et de confort.</p>

            <p>Concrètement, voici les zones concernées à bord :</p>
            <ul>
              <li><strong>Les plafonds (barrots) :</strong> habillage des éléments de structure au plafond du carré et des cabines, souvent en tissu tendu ou en panneaux rigides.</li>
              <li><strong>Les cloisons latérales des cabines :</strong> la surface la plus visible, celle qui donne le caractère de l&apos;intérieur.</li>
              <li><strong>Les panneaux de portes et cloisons de séparation</strong></li>
              <li><strong>Les coursives et accès escaliers</strong></li>
              <li><strong>Les dessous de cockpit</strong> sur certains modèles</li>
            </ul>

            <p>Un vaigrage complet peut transformer radicalement l&apos;intérieur d&apos;un bateau d&apos;occasion dont l&apos;habitacle a vieilli. C&apos;est souvent l&apos;une des premières interventions lors d&apos;un <Link href="/pages/refit-integral">refit intégral</Link>.</p>

            <h2>Les matériaux utilisés <em>en vaigrage nautique</em></h2>

            <p>Le choix du matériau est crucial : il doit allier esthétique, résistance à l&apos;humidité, facilité d&apos;entretien et longévité dans un environnement particulièrement hostile (sel, UV, condensation). Voici les principaux matériaux que nous utilisons.</p>
          </div>

          <div className="band-dark">
            <div className="matiere-grid">
              <div className="matiere-card">
                <div className="matiere-badge" style={badgeStyle}>Le plus courant</div>
                <div className="matiere-card__title">Tissu technique nautique</div>
                <p>Traité anti-moisissure et anti-UV, il offre un rapport confort/durabilité excellent. Disponible en une très large palette de teintes, du lin naturel au gris anthracite en passant par le blanc cassé. Souple, il épouse facilement les courbes de la coque. Entretien facile : aspiration + nettoyant textile marin.</p>
              </div>
              <div className="matiere-card">
                <div className="matiere-badge" style={badgeStyle}>Haut de gamme</div>
                <div className="matiere-card__title">Similicuir marin (vinyl nautique)</div>
                <p>Imperméable en surface, facile à nettoyer d&apos;un coup d&apos;éponge, insensible aux salissures et aux projections d&apos;eau. Les versions haut de gamme imitent très fidèlement le grain du cuir véritable. Choix fréquent pour les bateaux à moteur et les yachts où l&apos;esthétique luxe prime.</p>
              </div>
              <div className="matiere-card">
                <div className="matiere-badge" style={badgeStyle}>Prestige</div>
                <div className="matiere-card__title">Cuir véritable</div>
                <p>Le matériau de référence sur les grands yachts. Chaleur incomparable, patine qui se bonifie avec le temps. Demande un entretien plus attentif (crème nourrissante, protection contre l&apos;humidité excessive). Réservé aux espaces moins exposés aux projections d&apos;eau.</p>
              </div>
              <div className="matiere-card">
                <div className="matiere-badge" style={badgeStyle}>Luxe contemporain</div>
                <div className="matiere-card__title">Alcantara</div>
                <p>Microfibre ultra-douce, toucher velours, aspect sobre et élégant. L&apos;alcantara a une forte image luxe et s&apos;est imposé dans l&apos;automobile et le yacht ces dernières années. Résistant aux UV et à la décoloration. Se nettoie avec un nettoyant dédié à la microfibre.</p>
              </div>
            </div>

            <div className="article-prose">
              <div className="tip-box">
                <div className="tip-box__label">Notre approche</div>
                <p>Nous apportons toujours des échantillons à bord lors du premier rendez-vous. Visualiser un matériau dans l&apos;ambiance réelle de votre bateau — avec sa luminosité, ses teintes existantes, son espace — change tout. Ce qui semble parfait en catalogue peut être trop sombre ou trop clair une fois à bord.</p>
              </div>

            </div>
          </div>

          <div className="article-prose">

            <h2>Pourquoi refaire son vaigrage ?</h2>

            <p>Plusieurs raisons peuvent pousser un propriétaire à envisager la repose de son vaigrage. Certaines sont visibles, d&apos;autres le sont moins mais sont tout aussi importantes.</p>

            <h3>L&apos;usure normale</h3>
            <p>Au fil des saisons, les tissus se fanent sous l&apos;effet des UV qui pénètrent par les hublots et les panneaux de pont. Les arêtes des panneaux rigides s&apos;effilochent, les mousses de doublage s&apos;affaissent, les couleurs perdent leur éclat. Sur un bateau de 10 ans et plus, le vaigrage d&apos;origine a souvent fait son temps et tire l&apos;intérieur vers le bas visuellement.</p>

            <h3>Les moisissures</h3>
            <p>C&apos;est la problématique la plus fréquente sur la Côte d&apos;Azur et en Méditerranée, où les écarts de température entre le jour et la nuit créent de la condensation sur les parois de coque. Si l&apos;air ne circule pas suffisamment derrière le vaigrage, la moisissure s&apos;installe dans la mousse de doublage — elle n&apos;est alors plus visible à l&apos;œil mais dégage une odeur persistante. La seule solution viable est la dépose complète et l&apos;assainissement de la paroi avant repose.</p>

            <h3>L&apos;achat d&apos;un bateau d&apos;occasion</h3>
            <p>Refaire le vaigrage est souvent la première chose que font les nouveaux propriétaires pour s&apos;approprier leur bateau et effacer les traces d&apos;usure ou les choix esthétiques du précédent propriétaire. C&apos;est l&apos;un des investissements à meilleur ROI pour un bateau d&apos;occasion : l&apos;impact visuel est immédiat et la valeur perçue du bateau s&apos;en trouve significativement augmentée.</p>

            <h3>Le refit ou la modernisation</h3>
            <p>Dans le cadre d&apos;un <Link href="/pages/refit-integral">refit intégral</Link>, le vaigrage fait presque systématiquement partie des travaux : c&apos;est le bon moment pour tout déposer, inspecter la coque à nu, reprendre l&apos;isolation si nécessaire, puis reposer un intérieur entièrement neuf.</p>

            <h2>Comment se déroule <em>une prestation de vaigrage sur mesure</em></h2>

            <p>Chez Prestige Nautic, nous travaillons uniquement sur mesure. Voici les étapes typiques d&apos;une intervention.</p>
          </div>

          <div className="band-ivory">
            <ol className="process-list">
              <li>
                <div>
                  <strong>Visite à bord et diagnostic</strong>
                  <span>Nous venons à quai — sur les ports du Var et des Alpes-Maritimes — pour évaluer l&apos;état du vaigrage existant, identifier les zones à traiter en priorité, mesurer les surfaces et déceler d&apos;éventuels problèmes sous-jacents (moisissures, humidité, délaminage de coque).</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Choix des matériaux</strong>
                  <span>Nous vous présentons des échantillons à bord. Tissu, similicuir, cuir ou alcantara : nous définissons ensemble le matériau, la teinte et la texture en tenant compte de votre style, de l&apos;usage du bateau et de la luminosité des espaces.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Dépose de l&apos;ancien vaigrage</strong>
                  <span>L&apos;ancien vaigrage est entièrement déposé. La paroi est nettoyée, assainie si besoin (traitement anti-moisissure) et les fixations existantes sont inspectées. C&apos;est aussi le bon moment pour traiter une éventuelle condensation structurelle.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Découpe et fabrication sur mesure</strong>
                  <span>Chaque panneau est découpé, façonné et doublé de mousse en atelier selon les gabarits pris à bord. Les courbes, les découpes pour les équipements (prises, éclairages, bouches d&apos;air) sont réalisées avec précision.</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Pose et finitions à bord</strong>
                  <span>Les panneaux sont posés à bord avec les fixations appropriées. Les jonctions, baguettes de finition et coutures sont soignées. Nous assurons une vérification complète avant de vous remettre le bateau.</span>
                </div>
              </li>
            </ol>

          </div>

          <div className="article-prose">
            <h2>Vaigrage sur mesure vs <em>kit standard</em></h2>

            <p>Il existe des kits de vaigrage prêts-à-poser vendus par certains chantiers ou revendeurs. Cette option peut sembler attractive, mais elle présente des limites importantes que vous devez connaître avant de décider.</p>
          </div>

          <div className="compare-two">
            <div className="compare-card compare-card--standard">
              <div className="compare-card__title">Kit standard</div>
              <ul>
                <li>Adapté à un modèle de bateau précis, peu de marge de personnalisation</li>
                <li>Qualité variable selon la source, souvent matériaux d&apos;entrée de gamme</li>
                <li>Pose parfois délicate si le bateau a subi des modifications</li>
                <li>Joints et finitions rarement au niveau d&apos;une pose artisanale</li>
                <li>Ne tient pas compte des particularités de votre exemplaire</li>
              </ul>
            </div>
            <div className="compare-card compare-card--mesure">
              <div className="compare-card__title">Sur mesure (artisan)</div>
              <ul>
                <li>Adapté à votre bateau, vos contraintes et vos goûts</li>
                <li>Matériaux nautiques certifiés, durables et résistants</li>
                <li>Inspection et traitement des problèmes sous-jacents inclus</li>
                <li>Finitions soignées : baguettes, coutures, découpes équipements</li>
                <li>Garantie sur la prestation</li>
              </ul>
            </div>
          </div>

          <div className="article-prose">
            <p>Sur un bateau de valeur ou destiné à la revente, le sur mesure s&apos;impose. Il valorise durablement le bateau et évite de repasser derrière un kit mal posé dans deux ans.</p>

            <h2>Prestige Nautic et le vaigrage <em>sur la Côte d&apos;Azur</em></h2>

            <p>Nous réalisons des prestations de vaigrage sur mesure sur toute la côte, de Marseille à Monaco. Notre base est à Toulon (83), et nous nous déplaçons régulièrement sur les ports d&apos;Hyères, Bandol, Sanary, Cavalaire, Saint-Tropez, Fréjus, Cannes, Antibes et Nice.</p>

            <p>Chaque projet commence par un diagnostic à bord, gratuit et sans engagement. C&apos;est la seule façon de vous donner un devis précis et honnête : l&apos;état de l&apos;existant, la présence de moisissures, la complexité des formes et la surface réelle ne se mesurent pas autrement qu&apos;à bord.</p>
          </div>

          {/* FAQ */}
          <div className="faq-section" style={{ background: "var(--ivory)", padding: "2rem 2rem", borderRadius: "var(--radius-lg)", marginTop: "1rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.5rem,3.5vw,2.1rem)", fontWeight: 600, color: "var(--navy-800)", marginBottom: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>Questions <em style={{ color: "var(--gold-deep)", fontStyle: "normal" }}>fréquentes</em></h2>

            <div className="faq-item">
              <div className="faq-item__q">Combien de temps dure la pose d&apos;un vaigrage sur mesure ?</div>
              <div className="faq-item__a">Cela dépend de la surface à traiter. Sur un voilier de 10 à 12 mètres, une prestation complète (cabine avant, carré, coursives) prend généralement entre 3 et 7 jours ouvrés. Un habitacle partiel peut se faire en 1 à 2 jours. Nous établissons le planning précis lors du diagnostic à bord.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__q">Peut-on choisir librement le matériau et la couleur ?</div>
              <div className="faq-item__a">Oui, totalement. Nous travaillons sur mesure et proposons une large gamme de tissus techniques nautiques, de similicuir marin, de cuir véritable et d&apos;alcantara dans de nombreuses teintes. Nous apportons des échantillons à bord lors du premier rendez-vous pour vous aider à visualiser le rendu final.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__q">Le vaigrage résiste-t-il à l&apos;humidité et aux moisissures ?</div>
              <div className="faq-item__a">Cela dépend du matériau et de la qualité de la pose. Le similicuir marin et le cuir traité sont imperméables en surface. Les tissus techniques nautiques sont traités anti-moisissure. Une bonne ventilation derrière le vaigrage est la clé : si l&apos;air circule bien, les moisissures n&apos;ont pas de prise. Nous veillons à ce point lors de chaque pose.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__q">Faut-il déposer tout l&apos;ancien vaigrage avant d&apos;en poser un nouveau ?</div>
              <div className="faq-item__a">Dans la grande majorité des cas, oui. Poser par-dessus l&apos;ancien masque les problèmes existants et donne un résultat moins propre. La dépose permet aussi d&apos;inspecter la coque, ce qui est toujours une bonne chose sur un bateau d&apos;occasion ou lors d&apos;un refit.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__q">Le vaigrage est-il réservé aux grandes unités ?</div>
              <div className="faq-item__a">Pas du tout. Même sur un voilier ou un moteur de 8 mètres, refaire le vaigrage d&apos;une cabine ou du carré change radicalement le confort et l&apos;esthétique. L&apos;investissement est proportionnel à la surface traitée et au matériau choisi.</div>
            </div>
          </div>

          {/* CTA */}
          <div className="devis-cta" style={{ marginTop: "3.5rem" }}>
            <h2>Un projet de vaigrage <em>sur la Côte d&apos;Azur ?</em></h2>
            <p>Nous intervenons à Toulon, Hyères, Bandol, Saint-Tropez, Cannes, Antibes, Nice et Monaco. Contactez-nous pour un diagnostic à bord gratuit et sans engagement — c&apos;est le seul moyen de vous donner un devis précis.</p>
            <Link className="btn btn--primary" href="/#devis">Demander un devis gratuit</Link>
          </div>
        </div>
      </section>

      {/* AUTRES ARTICLES & PRESTATIONS */}
      <section className="section" style={{ background: "var(--bg-soft)", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="container">
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "1rem" }}>Nos prestations intérieur</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <Link className="related-link" href="/pages/vaigrage">
              <span className="related-link__label">Vaigrage sur mesure</span>
              <span className="related-link__arrow">→</span>
            </Link>
            <Link className="related-link" href="/pages/refit-integral">
              <span className="related-link__label">Refit intégral</span>
              <span className="related-link__arrow">→</span>
            </Link>
          </div>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "1rem" }}>Autres articles</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <Link className="related-link" href="/pages/entretien-teck-bateau">
              <span className="related-link__label">Comment entretenir son teck de bateau</span>
              <span className="related-link__arrow">→</span>
            </Link>
            <Link className="related-link" href="/pages/teck-synthetique-ou-naturel">
              <span className="related-link__label">Teck synthétique ou naturel : quel pont choisir ?</span>
              <span className="related-link__arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
