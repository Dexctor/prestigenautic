import { NextResponse } from "next/server";

const CRM_ENDPOINT = "https://web-production-92c74.up.railway.app/api/site/leads";

type LeadPayload = {
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: string;
  type_bateau?: string;
  marque?: string;
  modele?: string;
  port?: string;
  type_prestation?: string;
  description_demande?: string;
};

function clean(value: unknown): string {
  return String(value ?? "").trim();
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { message: "Requête invalide." },
      { status: 400 }
    );
  }

  const payload = {
    prenom: clean(body.prenom),
    nom: clean(body.nom),
    email: clean(body.email),
    telephone: clean(body.telephone),
    type_bateau: clean(body.type_bateau),
    marque: clean(body.marque),
    modele: clean(body.modele),
    port: clean(body.port),
    type_prestation: clean(body.type_prestation),
    description_demande: clean(body.description_demande),
  };

  // Validation côté serveur (miroir de la validation client d'origine)
  if (
    !payload.prenom ||
    !payload.nom ||
    !payload.email ||
    !payload.type_bateau ||
    !payload.type_prestation ||
    !payload.description_demande
  ) {
    return NextResponse.json(
      {
        message:
          "Merci de remplir prénom, nom, email, type de bateau, prestation et message.",
      },
      { status: 422 }
    );
  }

  // Payload attendu par le CRM (identique à l'app.js d'origine)
  const crmPayload = {
    prenom: payload.prenom,
    nom: payload.nom,
    email: payload.email,
    telephone: payload.telephone || null,
    type_bateau: payload.type_bateau || null,
    marque: payload.marque || null,
    modele: payload.modele || null,
    port: payload.port || null,
    type_prestation: payload.type_prestation,
    description_demande: payload.description_demande,
    source: "site internet",
    assigne_a: null,
    priorite: "normale",
    montant_chantier: 0,
  };

  try {
    const crmResponse = await fetch(CRM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(crmPayload),
    });

    const text = await crmResponse.text();

    if (!crmResponse.ok) {
      console.error("Erreur CRM", crmResponse.status, text);
      return NextResponse.json(
        { message: "Le service de devis est momentanément indisponible. Réessayez ou contactez-nous directement." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message:
        "Demande préparée avec succès. Nous reviendrons vers vous après étude de votre projet.",
    });
  } catch (error) {
    console.error("Erreur réseau CRM", error);
    return NextResponse.json(
      { message: "Erreur réseau. Réessayez dans un instant ou contactez-nous directement." },
      { status: 502 }
    );
  }
}
