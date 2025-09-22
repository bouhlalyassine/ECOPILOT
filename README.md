# Ecopilot – Plateforme RSE / ESG

## Présentation

Ecopilot est une application Next.js 14 multi-tenant dédiée au pilotage RSE/ESG. Elle centralise les données opérationnelles (énergie, eau, déchets, social, production), calcule des indicateurs clés, applique des scénarios de décarbonation et génère des rapports PDF/DOCX. Cette v1 met l’accent sur la structure full‑stack TypeScript, l’import Excel, les calculs carbone et le workflow de validation.

## Stack technique

- **Next.js 14 (App Router)** + **TypeScript**
- **Tailwind CSS** pour le design
- **Prisma** (PostgreSQL) avec seed et migrations
- **NextAuth (Credentials)** pour l’authentification
- **next-intl** pour l’i18n FR/EN
- **React Query** pour la gestion de cache client
- **Chart.js** / `react-chartjs-2` pour les graphiques
- **xlsx** pour l’import Excel, **puppeteer** et **docx** pour les rapports
- **Jest + ts-jest** pour les tests unitaires

## Arborescence principale

```text
apps/web/
  app/
    [locale]/(auth)/login
    [locale]/(dashboard)/{dashboard,modules,scenarios,reports,settings}
    api/... (Next.js API Routes sécurisées)
  components/
  lib/
  services/
  types/

prisma/
  schema.prisma
  migrations/
  seed.ts

tests/
  campaign.test.ts
  scenario.test.ts
```

## Prérequis

- Node.js 18+ (LTS recommandé)
- PostgreSQL 14+
- `pnpm` ou `npm` (les commandes ci-dessous utilisent `npm`)
- Chromium (géré automatiquement par `puppeteer`, possibilité de définir `PUPPETEER_EXECUTABLE_PATH` si nécessaire)

## Configuration & lancement

1. **Installer les dépendances**

   ```bash
   npm install
   ```

2. **Variables d’environnement**

   Copiez `.env.example` vers `.env` et renseignez :

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/ecopilot"
   NEXTAUTH_SECRET="clé_secrète"
   NEXTAUTH_URL="http://localhost:3000"
   ```

3. **Initialiser la base de données**

   ```bash
   npm run db:migrate    # applique la migration initiale
   npm run db:seed       # insère l’organisation, les sites, utilisateurs et données exemple
   ```

4. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

   L’application est disponible sur [http://localhost:3000](http://localhost:3000) et gère automatiquement la sélection de langue (`/fr` par défaut).

## Comptes de démonstration

Les utilisateurs créés par le seed partagent le mot de passe `Password123!` :

| Rôle           | Email                   |
| -------------- | ----------------------- |
| ADMIN          | `admin@ecopilot.test`   |
| SUPER_USER     | `super@ecopilot.test`   |
| USER           | `user@ecopilot.test`    |
| AGENT_SAISIE   | `agent@ecopilot.test`   |

## Fonctionnalités clés

### Authentification & RBAC

- Authentification par email/mot de passe via NextAuth (Credentials)
- Multi-tenant : chaque utilisateur est rattaché à une organisation et possède un périmètre site
- Rôles : `ADMIN`, `SUPER_USER`, `USER`, `AGENT_SAISIE` avec contrôle côté serveur sur chaque API

### Modules de données

- Énergie, Eau, Déchets, Actions sociales, Production
- Formulaires de saisie (statut `DRAFT`) + liste des enregistrements (workflow validation)
- Import Excel multi-feuilles (`/api/imports`) avec prévisualisation et insertion en `DRAFT`

### Calculs & scénarios

- Calcul de campagne (`computeCampaign`) paramétrable par organisation (mois de démarrage)
- Facteurs d’émission personnalisables par organisation
- Calcul tCO2e (énergie + déchets) sans persistance redondante
- Scénarios de décarbonation : réductions en pourcentage ou absolues, applicables à partir d’une campagne cible

### Dashboard & reporting

- Dashboard principal : KPIs, graphiques Chart.js (baseline vs simulé)
- Pages modules avec filtres et formulaires
- Page scénarios (configuration + comparaison Baseline/Simulé)
- Génération de rapports PDF/DOCX via `/api/reports` (HTML → PDF avec Puppeteer, DOCX via `docx`)
- Page paramètres : organisation, sites, utilisateurs

## Tests

Deux suites Jest couvrent les points critiques :

- `tests/campaign.test.ts` – calcul des campagnes
- `tests/scenario.test.ts` – moteur d’application des scénarios (règle 24/25)

Lancer tous les tests :

```bash
npm run test
```

## Import Excel – format attendu

| Feuille         | Colonnes obligatoires                                                                 |
| --------------- | ------------------------------------------------------------------------------------- |
| `Energie`       | `Année`, `Mois`, `Site`, `Type`, `Unité`, `Valeur`                                    |
| `Eau`           | `Année`, `Mois`, `Site`, `Famille de culture`, `Variété`, `EAU_m3`                    |
| `Dechets`       | `Année`, `Mois`, `Site`, `Categorie_Dechets`, `Unité`, `Valeur`                       |
| `Social`        | `Année`, `Mois`, `Site`, `Action`, `Budget`, `Nombre de personnes beneficières`       |
| `Production`    | `Année`, `Mois`, `Site`, `Famille de culture`, `Variété`, `SUP_ha`, `PROD_kg`         |
| `Details_Site`  | `Site`, `Société`, `BU`, `Activité`, `Filière`, `Région` (création automatique si site absent) |

API : `POST /api/imports` avec `{ "mode": "preview" | "commit", "file": "<base64-xlsx>" }`

## Génération de rapports

- API : `POST /api/reports` avec `{ format: 'pdf' | 'docx', scenarioId?: string }`
- La réponse contient `filename`, `mimeType`, `file` (Base64). La page “Rapport RSE” propose un générateur prêt à l’emploi.

## Scripts NPM

| Commande           | Description                               |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Démarrage Next.js en mode développement    |
| `npm run build`    | Build production                           |
| `npm run start`    | Lancement production                       |
| `npm run lint`     | ESLint (configuration Next.js par défaut)  |
| `npm run test`     | Tests Jest                                 |
| `npm run db:migrate` | `prisma migrate dev`                     |
| `npm run db:seed`  | Exécution de `prisma/seed.ts`              |

## Notes supplémentaires

- Puppeteer télécharge automatiquement Chromium (prévoir ~100 MB). Pour utiliser un binaire existant : définir `PUPPETEER_EXECUTABLE_PATH`.
- Les tableaux (dashboard, modules) sont paginés côté base via Prisma et limités à 100 lignes dans cette v1.
- Les routes API renvoient des statuts HTTP explicites (`401`, `403`, etc.) et sont protégées par `requireSession`.
- L’i18n est gérée via `next-intl` : traductions de base dans `i18n/locales/fr|en`.

Bon pilotage RSE avec Ecopilot !
