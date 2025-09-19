# RSE_APP

## Objectifs

- Centraliser et fiabiliser l’ensemble des données RSE (sources hétérogènes, traçabilité, qualité).
- Produire un reporting RSE conforme aux standards en vigueur (ex. GHG Protocol, CSRD, GRI).
- Réduire le temps de reporting (imports normalisés, automatisation, exports prêts à l’emploi).
- Assurer le suivi en temps réel des KPIs liés aux ODD/SDG et aux volets Environnement, Social, Gouvernance.
- Favoriser l’amélioration continue des performances RSE (analyses, comparaisons, simulations).
- Anticiper les tendances RSE et les exigences réglementaires.

## Première version de l'application

Cette première itération se concentre sur un **backend FastAPI** exposant une API REST pour gérer :

- les sources de données RSE et leurs métadonnées ;
- les définitions d'indicateurs (metrics) et leurs valeurs collectées ;
- les KPIs et leur évaluation automatique au regard d'une cible ;
- la génération de rapports structurés avec sections, analyses et recommandations.

La base de données est gérée via `SQLModel` (SQLite par défaut) et un script de peuplement (`backend/app/seed.py`) fournit un jeu de données d'exemple.

## Structure du projet

```
backend/
├── app/
│   ├── __init__.py
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   ├── seed.py
│   └── routers/
│       ├── __init__.py
│       ├── datasources.py
│       ├── kpis.py
│       ├── metrics.py
│       └── reports.py
└── tests/
    └── test_api.py
```

## Démarrage rapide

1. **Installer les dépendances** :

   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Initialiser la base de données et lancer l'API** :

   ```bash
   # Peuplement (optionnel)
   python -m app.seed

   # Lancement du serveur
   uvicorn app.main:app --reload
   ```

   L'API est accessible sur http://127.0.0.1:8000 et la documentation interactive sur http://127.0.0.1:8000/docs.

3. **Variables d'environnement** (optionnel) :

   - `DATABASE_URL` : URL SQLAlchemy. Par défaut `sqlite:///./rse_app.db`.

## Tests automatisés

Une suite de tests fonctionnels valide le flux principal (création de source, indicateur, KPI, rapport).

```bash
cd backend
pytest
```

## Prochaines étapes envisagées

- Développement d'une interface web (tableau de bord) pour visualiser les indicateurs et rapports.
- Gestion des utilisateurs, rôles et authentification.
- Imports automatisés (CSV/API externes) et planification.
- Export des rapports vers des formats bureautiques (Excel, PowerPoint, PDF).
- Calculs plus avancés (scopes GES, empreinte carbone, scénarios prospectifs).
