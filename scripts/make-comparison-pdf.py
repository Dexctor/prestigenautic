# -*- coding: utf-8 -*-
"""
Génère un PDF de comparaison : ancien site (HTML/CSS) vs nouveau (Next.js).
Design aux couleurs Prestige Nautic (navy + or). Sortie : comparaison-site.pdf
Lancer : python scripts/make-comparison-pdf.py
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
    Image, PageBreak, KeepTogether, FrameBreak, NextPageTemplate,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Polices Unicode (DejaVu) : indispensables pour les accents, →, ×, —, ·, apostrophes courbes.
# On enregistre sous les noms "Helvetica"/"Helvetica-Bold" pour remplacer partout sans tout réécrire.
_FONTDIR = "/c/Windows/Fonts"
_REG = os.path.join(_FONTDIR, "DejaVuSans.ttf")
_BLD = os.path.join(_FONTDIR, "DejaVuSans-Bold.ttf")
if not os.path.exists(_REG):  # fallback chemin Windows natif
    _FONTDIR = r"C:\Windows\Fonts"
    _REG = os.path.join(_FONTDIR, "DejaVuSans.ttf")
    _BLD = os.path.join(_FONTDIR, "DejaVuSans-Bold.ttf")
pdfmetrics.registerFont(TTFont("Helvetica", _REG))
pdfmetrics.registerFont(TTFont("Helvetica-Bold", _BLD))
pdfmetrics.registerFontFamily("Helvetica", normal="Helvetica", bold="Helvetica-Bold",
                              italic="Helvetica", boldItalic="Helvetica-Bold")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, "public", "assets")
OUT = os.path.join(ROOT, "comparaison-site.pdf")

# ---- Palette (charte du site) ----
NAVY      = colors.HexColor("#03101e")
NAVY_900  = colors.HexColor("#061a2e")
NAVY_800  = colors.HexColor("#0a2540")
GOLD      = colors.HexColor("#b8924e")
GOLD_LT   = colors.HexColor("#d4b876")
GOLD_DEEP = colors.HexColor("#8c6b34")
INK       = colors.HexColor("#2b3a4a")
MUTED     = colors.HexColor("#5a6f87")
PAPER     = colors.HexColor("#ffffff")
SOFT      = colors.HexColor("#f4f6f9")
LINE      = colors.HexColor("#dbe2ea")
GREEN     = colors.HexColor("#2f7d57")

PAGE_W, PAGE_H = A4
MARGIN = 16 * mm

# ---- Styles ----
ss = getSampleStyleSheet()

def style(name, parent=None, **kw):
    return ParagraphStyle(name, parent=parent or ss["Normal"], **kw)

st_eyebrow = style("eyebrow", fontName="Helvetica-Bold", fontSize=8.5, textColor=GOLD_DEEP,
                   leading=12, spaceAfter=2)
st_h1 = style("h1", fontName="Helvetica-Bold", fontSize=26, textColor=NAVY_800, leading=30, spaceAfter=6)
st_h2 = style("h2", fontName="Helvetica-Bold", fontSize=15, textColor=NAVY_800, leading=19,
              spaceBefore=14, spaceAfter=8)
st_body = style("body", fontName="Helvetica", fontSize=10, textColor=INK, leading=15, spaceAfter=6)
st_lead = style("lead", fontName="Helvetica", fontSize=11, textColor=MUTED, leading=16, spaceAfter=8)
st_cell = style("cell", fontName="Helvetica", fontSize=8.8, textColor=INK, leading=12)
st_cell_old = style("cellold", fontName="Helvetica", fontSize=8.8, textColor=MUTED, leading=12)
st_cell_new = style("cellnew", fontName="Helvetica", fontSize=8.8, textColor=NAVY_800, leading=12)
st_th = style("th", fontName="Helvetica-Bold", fontSize=9, textColor=PAPER, leading=12)
st_th_dim = style("thdim", fontName="Helvetica-Bold", fontSize=8.5, textColor=GOLD_DEEP, leading=11)
st_cover_title = style("ctitle", fontName="Helvetica-Bold", fontSize=30, textColor=PAPER,
                       leading=34, alignment=TA_LEFT)
st_cover_sub = style("csub", fontName="Helvetica", fontSize=12.5, textColor=GOLD_LT, leading=18)
st_cover_meta = style("cmeta", fontName="Helvetica", fontSize=9.5, textColor=colors.HexColor("#aab8c7"), leading=14)
st_foot = style("foot", fontName="Helvetica", fontSize=7.5, textColor=MUTED)


# ============ Décor des pages ============
def cover_bg(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # bande dégradée simulée (rectangles)
    canvas.setFillColor(NAVY_900)
    canvas.rect(0, 0, PAGE_W, PAGE_H * 0.42, fill=1, stroke=0)
    # filet doré haut
    canvas.setFillColor(GOLD)
    canvas.rect(0, PAGE_H - 5, PAGE_W, 5, fill=1, stroke=0)
    # filet doré sous le titre
    canvas.setStrokeColor(GOLD)
    canvas.setLineWidth(1.4)
    canvas.line(MARGIN, PAGE_H * 0.46, MARGIN + 60 * mm, PAGE_H * 0.46)
    canvas.restoreState()

def content_bg(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # bandeau d'en-tête
    canvas.setFillColor(NAVY_900)
    canvas.rect(0, PAGE_H - 14 * mm, PAGE_W, 14 * mm, fill=1, stroke=0)
    canvas.setFillColor(GOLD)
    canvas.rect(0, PAGE_H - 14 * mm - 2, PAGE_W, 2, fill=1, stroke=0)
    canvas.setFillColor(GOLD_LT)
    canvas.setFont("Helvetica-Bold", 8)
    canvas.drawString(MARGIN, PAGE_H - 9 * mm, "PRESTIGE NAUTIC")
    canvas.setFillColor(colors.HexColor("#aab8c7"))
    canvas.setFont("Helvetica", 8)
    canvas.drawRightString(PAGE_W - MARGIN, PAGE_H - 9 * mm, "Ancien site  vs  Nouveau site Next.js")
    # pied de page
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN, 12 * mm, PAGE_W - MARGIN, 12 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(MARGIN, 8 * mm, "Comparaison de migration — prestigenautic.com")
    canvas.drawRightString(PAGE_W - MARGIN, 8 * mm, "Page %d" % doc.page)
    canvas.restoreState()


# ============ Construction du document ============
doc = BaseDocTemplate(
    OUT, pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN, topMargin=20 * mm, bottomMargin=16 * mm,
    title="Comparaison de migration — Prestige Nautic",
    author="Prestige Nautic",
)

cover_frame = Frame(MARGIN, MARGIN, PAGE_W - 2 * MARGIN, PAGE_H * 0.46 - MARGIN,
                    id="cover", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
content_frame = Frame(MARGIN, 14 * mm, PAGE_W - 2 * MARGIN, PAGE_H - 20 * mm - 14 * mm,
                      id="content", leftPadding=0, rightPadding=0, topPadding=6, bottomPadding=0)

doc.addPageTemplates([
    PageTemplate(id="Cover", frames=[cover_frame], onPage=cover_bg),
    PageTemplate(id="Content", frames=[content_frame], onPage=content_bg),
])

story = []

# ---------- PAGE DE COUVERTURE ----------
story.append(Spacer(1, PAGE_H * 0.46 - MARGIN - 150))
story.append(Paragraph("RAPPORT DE MIGRATION", style("ce", parent=st_eyebrow, textColor=GOLD_LT, fontSize=10)))
story.append(Spacer(1, 8))
story.append(Paragraph("Ce qui change entre<br/>l’ancien site et le nouveau", st_cover_title))
story.append(Spacer(1, 14))
story.append(Paragraph("Site vitrine statique (HTML / CSS)  →  application Next.js", st_cover_sub))
story.append(Spacer(1, 10))
story.append(Paragraph(
    "Prestige Nautic — artisan teck, vaigrage &amp; refit, Toulon · Côte d’Azur<br/>"
    "Document de synthèse · juin 2026", st_cover_meta))
story.append(NextPageTemplate("Content"))
story.append(PageBreak())

# ---------- INTRO ----------
story.append(Paragraph("EN BREF", st_eyebrow))
story.append(Paragraph("De quoi parle ce document", st_h1))
story.append(Paragraph(
    "L’ancien site était un bon site vitrine statique : 14 pages HTML, un fichier CSS et un fichier "
    "JavaScript. Le nouveau site est une application Next.js — même contenu et même identité visuelle, "
    "mais reconstruit pour être maintenable, conforme au RGPD, optimisé pour le référencement et doté "
    "d’un design plus haut de gamme.", st_lead))
story.append(Paragraph(
    "Les pages suivantes détaillent, thème par thème, ce qui existait déjà, ce qui a été corrigé et ce "
    "qui est entièrement nouveau.", st_body))

# petit encadré chiffres-clés
kpi_data = [[
    Paragraph("<b>14</b><br/>pages recréées", style("k", parent=st_cell_new, alignment=TA_CENTER, fontSize=9, leading=12)),
    Paragraph("<b>0</b><br/>erreur W3C", style("k", parent=st_cell_new, alignment=TA_CENTER, fontSize=9, leading=12)),
    Paragraph("<b>RGPD</b><br/>conforme CNIL", style("k", parent=st_cell_new, alignment=TA_CENTER, fontSize=9, leading=12)),
    Paragraph("<b>1 = 1</b><br/>composant réutilisable", style("k", parent=st_cell_new, alignment=TA_CENTER, fontSize=9, leading=12)),
]]
kpi = Table(kpi_data, colWidths=[(PAGE_W - 2 * MARGIN) / 4.0] * 4)
kpi.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), SOFT),
    ("BOX", (0, 0), (-1, -1), 0.5, LINE),
    ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("TOPPADDING", (0, 0), (-1, -1), 10),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ("LINEABOVE", (0, 0), (-1, 0), 2, GOLD),
]))
story.append(Spacer(1, 6))
story.append(kpi)
story.append(Spacer(1, 4))


# ---------- Helper : tableau comparatif ----------
COL_W = [40 * mm, (PAGE_W - 2 * MARGIN - 40 * mm) / 2.0, (PAGE_W - 2 * MARGIN - 40 * mm) / 2.0]

def comp_table(rows):
    """rows = list of (critère, ancien, nouveau)."""
    data = [[
        Paragraph("Critère", st_th),
        Paragraph("Ancien site (HTML/CSS)", st_th),
        Paragraph("Nouveau site (Next.js)", st_th),
    ]]
    for crit, old, new in rows:
        data.append([
            Paragraph(crit, st_th_dim),
            Paragraph(old, st_cell_old),
            Paragraph(new, st_cell_new),
        ])
    t = Table(data, colWidths=COL_W, repeatRows=1)
    style_cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), NAVY_800),
        ("TEXTCOLOR", (0, 0), (-1, 0), PAPER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        # colonne nouveau = léger fond doré
        ("BACKGROUND", (2, 1), (2, -1), colors.HexColor("#faf6ee")),
        ("LINEAFTER", (0, 0), (0, -1), 0.4, LINE),
    ]
    # zébrage des lignes
    for i in range(1, len(data)):
        if i % 2 == 0:
            style_cmds.append(("BACKGROUND", (0, i), (1, i), SOFT))
    t.setStyle(TableStyle(style_cmds))
    return t


def section(title, eyebrow, rows, intro=None):
    blk = [Paragraph(eyebrow, st_eyebrow), Paragraph(title, st_h2)]
    if intro:
        blk.append(Paragraph(intro, st_body))
    blk.append(Spacer(1, 2))
    blk.append(comp_table(rows))
    blk.append(Spacer(1, 8))
    story.append(KeepTogether(blk))


# ---------- 1. SEO ----------
section(
    "Référencement (SEO)", "THÈME 1",
    [
        ("Données structurées (JSON-LD)",
         "1 seul schéma de base sur l’accueil.",
         "Schémas riches : entreprise locale, services avec prix, FAQ, articles, fil d’Ariane, liste d’articles. Aide Google à afficher des résultats enrichis."),
        ("Balises titres",
         "Présentes, mais la marque pouvait apparaître en double et certains titres étaient trop longs.",
         "Titres dédupliqués, raccourcis sous ~60 caractères, mots-clés placés en tête."),
        ("Open Graph (partage réseaux)",
         "7 balises, image = photo recadrée, pas de dimensions.",
         "Image de partage dédiée 1200×630 (logo + accroche), dimensions et texte alternatif sur les 14 pages."),
        ("Sitemap & robots",
         "Fichiers statiques figés.",
         "Générés automatiquement à chaque build : toujours à jour."),
        ("Maillage interne",
         "Liens entre pages limités.",
         "Passerelles prestations ↔ guides, fil d’Ariane visible, blocs « Nos guides sur le sujet »."),
    ],
)

# ---------- 2. Conformité / RGPD ----------
section(
    "Conformité légale & RGPD", "THÈME 2",
    [
        ("Bandeau cookies",
         "Aucun. Pas de gestion du consentement.",
         "Bandeau conforme CNIL, choix accepter / refuser / personnaliser, mémorisé 6 mois."),
        ("Google Analytics",
         "Chargé directement (non conforme).",
         "Conditionné au consentement (Consent Mode v2) : rien n’est suivi sans accord."),
        ("Pages légales",
         "Présentes mais non reliées au consentement.",
         "Reliées au gestionnaire de cookies + lien « Gérer les cookies » dans le pied de page."),
    ],
)

# ---------- 3. Design ----------
section(
    "Design & expérience", "THÈME 3",
    [
        ("Typographie",
         "Cormorant Garamond (serif), jugé daté / « faire-part ».",
         "Manrope (sans-serif contemporain), registre pro et net."),
        ("Section prestations",
         "Liste simple.",
         "Grille mosaïque avec carte « Le plus demandé » et survols qualitatifs (zoom doux, élévation)."),
        ("Page d’accueil",
         "Bande de réassurance basique.",
         "Bande d’engagements (100 % sur mesure, 100+ clients, A+ matériaux, suivi 1·1), méthode en 4 étapes, formulaire repensé."),
        ("Animations",
         "Quasi inexistantes.",
         "Apparitions douces au défilement (respectent « animations réduites »), micro-interactions soignées."),
        ("Mobile",
         "Responsive basique.",
         "Refonte mobile complète : cartes en liste compacte, menu plein écran, zéro débordement, cibles tactiles 48 px."),
    ],
)

# ---------- 4. Configurateur ----------
section(
    "Configurateur de teck", "THÈME 4",
    [
        ("Visualisation",
         "Déjà interactif (5 teintes × 3 joints).",
         "Conservé et fluidifié : transitions d’image adoucies, pastilles plus lisibles."),
        ("Lien vers le devis",
         "Aucun. La configuration était perdue.",
         "Bouton « Demander un devis pour ce rendu » : le formulaire est pré-rempli avec la combinaison choisie."),
    ],
)

# ---------- 5. Technique / maintenance ----------
section(
    "Architecture & maintenance", "THÈME 5",
    [
        ("Structure du code",
         "14 fichiers HTML ; en-tête et pied de page copiés-collés 14 fois.",
         "Composants réutilisables : modifier le pied de page = un seul endroit au lieu de 14."),
        ("Formulaire de devis",
         "Validation côté navigateur uniquement (contournable).",
         "Validation aussi côté serveur, envoi sécurisé vers le CRM via une route dédiée."),
        ("Rendu & performance",
         "Pages statiques simples.",
         "Rendu serveur (SSG/SSR), images optimisées, W3C 0 erreur, Core Web Vitals au vert."),
        ("Évolutivité",
         "Chaque ajout = duplication manuelle.",
         "Pages pilotées par les données ; ajouter une prestation ou un article est rapide et cohérent."),
    ],
)

# ---------- SYNTHÈSE ----------
story.append(PageBreak())
story.append(Paragraph("EN RÉSUMÉ", st_eyebrow))
story.append(Paragraph("Ce qu’il faut retenir", st_h1))
story.append(Paragraph(
    "L’ancien site faisait bien son travail de vitrine. Le nouveau apporte trois gains majeurs, "
    "au-delà du simple ravalement visuel :", st_lead))

bullets = [
    ("Conformité", "Le site est désormais en règle côté cookies / RGPD — ce qui manquait totalement avant."),
    ("Visibilité", "Le référencement passe de « correct » à « solide » : données structurées riches, titres optimisés, partage social soigné, maillage interne."),
    ("Maintenabilité", "Le site devient facile à faire évoluer. Une modification se fait à un seul endroit, là où l’ancien imposait de toucher 14 fichiers."),
    ("Conversion", "Le configurateur mène maintenant au devis, avec la configuration pré-remplie : un vrai chemin du « jeu » vers la demande."),
]
bdata = [[Paragraph(f"<b>{t}</b>", st_cell_new), Paragraph(d, st_cell)] for t, d in bullets]
bt = Table(bdata, colWidths=[34 * mm, PAGE_W - 2 * MARGIN - 34 * mm])
bt.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("TOPPADDING", (0, 0), (-1, -1), 7),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ("LEFTPADDING", (0, 0), (0, -1), 0),
    ("LINEBELOW", (0, 0), (-1, -2), 0.4, LINE),
    ("TEXTCOLOR", (0, 0), (0, -1), GOLD_DEEP),
]))
story.append(Spacer(1, 4))
story.append(bt)

story.append(Spacer(1, 14))
# encadré "point d'attention"
note = Table([[Paragraph(
    "<b>Le seul point inchangé — et le plus important à venir.</b><br/>"
    "Les photographies restent des images de stock génériques. De vraies photos de chantiers et de "
    "matières réalisés par l’artisan feraient, pour la crédibilité, plus que toutes les améliorations "
    "techniques réunies. C’est le levier n° 1 recommandé pour la suite.",
    style("note", parent=st_body, textColor=NAVY_800, leading=14))]],
    colWidths=[PAGE_W - 2 * MARGIN])
note.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#faf6ee")),
    ("BOX", (0, 0), (-1, -1), 0.6, GOLD),
    ("LEFTPADDING", (0, 0), (-1, -1), 12),
    ("RIGHTPADDING", (0, 0), (-1, -1), 12),
    ("TOPPADDING", (0, 0), (-1, -1), 11),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
    ("LINEBEFORE", (0, 0), (0, -1), 3, GOLD),
]))
story.append(note)

doc.build(story)
print("OK ->", OUT)
