import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entretien du teck de bateau : le guide | Prestige Nautic",
  description:
    "Guide complet pour entretenir le teck de votre bateau : nettoyage, dégrisage, huilage et erreurs à éviter. Conseils d'artisan à Toulon.",
  alternates: { canonical: "https://prestigenautic.com/pages/entretien-teck-bateau.html" },
  openGraph: {
    type: "article",
    url: "https://prestigenautic.com/pages/entretien-teck-bateau.html",
    title: "Comment entretenir son teck de bateau : guide complet",
    description:
      "Guide complet pour entretenir le teck de votre bateau : nettoyage, dégrisage, huilage, erreurs à éviter. Conseils d'artisan nautique depuis Toulon — Côte d'Azur.",
    images: ["https://prestigenautic.com/assets/teck-naturel.webp"],
    locale: "fr_FR",
    siteName: "Prestige Nautic",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment entretenir son teck de bateau : guide complet",
  description:
    "Guide complet pour entretenir le teck naturel et synthétique d'un pont de bateau : nettoyage, dégrisage, huilage et conseils d'artisan.",
  image: "https://prestigenautic.com/assets/teck-naturel.webp",
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "Prestige Nautic" },
  publisher: {
    "@type": "Organization",
    name: "Prestige Nautic",
    logo: { "@type": "ImageObject", url: "https://prestigenautic.com/assets/logo-prestige-nautic.webp" },
  },
  mainEntityOfPage: "https://prestigenautic.com/pages/entretien-teck-bateau.html",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://prestigenautic.com/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://prestigenautic.com/articles.html" },
    { "@type": "ListItem", position: 3, name: "Comment entretenir son teck de bateau", item: "https://prestigenautic.com/pages/entretien-teck-bateau.html" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "À quelle fréquence faut-il entretenir le teck naturel d'un bateau ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Méditerranée, un nettoyage léger à chaque fin de sortie et un entretien approfondi deux fois par an (avant la saison et à la désarmation) suffisent pour la plupart des ponts. Un dégrisage annuel en début de saison, suivi d'un huilage, est recommandé pour préserver la teinte et la durabilité du bois.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on utiliser un Kärcher ou un nettoyeur haute pression sur un pont en teck ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Le jet haute pression arrache les fibres superficielles du bois, crée des micro-fissures et accélère le décollement des joints. Un nettoyage à l'eau claire avec une brosse à poils souples dans le sens du fil suffit, complété si besoin d'un produit nettoyant spécial teck.",
      },
    },
    {
      "@type": "Question",
      name: "Le teck synthétique demande-t-il le même entretien que le teck naturel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, c'est beaucoup plus simple. Le teck synthétique ne grise pas, ne nécessite pas d'huilage ni de dégrisage. Un nettoyage à l'eau savonneuse et une brosse douce suffisent pour la majorité des salissures. Pour les taches tenaces (fioul, résine), un dégraissant marin adapté fera l'affaire.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il huiler le teck naturel d'un bateau ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "C'est un sujet qui divise les artisans. L'huilage nourrit le bois et ralentit le grisaillement, mais il peut aussi colmater les pores et rendre les joints plus fragiles avec le temps. Si vous optez pour l'huilage, choisissez une huile spéciale teck marin (pas de l'huile de lin) et appliquez-la à raison d'une à deux fois par saison sur bois propre et sec.",
      },
    },
    {
      "@type": "Question",
      name: "Comment savoir si mon pont en teck doit être reposé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trois signes ne trompent pas : des lames inférieures à 5-6 mm d'épaisseur (usure irréversible), des joints noirs et décollés sur plus de 20 % de la surface, ou des zones qui soulèvent ou sonnent creux quand on marche dessus. Dans ces cas, l'entretien ne suffit plus et une repose est plus économique à long terme.",
      },
    },
  ],
};

export default function EntretienTeckBateauPage() {
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
            <span>Entretien du teck de bateau</span>
          </nav>
          <h1>Comment entretenir son teck de bateau : <em>le guide complet</em></h1>
          <p className="guide-hero__sub">Nettoyage, dégrisage, huilage, erreurs à éviter, signes d&apos;alarme… Tout ce que vous devez savoir pour garder un pont en teck impeccable, par un artisan nautique installé à Toulon.</p>
          <p className="guide-hero__meta">Par Prestige Nautic · Toulon, Côte d&apos;Azur · Mai 2026 · Lecture : 8 min</p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="article-prose">

            <p>Le pont d&apos;un bateau naviguant en Méditerranée subit des agressions particulièrement sévères : UV intenses de juin à septembre, embruns salés, condensation nocturne, passages répétés de semelles. Sans entretien adapté, même le plus beau pont en teck se dégrade bien plus vite que nécessaire. Ce guide s&apos;adresse à tous les propriétaires du Var et des Alpes-Maritimes qui souhaitent comprendre les bons gestes — que leur pont soit en <Link href="/pages/teck-naturel">teck naturel</Link> ou en <Link href="/pages/teck-synthetique">teck synthétique</Link>.</p>

            <h2>Pourquoi le teck grise-t-il ?</h2>

            <p>Le grisaillement est la première question que posent les propriétaires d&apos;un pont en teck naturel. Il s&apos;explique par l&apos;oxydation de la lignine — le liant naturel du bois — sous l&apos;effet des rayons UV. En quelques semaines d&apos;exposition, un pont fraîchement posé ou décapé passe du brun doré au gris argenté. Ce phénomène est normal et, à lui seul, ne signifie pas que le bois est abîmé.</p>

            <p>Ce qui doit alerter, c&apos;est un teck gris <em>et</em> fissuré, avec des fibres qui s&apos;effilochent, des lames qui se soulèvent en bord ou des zones qui sonnent creux sous le pied. Là, on n&apos;est plus dans le grisaillement naturel : on est dans la dégradation active.</p>

            <div className="tip-box">
              <div className="tip-box__label">À retenir</div>
              <p>Un pont gris n&apos;est pas un pont mort. Un pont gris <em>et</em> fissuré qui sonne creux, lui, l&apos;est peut-être. La nuance est importante avant d&apos;engager des travaux.</p>
            </div>

            <h2>L&apos;entretien du <em>teck naturel</em></h2>

            <h3>Le nettoyage régulier</h3>

            <p>Le nettoyage de base du teck naturel ne demande aucun produit chimique agressif. Après chaque sortie en mer, un rinçage à l&apos;eau douce suffit à éliminer le sel en surface et à éviter les dépôts cristallisés qui attaquent les fibres. Pour un nettoyage plus approfondi — en début et en fin de saison —, une brosse à poils souples (naturels, pas en plastique dur) et un nettoyant spécial teck marin font l&apos;affaire.</p>

            <p><strong>La règle d&apos;or :</strong> toujours brosser dans le sens du fil du bois, jamais en travers. Brosser perpendiculairement au grain arrache des fibres et accélère l&apos;usure de la surface.</p>

            <h3>Le dégrisage</h3>

            <p>Quand le pont a grisé et que vous souhaitez lui redonner sa teinte blonde d&apos;origine, il faut passer par un dégrisage chimique. Ce traitement réagit avec l&apos;oxyde de lignine pour restituer la couleur naturelle du bois — mais c&apos;est aussi une opération délicate qui, mal réalisée, peut abîmer les lames définitivement.</p>

            <p>Les risques d&apos;un dégrisage mal exécuté sont réels : produit trop concentré qui brûle le bois, brossage trop appuyé qui arrache les fibres, rinçage insuffisant qui laisse des résidus agressifs dans les joints. Sur un pont de yacht, une erreur à ce stade peut nécessiter une repose complète.</p>

            <div className="tip-box">
              <div className="tip-box__label">Notre recommandation</div>
              <p>Le dégrisage est une opération que nous conseillons de confier à un professionnel. Un artisan nautique saura évaluer l&apos;état réel des lames, doser les produits selon l&apos;essence de teck et l&apos;épaisseur restante, et éviter les erreurs irréversibles. <Link href="/#devis">Contactez-nous pour un diagnostic gratuit.</Link></p>
            </div>

            <h3>L&apos;huilage : utile ou facultatif ?</h3>

            <p>C&apos;est le sujet qui fait débat entre artisans. L&apos;huile nourrit le bois, ralentit le grisaillement et améliore l&apos;aspect visuel. Mais appliquée trop souvent ou sur un bois insuffisamment sec, elle peut former un film en surface qui se craquelle et rend les joints plus vulnérables à l&apos;eau.</p>

            <p>Notre position chez Prestige Nautic : l&apos;huilage est utile sur les lames de teck fines ou sur les ponts très exposés (flybridge, plage avant non protégée). Sur un pont en bon état et suffisamment épais, une fois par saison suffit amplement — voire tous les deux ans si votre pont est bien protégé. Choisissez une huile spéciale teck marin (Deks Olje, Star Brite, Teak Wonder…), jamais de l&apos;huile de lin qui brunira et poissera le bois.</p>

            <h3>La fréquence selon votre programme de navigation</h3>

            <p>Il n&apos;existe pas de calendrier universel : tout dépend de l&apos;exposition réelle de votre bateau. Un voilier qui passe l&apos;été au mouillage face au soleil à Porquerolles ou sur la rade de Toulon vieillira bien plus vite que le même bateau hivernant au port à couvert. À titre indicatif :</p>

            <ul>
              <li><strong>Nettoyage léger :</strong> après chaque sortie en mer (rinçage eau douce)</li>
              <li><strong>Nettoyage approfondi :</strong> 2 fois par an (avant la saison d&apos;été, à la désarmation)</li>
              <li><strong>Dégrisage :</strong> 1 fois par an, en début de saison</li>
              <li><strong>Huilage :</strong> 1 fois par an, après le dégrisage, sur bois propre et parfaitement sec</li>
            </ul>

            <div className="band-dark">
              <h2>Les erreurs à <em>ne jamais commettre</em></h2>

              <p>Au fil de nos interventions sur des bateaux du Var aux Alpes-Maritimes, nous avons vu des ponts abîmés non pas par le temps, mais par de mauvaises pratiques. Les voici, pour vous les épargner.</p>

              <div className="steps-grid">
                <div className="step-card">
                  <div className="step-card__num">✕</div>
                  <div className="step-card__title">Le Kärcher ou le nettoyeur haute pression</div>
                  <p>Le jet arrache les fibres superficielles, crée des micro-fissures et fait remonter les joints. Un seul passage mal calibré peut abîmer un pont qui aurait duré dix ans de plus.</p>
                </div>
                <div className="step-card">
                  <div className="step-card__num">✕</div>
                  <div className="step-card__title">L&apos;eau de Javel et les détergents ménagers</div>
                  <p>La Javel blanchit certes le bois, mais oxyde la lignine de façon accélérée et attaque le caoutchouc des joints. Les détergents ménagers laissent des résidus qui attirent les salissures.</p>
                </div>
                <div className="step-card">
                  <div className="step-card__num">✕</div>
                  <div className="step-card__title">Brosser en travers du fil</div>
                  <p>Une brosse perpendiculaire au grain du bois arrache des fibres à chaque passage. Sur un pont déjà fin, c&apos;est une perte d&apos;épaisseur irréversible.</p>
                </div>
                <div className="step-card">
                  <div className="step-card__num">✕</div>
                  <div className="step-card__title">Huiler un bois humide ou mal nettoyé</div>
                  <p>L&apos;huile appliquée sur du bois encore humide forme un film qui se décolle rapidement. Sur un bois mal nettoyé, elle fixe les salissures en profondeur.</p>
                </div>
              </div>

            </div>

            <h2>L&apos;entretien du <em>teck synthétique</em> : beaucoup plus simple</h2>

            <p>Si votre pont est en <Link href="/pages/teck-synthetique">teck synthétique</Link>, la bonne nouvelle c&apos;est que vous pouvez oublier les dégriseurs, les huiles et les calendriers d&apos;entretien complexes. Le teck synthétique de qualité est insensible aux UV, au sel et à l&apos;humidité : il ne grise pas, ne fissure pas et ne nécessite aucun traitement de fond.</p>

            <p>L&apos;entretien courant se résume à :</p>
            <ul>
              <li>Un rinçage à l&apos;eau douce après chaque sortie</li>
              <li>Un nettoyage à l&apos;eau savonneuse (liquide vaisselle doux) et une brosse souple pour les dépôts plus tenaces</li>
              <li>Un dégraissant marin pour les taches de fioul, résine ou huile solaire</li>
            </ul>

            <p>Évitez tout de même les solvants agressifs (acétone, white-spirit) qui peuvent attaquer la couche de finition pigmentée du matériau et ternir définitivement la teinte.</p>

            <div className="tip-box">
              <div className="tip-box__label">Conseil d&apos;artisan</div>
              <p>Deux fois par an, un nettoyage plus appuyé avec un produit dégraissant marin redonne de l&apos;éclat au teck synthétique et décroche les dépôts incrustés dans les rainures. C&apos;est tout ce dont il a besoin.</p>
            </div>

            <div className="band-ivory">
              <h2>Quand l&apos;entretien <em>ne suffit plus</em></h2>

              <p>Même avec les meilleurs soins, un pont en teck naturel a une durée de vie liée à l&apos;épaisseur de ses lames. Chaque ponçage ou nettoyage abrasif retire une fraction de millimètre de bois. Voici les trois signes qui indiquent qu&apos;une repose s&apos;impose plutôt qu&apos;un nouvel entretien :</p>

              <ul>
                <li><strong>Lames inférieures à 5-6 mm d&apos;épaisseur :</strong> en dessous de ce seuil, la lame n&apos;offre plus suffisamment de matière pour tenir les joints et résister aux mouvements du pont. Un ponçage supplémentaire mettrait les chevilles à nu.</li>
                <li><strong>Joints noirs, gonflés ou décollés sur plus de 20 % de la surface :</strong> quand l&apos;eau s&apos;infiltre sous le teck, le pont lui-même (stratifié ou bois) se met à souffrir. L&apos;eau est l&apos;ennemi numéro un sous le pont.</li>
                <li><strong>Zones qui sonnent creux ou lames qui se soulèvent en bord :</strong> signe de décollement ou de délaminage. À ce stade, l&apos;entretien ne peut rien, il faut déposer et reposer.</li>
              </ul>

              <p>Dans tous ces cas, une repose complète est plus économique à long terme qu&apos;une succession de rustines. Nous intervenons sur toute la Côte d&apos;Azur — Toulon, Hyères, Bandol, Sanary, Saint-Tropez, Cannes, Antibes, Nice — pour établir un diagnostic gratuit et vous conseiller sur la solution la plus adaptée.</p>

            </div>
          </div>

          {/* FAQ */}
          <div className="faq-section" style={{ background: "var(--ivory)", padding: "2rem 2rem", borderRadius: "var(--radius-lg)", marginTop: "1rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.5rem,3.5vw,2.1rem)", fontWeight: 600, color: "var(--navy-800)", marginBottom: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>Questions <em style={{ color: "var(--gold-deep)", fontStyle: "normal" }}>fréquentes</em></h2>

            <div className="faq-item">
              <div className="faq-item__q">À quelle fréquence faut-il entretenir le teck naturel d&apos;un bateau ?</div>
              <div className="faq-item__a">En Méditerranée, un nettoyage léger à chaque fin de sortie et un entretien approfondi deux fois par an (avant la saison et à la désarmation) suffisent pour la plupart des ponts. Un dégrisage annuel en début de saison, suivi d&apos;un huilage, est recommandé pour préserver la teinte et la durabilité du bois.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__q">Peut-on utiliser un Kärcher sur un pont en teck ?</div>
              <div className="faq-item__a">Non. Le jet haute pression arrache les fibres superficielles du bois, crée des micro-fissures et accélère le décollement des joints. Un nettoyage à l&apos;eau claire avec une brosse à poils souples dans le sens du fil suffit, complété si besoin d&apos;un nettoyant spécial teck marin.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__q">Le teck synthétique demande-t-il le même entretien que le teck naturel ?</div>
              <div className="faq-item__a">Non, c&apos;est beaucoup plus simple. Le teck synthétique ne grise pas et ne nécessite ni huilage ni dégrisage. Un nettoyage à l&apos;eau savonneuse et une brosse douce suffisent pour la majorité des salissures. Pour les taches tenaces, un dégraissant marin adapté fera l&apos;affaire.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__q">Faut-il huiler le teck naturel de son bateau ?</div>
              <div className="faq-item__a">L&apos;huilage nourrit le bois et ralentit le grisaillement, mais il peut aussi colmater les pores et fragiliser les joints à long terme. Si vous optez pour l&apos;huilage, choisissez une huile spéciale teck marin (pas de l&apos;huile de lin) et appliquez-la une à deux fois par saison maximum, sur bois propre et parfaitement sec.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__q">Comment savoir si mon pont en teck doit être reposé ?</div>
              <div className="faq-item__a">Trois signes ne trompent pas : des lames inférieures à 5-6 mm d&apos;épaisseur, des joints noirs et décollés sur plus de 20 % de la surface, ou des zones qui soulèvent ou sonnent creux sous le pied. Dans ces cas, une repose est plus économique à long terme que de continuer à entretenir.</div>
            </div>
          </div>

          {/* CTA */}
          <div className="devis-cta" style={{ marginTop: "3.5rem" }}>
            <h2>Votre pont montre des signes d&apos;usure <em>sur la Côte d&apos;Azur ?</em></h2>
            <p>Prestige Nautic intervient à Toulon, Hyères, Bandol, Sanary, Saint-Tropez, Cannes, Antibes, Nice et Monaco pour un diagnostic et un devis gratuits. Décrivez votre situation et nous revenons vers vous rapidement.</p>
            <Link className="btn btn--primary" href="/#devis">Demander un devis gratuit</Link>
          </div>
        </div>
      </section>

      {/* AUTRES ARTICLES & PRESTATIONS */}
      <section className="section" style={{ background: "var(--bg-soft)", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="container">
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "1rem" }}>Nos prestations teck</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <Link className="related-link" href="/pages/teck-synthetique">
              <span className="related-link__label">Pose de teck synthétique</span>
              <span className="related-link__arrow">→</span>
            </Link>
            <Link className="related-link" href="/pages/teck-naturel">
              <span className="related-link__label">Pose de teck naturel</span>
              <span className="related-link__arrow">→</span>
            </Link>
            <Link className="related-link" href="/pages/configurateur">
              <span className="related-link__label">Configurateur teck</span>
              <span className="related-link__arrow">→</span>
            </Link>
          </div>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "1rem" }}>Autres articles</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <Link className="related-link" href="/pages/teck-synthetique-ou-naturel">
              <span className="related-link__label">Teck synthétique ou naturel : quel pont choisir ?</span>
              <span className="related-link__arrow">→</span>
            </Link>
            <Link className="related-link" href="/pages/vaigrage-bateau-guide-complet">
              <span className="related-link__label">Le vaigrage de bateau : guide complet</span>
              <span className="related-link__arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
