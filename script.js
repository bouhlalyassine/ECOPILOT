const translations = {
  fr: {
    'brand.title': 'Ecopilot',
    'brand.subtitle': 'Pilotage ESG',
    'welcome.title': 'Bienvenue',
    'welcome.user': 'Utilisateur',
    'actions.sidebar.collapse': 'Replier le menu',
    'actions.sidebar.expand': 'Déployer le menu',
    'actions.theme.dark': 'Mode sombre',
    'actions.theme.light': 'Mode clair',
    'buttons.logout': 'Déconnexion',
    'breadcrumbs.home': 'Accueil',
    'user.role': 'Admin',
    'user.status': 'Connecté',
    'nav.sections.overview': 'Vue générale',
    'nav.sections.database': 'Base de données',
    'nav.sections.modules': 'Modules d’analyse',
    'nav.sections.reporting': 'Reporting',
    'nav.sections.parameters': 'Paramètres',
    'nav.overview.label': 'Main KPIs',
    'nav.dataEntry.label': 'Saisie de données',
    'nav.filters.label': 'Filtres & vues',
    'nav.activity.label': 'Activité & suivi',
    'nav.carbon.label': 'Empreinte carbone',
    'nav.energy.label': 'Gestion de l’énergie',
    'nav.social.label': 'Social & sociétal',
    'nav.governance.label': 'Gouvernance',
    'nav.annual.label': 'Rapport annuel RSE',
    'nav.performance.label': 'Rapport de performance',
    'nav.parameters.label': 'Administration',
    'nav.popover.hint': 'Survoler pour explorer le module complet.',
    'nav.dataEntry.submodules.title': 'Sous-modules',
    'nav.dataEntry.submodules.items.business': 'BU',
    'nav.dataEntry.submodules.items.activity': 'Activité',
    'nav.dataEntry.submodules.items.filters': 'Filtres',
    'nav.dataEntry.submodules.items.sites': 'Sites',
    'nav.filters.submodules.title': 'Sous-modules',
    'nav.filters.submodules.items.global': 'Vue globale',
    'nav.filters.submodules.items.business': 'Vue BU',
    'nav.filters.submodules.items.site': 'Vue site',
    'nav.filters.submodules.items.saved': 'Filtres enregistrés',
    'nav.activity.submodules.title': 'Sous-modules',
    'nav.activity.submodules.items.workflow': 'Workflows',
    'nav.activity.submodules.items.notifications': 'Notifications',
    'nav.activity.submodules.items.history': 'Historique',
    'nav.carbon.submodules.title': 'Focus',
    'nav.carbon.submodules.items.scope1': 'Scope 1',
    'nav.carbon.submodules.items.scope2': 'Scope 2',
    'nav.carbon.submodules.items.scope3': 'Scope 3',
    'nav.carbon.submodules.items.actionPlans': 'Plans d’action',
    'nav.energy.submodules.title': 'Focus',
    'nav.energy.submodules.items.consumption': 'Consommations',
    'nav.energy.submodules.items.optimisation': 'Optimisation',
    'nav.energy.submodules.items.alerts': 'Alertes',
    'nav.social.submodules.title': 'Focus',
    'nav.social.submodules.items.engagement': 'Engagement',
    'nav.social.submodules.items.diversity': 'Diversité',
    'nav.social.submodules.items.qvt': 'Qualité de vie au travail',
    'nav.governance.submodules.title': 'Focus',
    'nav.governance.submodules.items.comite': 'Comités',
    'nav.governance.submodules.items.risk': 'Risques',
    'nav.governance.submodules.items.compliance': 'Conformité',
    'nav.annual.submodules.title': 'Livrables',
    'nav.annual.submodules.items.structure': 'Structure du rapport',
    'nav.annual.submodules.items.sources': 'Sources de données',
    'nav.annual.submodules.items.validation': 'Validation',
    'nav.performance.submodules.title': 'Livrables',
    'nav.performance.submodules.items.comparative': 'Tableaux comparatifs',
    'nav.performance.submodules.items.exports': 'Exports',
    'nav.performance.submodules.items.sharing': 'Partage',
    'nav.parameters.submodules.title': 'Gestion',
    'nav.parameters.submodules.items.users': 'Utilisateurs',
    'nav.parameters.submodules.items.security': 'Sécurité',
    'nav.parameters.submodules.items.settings': 'Paramètres globaux',
    'sections.dashboard.title': 'Main KPIs, graphiques & indicateurs',
    'sections.dashboard.intro': 'Une page d’accueil pensée pour donner immédiatement la tendance ESG, accéder aux modules clés et guider l’utilisateur vers les actions prioritaires.',
    'sections.dashboard.parameters.title': 'Paramètres',
    'sections.dashboard.parameters.note': 'Administration globale par l’organisation cliente.',
    'sections.dashboard.parameters.items.profile': 'Profil',
    'sections.dashboard.parameters.items.organization': 'Organisation',
    'sections.dashboard.parameters.items.subscription': 'Abonnement',
    'sections.dashboard.parameters.items.notifications': 'Notifications',
    'sections.dashboard.parameters.items.objectives': 'Objectifs',
    'sections.dashboard.modules.title': 'Modules',
    'sections.dashboard.modules.note': 'Accès direct aux flux métiers.',
    'sections.dashboard.modules.items.energy': 'Gestion de l’énergie',
    'sections.dashboard.modules.items.carbon': 'Empreinte carbone',
    'sections.dashboard.modules.items.social': 'Sociale & sociétale',
    'sections.dashboard.modules.items.governance': 'Gouvernance & risques',
    'sections.dashboard.alignment.title': 'Alignement RSE',
    'sections.dashboard.alignment.note': 'Suivi du niveau de couverture des référentiels.',
    'sections.dashboard.alignment.items.gri': 'GRI',
    'sections.dashboard.alignment.items.odds': 'ODD',
    'sections.dashboard.alignment.items.csrd': 'CSRD',
    'sections.dashboard.alignment.items.iso': 'ISO 26000',
    'sections.dashboard.main.title': 'Main KPIs',
    'sections.dashboard.main.note': 'Sélection personnalisée par rôle.',
    'sections.dashboard.main.items.primary': 'Indicateurs prioritaires',
    'sections.dashboard.main.items.secondary': 'Graphiques dynamiques',
    'sections.dashboard.main.items.custom': 'Widgets personnalisés',
    'sections.dashboard.main.placeholder': 'Ajouter un module de visualisation',
    'sections.dashboard.note': 'NB : les sous-modules s’affichent automatiquement selon les droits et modules activés.',
    'sections.dataEntry.title': 'Saisie de données',
    'sections.dataEntry.intro': 'Workflow collaboratif depuis la collecte terrain jusqu’à la consolidation groupe.',
    'sections.dataEntry.steps.title': 'Étapes clés',
    'sections.dataEntry.steps.items.collect': 'Collecte : formulaires normalisés, imports Excel assistés.',
    'sections.dataEntry.steps.items.validate': 'Validation : contrôles automatiques et revue du Super User.',
    'sections.dataEntry.steps.items.approve': 'Approbation : verrouillage, horodatage et envoi vers les indicateurs.',
    'sections.dataEntry.controls.title': 'Contrôles & traçabilité',
    'sections.dataEntry.controls.items.traceability': 'Historique complet des contributions par rôle.',
    'sections.dataEntry.controls.items.version': 'Versionning des campagnes mensuelles / trimestrielles.',
    'sections.dataEntry.controls.items.audit': 'Journal d’audit exportable pour les commissaires.',
    'sections.dataEntry.integrations.title': 'Intégrations',
    'sections.dataEntry.integrations.items.internal': 'Connexion aux ERP internes (SAP, Oracle, Sage…).',
    'sections.dataEntry.integrations.items.external': 'Imports ponctuels depuis bases externes ou prestataires.',
    'sections.dataEntry.integrations.items.apis': 'API sécurisée pour industrialiser les synchronisations.',
    'sections.dataEntry.callout': 'Un modèle de langage embarqué propose des recommandations qualité et suggère des valeurs lorsqu’une donnée manque.',
    'sections.filters.title': 'Filtres & vues',
    'sections.filters.intro': 'Affinez l’analyse en croisant les périmètres métiers, temporels et géographiques.',
    'sections.filters.matrix.title': 'Axes de filtrage',
    'sections.filters.matrix.items.period': 'Période : mois, trimestre, année, multi-années.',
    'sections.filters.matrix.items.scope': 'Périmètre : groupe, BU, site, fournisseur.',
    'sections.filters.matrix.items.activity': 'Activité : processus, projets, portefeuille d’initiatives.',
    'sections.filters.matrix.items.impact': 'Impact : environnemental, social, gouvernance.',
    'sections.filters.usage.title': 'Cas d’usage',
    'sections.filters.usage.items.snapshots': 'Créer des vues instantanées pour les comités.',
    'sections.filters.usage.items.comparisons': 'Comparer N vs N-1 ou objectif vs réalisé.',
    'sections.filters.usage.items.alerts': 'Sauvegarder un filtre et recevoir une alerte en cas d’écart.',
    'sections.filters.note': 'Les filtres peuvent être sauvegardés, partagés ou utilisés pour générer automatiquement un rapport.',
    'sections.activity.title': 'Activité & suivi',
    'sections.activity.intro': 'Pilotage quotidien des actions et notifications issues des modules.',
    'sections.activity.timeline.title': 'Journal d’activité',
    'sections.activity.timeline.items.tasks': 'Tâches assignées par module et niveau de priorité.',
    'sections.activity.timeline.items.changelog': 'Historique des modifications avec commentaires.',
    'sections.activity.timeline.items.comments': 'Fil de discussion entre contributeurs et managers.',
    'sections.activity.security.title': 'Gouvernance',
    'sections.activity.security.items.roles': 'Droits différenciés : Admin, Super User, Agent de saisie.',
    'sections.activity.security.items.approvals': 'Workflow d’approbation configurable par module.',
    'sections.activity.security.items.archives': 'Archivage automatique des campagnes terminées.',
    'sections.activity.callout': 'Un tableau de bord de notifications consolide les alertes critiques pour garder la maîtrise des délais.',
    'sections.carbon.title': 'Empreinte carbone',
    'sections.carbon.intro': 'Piloter les émissions sur les scopes 1, 2 et 3 avec une vision budgétaire.',
    'sections.carbon.focus.title': 'Périmètre & facteurs',
    'sections.carbon.focus.items.scopes': 'Calcul automatisé des scopes 1, 2 et 3 avec facteurs certifiés.',
    'sections.carbon.focus.items.factors': 'Mise à jour des facteurs ADEME, DEFRA, IEA et facteurs maison.',
    'sections.carbon.focus.items.trajectory': 'Construction de trajectoires SBTi et budgets carbone par BU.',
    'sections.carbon.outputs.title': 'Restitution',
    'sections.carbon.outputs.items.reporting': 'Exports conformes CSRD, CDP, BEGES, label bas carbone.',
    'sections.carbon.outputs.items.alerts': 'Alertes sur dérives d’intensité ou ruptures de données.',
    'sections.carbon.outputs.items.actions': 'Plan d’actions bas carbone avec suivi ROI & co-bénéfices.',
    'sections.carbon.note': 'Intégration possible avec des capteurs IoT et plateformes fournisseurs pour enrichir le scope 3.',
    'sections.energy.title': 'Gestion de l’énergie',
    'sections.energy.intro': 'Suivre les consommations, mesurer l’intensité énergétique et piloter la sobriété.',
    'sections.energy.monitoring.title': 'Suivi',
    'sections.energy.monitoring.items.consumption': 'Consolidation multi-énergies et visualisation des pics.',
    'sections.energy.monitoring.items.intensity': 'Indicateurs d’intensité par m², unité produite ou site.',
    'sections.energy.monitoring.items.investments': 'Suivi des investissements efficacité et de leur ROI.',
    'sections.energy.optimisation.title': 'Optimisation',
    'sections.energy.optimisation.items.plan': 'Plan de sobriété avec jalons et responsables.',
    'sections.energy.optimisation.items.projects': 'Portefeuille de projets (ISO 50001, CEE, relamping…).',
    'sections.energy.optimisation.items.budget': 'Pilotage budgétaire : CAPEX, OPEX, certificats d’économie.',
    'sections.energy.note': 'Des connecteurs télérelève permettent d’automatiser la collecte en quasi temps réel.',
    'sections.social.title': 'Social & sociétal',
    'sections.social.intro': 'Mesurer l’engagement des collaborateurs et l’impact des actions sociétales.',
    'sections.social.indicators.title': 'Indicateurs',
    'sections.social.indicators.items.engagement': 'Indice d’engagement, absentéisme, eNPS.',
    'sections.social.indicators.items.diversity': 'Diversité, égalité professionnelle, inclusion.',
    'sections.social.indicators.items.csr': 'Solidarité, achats responsables, mécénat.',
    'sections.social.programs.title': 'Programmes',
    'sections.social.programs.items.surveys': 'Campagnes d’écoute & questionnaires anonymisés.',
    'sections.social.programs.items.training': 'Plans de formation, certifications, montée en compétences.',
    'sections.social.programs.items.community': 'Suivi des initiatives locales et des partenaires associatifs.',
    'sections.social.note': 'Des tableaux de bord thématiques facilitent la communication interne et externe.',
    'sections.governance.title': 'Gouvernance',
    'sections.governance.intro': 'Structurer les responsabilités, les risques et la conformité ESG.',
    'sections.governance.pillars.title': 'Piliers',
    'sections.governance.pillars.items.compliance': 'Cartographie conformité (éthique, anti-corruption, RGPD).',
    'sections.governance.pillars.items.risk': 'Registre des risques ESG avec plans de mitigation.',
    'sections.governance.pillars.items.ethics': 'Suivi des codes de conduite, lanceurs d’alerte, audits.',
    'sections.governance.data.title': 'Données & process',
    'sections.governance.data.items.references': 'Référentiels associés : ISO 26000, LUCIE, Ecovadis.',
    'sections.governance.data.items.workflow': 'Workflow de validation croisé avec les comités.',
    'sections.governance.data.items.export': 'Exports automatiques pour le conseil d’administration.',
    'sections.governance.note': 'La gouvernance centralise aussi les politiques ESG et la documentation réglementaire.',
    'sections.annual.title': 'Rapport annuel RSE',
    'sections.annual.intro': 'Génération automatique de rapports extra-financiers personnalisés.',
    'sections.annual.steps.title': 'Pour générer un rapport',
    'sections.annual.steps.items.framework': 'Choisir le référentiel (GRI, CSRD, ODD, etc.).',
    'sections.annual.steps.items.period': 'Sélectionner la période (mois/année à mois/année).',
    'sections.annual.steps.items.validation': 'Valider les sections et commentaires narratifs.',
    'sections.annual.deliverables.title': 'Livrables',
    'sections.annual.deliverables.items.pdf': 'Exports adaptatifs PDF et Word prêts à diffusion.',
    'sections.annual.deliverables.items.templates': 'Templates conformes aux référentiels choisis.',
    'sections.annual.deliverables.items.automation': 'Automatisation de la pré-remplissage avec données validées.',
    'sections.annual.note': 'Un module de langage propose plusieurs exemples de rapports pour inspirer la rédaction.',
    'sections.performance.title': 'Rapport de performance',
    'sections.performance.intro': 'Tableaux comparatifs et analyses rapides pour suivre les résultats.',
    'sections.performance.steps.title': 'Configuration',
    'sections.performance.steps.items.filters': 'Choisir les filtres et indicateurs à comparer.',
    'sections.performance.steps.items.period': 'Définir la période de couverture (mois/année).',
    'sections.performance.steps.items.share': 'Partager le rapport ou programmer l’envoi automatique.',
    'sections.performance.outputs.title': 'Sorties',
    'sections.performance.outputs.items.comparative': 'Tableaux comparatifs N vs N-1 ou objectif.',
    'sections.performance.outputs.items.scorecards': 'Scorecards par BU avec statut couleur.',
    'sections.performance.outputs.items.notifications': 'Notifications lors d’écarts majeurs sur un indicateur.',
    'sections.performance.note': 'Export disponible en PDF, Excel et connecteur Power BI.',
    'sections.parameters.title': 'Administration',
    'sections.parameters.intro': 'Gestion des paramètres globaux et des accès utilisateurs.',
    'sections.parameters.org.title': 'Organisation',
    'sections.parameters.org.items.structure': 'Structure : entités, BU, sites, équipes.',
    'sections.parameters.org.items.entitlements': 'Droits : rôles, scopes, délégations temporaires.',
    'sections.parameters.org.items.localization': 'Localisation : devise, fuseaux, langues.',
    'sections.parameters.targets.title': 'Objectifs & alertes',
    'sections.parameters.targets.items.strategy': 'Alignement stratégique avec les objectifs groupe.',
    'sections.parameters.targets.items.kpi': 'Objectifs par indicateur et trajectoires associées.',
    'sections.parameters.targets.items.alerts': 'Seuils d’alerte et canaux de notification.',
    'sections.parameters.callout': 'Les administrateurs peuvent simuler l’activation de nouveaux modules avant déploiement.'
  },
  en: {
    'brand.title': 'Ecopilot',
    'brand.subtitle': 'ESG cockpit',
    'welcome.title': 'Welcome',
    'welcome.user': 'User',
    'actions.sidebar.collapse': 'Collapse menu',
    'actions.sidebar.expand': 'Expand menu',
    'actions.theme.dark': 'Dark mode',
    'actions.theme.light': 'Light mode',
    'buttons.logout': 'Sign out',
    'breadcrumbs.home': 'Home',
    'user.role': 'Admin',
    'user.status': 'Online',
    'nav.sections.overview': 'Overview',
    'nav.sections.database': 'Data hub',
    'nav.sections.modules': 'Analysis modules',
    'nav.sections.reporting': 'Reporting',
    'nav.sections.parameters': 'Settings',
    'nav.overview.label': 'Main KPIs',
    'nav.dataEntry.label': 'Data entry',
    'nav.filters.label': 'Filters & views',
    'nav.activity.label': 'Activity log',
    'nav.carbon.label': 'Carbon footprint',
    'nav.energy.label': 'Energy management',
    'nav.social.label': 'Social & societal',
    'nav.governance.label': 'Governance',
    'nav.annual.label': 'Annual ESG report',
    'nav.performance.label': 'Performance report',
    'nav.parameters.label': 'Administration',
    'nav.popover.hint': 'Hover to explore the full module.',
    'nav.dataEntry.submodules.title': 'Sub-modules',
    'nav.dataEntry.submodules.items.business': 'Business units',
    'nav.dataEntry.submodules.items.activity': 'Activity',
    'nav.dataEntry.submodules.items.filters': 'Filters',
    'nav.dataEntry.submodules.items.sites': 'Sites',
    'nav.filters.submodules.title': 'Sub-modules',
    'nav.filters.submodules.items.global': 'Global view',
    'nav.filters.submodules.items.business': 'BU view',
    'nav.filters.submodules.items.site': 'Site view',
    'nav.filters.submodules.items.saved': 'Saved filters',
    'nav.activity.submodules.title': 'Sub-modules',
    'nav.activity.submodules.items.workflow': 'Workflows',
    'nav.activity.submodules.items.notifications': 'Notifications',
    'nav.activity.submodules.items.history': 'History',
    'nav.carbon.submodules.title': 'Highlights',
    'nav.carbon.submodules.items.scope1': 'Scope 1',
    'nav.carbon.submodules.items.scope2': 'Scope 2',
    'nav.carbon.submodules.items.scope3': 'Scope 3',
    'nav.carbon.submodules.items.actionPlans': 'Action plans',
    'nav.energy.submodules.title': 'Highlights',
    'nav.energy.submodules.items.consumption': 'Consumption',
    'nav.energy.submodules.items.optimisation': 'Optimisation',
    'nav.energy.submodules.items.alerts': 'Alerts',
    'nav.social.submodules.title': 'Highlights',
    'nav.social.submodules.items.engagement': 'Engagement',
    'nav.social.submodules.items.diversity': 'Diversity',
    'nav.social.submodules.items.qvt': 'Workplace wellbeing',
    'nav.governance.submodules.title': 'Highlights',
    'nav.governance.submodules.items.comite': 'Committees',
    'nav.governance.submodules.items.risk': 'Risks',
    'nav.governance.submodules.items.compliance': 'Compliance',
    'nav.annual.submodules.title': 'Deliverables',
    'nav.annual.submodules.items.structure': 'Report structure',
    'nav.annual.submodules.items.sources': 'Data sources',
    'nav.annual.submodules.items.validation': 'Validation',
    'nav.performance.submodules.title': 'Deliverables',
    'nav.performance.submodules.items.comparative': 'Comparative tables',
    'nav.performance.submodules.items.exports': 'Exports',
    'nav.performance.submodules.items.sharing': 'Sharing',
    'nav.parameters.submodules.title': 'Administration',
    'nav.parameters.submodules.items.users': 'Users',
    'nav.parameters.submodules.items.security': 'Security',
    'nav.parameters.submodules.items.settings': 'Global settings',
    'sections.dashboard.title': 'Main KPIs, charts & indicators',
    'sections.dashboard.intro': 'A homepage designed to display the ESG pulse, provide shortcuts to core modules, and highlight priority actions.',
    'sections.dashboard.parameters.title': 'Parameters',
    'sections.dashboard.parameters.note': 'Admin scope managed at organisation level.',
    'sections.dashboard.parameters.items.profile': 'Profile',
    'sections.dashboard.parameters.items.organization': 'Organisation',
    'sections.dashboard.parameters.items.subscription': 'Subscription',
    'sections.dashboard.parameters.items.notifications': 'Notifications',
    'sections.dashboard.parameters.items.objectives': 'Objectives',
    'sections.dashboard.modules.title': 'Modules',
    'sections.dashboard.modules.note': 'Quick access to operational flows.',
    'sections.dashboard.modules.items.energy': 'Energy management',
    'sections.dashboard.modules.items.carbon': 'Carbon footprint',
    'sections.dashboard.modules.items.social': 'Social & societal',
    'sections.dashboard.modules.items.governance': 'Governance & risks',
    'sections.dashboard.alignment.title': 'ESG alignment',
    'sections.dashboard.alignment.note': 'Track coverage vs leading frameworks.',
    'sections.dashboard.alignment.items.gri': 'GRI',
    'sections.dashboard.alignment.items.odds': 'SDGs',
    'sections.dashboard.alignment.items.csrd': 'CSRD',
    'sections.dashboard.alignment.items.iso': 'ISO 26000',
    'sections.dashboard.main.title': 'Main KPIs',
    'sections.dashboard.main.note': 'Personalised selection per role.',
    'sections.dashboard.main.items.primary': 'Priority indicators',
    'sections.dashboard.main.items.secondary': 'Dynamic charts',
    'sections.dashboard.main.items.custom': 'Custom widgets',
    'sections.dashboard.main.placeholder': 'Add a visual module',
    'sections.dashboard.note': 'NB: sub-modules appear automatically based on entitlements and activated features.',
    'sections.dataEntry.title': 'Data entry',
    'sections.dataEntry.intro': 'Collaborative workflow from field collection to group consolidation.',
    'sections.dataEntry.steps.title': 'Key steps',
    'sections.dataEntry.steps.items.collect': 'Collection: guided forms and assisted spreadsheet uploads.',
    'sections.dataEntry.steps.items.validate': 'Validation: automated checks and Super User review.',
    'sections.dataEntry.steps.items.approve': 'Approval: lock, timestamp and push to indicators.',
    'sections.dataEntry.controls.title': 'Controls & traceability',
    'sections.dataEntry.controls.items.traceability': 'Complete history of contributions by role.',
    'sections.dataEntry.controls.items.version': 'Versioning for monthly / quarterly campaigns.',
    'sections.dataEntry.controls.items.audit': 'Exportable audit trail for auditors.',
    'sections.dataEntry.integrations.title': 'Integrations',
    'sections.dataEntry.integrations.items.internal': 'Connections to internal ERPs (SAP, Oracle, Sage…).',
    'sections.dataEntry.integrations.items.external': 'One-off imports from external databases or providers.',
    'sections.dataEntry.integrations.items.apis': 'Secure API to industrialise synchronisations.',
    'sections.dataEntry.callout': 'An embedded language model suggests quality improvements and proposes values when a data point is missing.',
    'sections.filters.title': 'Filters & views',
    'sections.filters.intro': 'Refine the analysis by crossing business, time and geographic scopes.',
    'sections.filters.matrix.title': 'Filtering axes',
    'sections.filters.matrix.items.period': 'Period: month, quarter, year, multi-year.',
    'sections.filters.matrix.items.scope': 'Scope: group, BU, site, supplier.',
    'sections.filters.matrix.items.activity': 'Activity: process, projects, initiative portfolio.',
    'sections.filters.matrix.items.impact': 'Impact: environmental, social, governance.',
    'sections.filters.usage.title': 'Use cases',
    'sections.filters.usage.items.snapshots': 'Create instant snapshots for steering committees.',
    'sections.filters.usage.items.comparisons': 'Compare current vs previous year or target vs actual.',
    'sections.filters.usage.items.alerts': 'Save a filter and trigger alerts when deviations occur.',
    'sections.filters.note': 'Filters can be saved, shared, or reused to automatically generate a report.',
    'sections.activity.title': 'Activity log',
    'sections.activity.intro': 'Day-to-day follow-up of tasks and notifications from the modules.',
    'sections.activity.timeline.title': 'Activity journal',
    'sections.activity.timeline.items.tasks': 'Assigned tasks by module with priority level.',
    'sections.activity.timeline.items.changelog': 'Change history with comments.',
    'sections.activity.timeline.items.comments': 'Discussion thread between contributors and managers.',
    'sections.activity.security.title': 'Governance',
    'sections.activity.security.items.roles': 'Role-based access: Admin, Super User, Data Entry agent.',
    'sections.activity.security.items.approvals': 'Configurable approval workflow per module.',
    'sections.activity.security.items.archives': 'Automatic archiving of completed campaigns.',
    'sections.activity.callout': 'A consolidated notification board keeps critical alerts under control.',
    'sections.carbon.title': 'Carbon footprint',
    'sections.carbon.intro': 'Steer emissions across scopes 1, 2 and 3 with a budget view.',
    'sections.carbon.focus.title': 'Scope & factors',
    'sections.carbon.focus.items.scopes': 'Automated calculation for scopes 1, 2 and 3 with certified factors.',
    'sections.carbon.focus.items.factors': 'Updates with ADEME, DEFRA, IEA and custom factors.',
    'sections.carbon.focus.items.trajectory': 'Build SBTi trajectories and carbon budgets per BU.',
    'sections.carbon.outputs.title': 'Outputs',
    'sections.carbon.outputs.items.reporting': 'CSRD, CDP, BEGES and low-carbon label ready exports.',
    'sections.carbon.outputs.items.alerts': 'Alerts on intensity drifts or data gaps.',
    'sections.carbon.outputs.items.actions': 'Low-carbon action plan with ROI & co-benefits tracking.',
    'sections.carbon.note': 'IoT sensors and supplier platforms can be connected to enrich scope 3.',
    'sections.energy.title': 'Energy management',
    'sections.energy.intro': 'Monitor consumption, measure intensity and drive energy savings.',
    'sections.energy.monitoring.title': 'Monitoring',
    'sections.energy.monitoring.items.consumption': 'Multi-energy consolidation with peak visualisation.',
    'sections.energy.monitoring.items.intensity': 'Intensity indicators per sqm, production unit or site.',
    'sections.energy.monitoring.items.investments': 'Track efficiency investments and their ROI.',
    'sections.energy.optimisation.title': 'Optimisation',
    'sections.energy.optimisation.items.plan': 'Sobriety plan with milestones and owners.',
    'sections.energy.optimisation.items.projects': 'Project portfolio (ISO 50001, energy certificates, relamping…).',
    'sections.energy.optimisation.items.budget': 'Budget steering: CAPEX, OPEX, energy savings certificates.',
    'sections.energy.note': 'Smart meter connectors enable near real-time collection.',
    'sections.social.title': 'Social & societal',
    'sections.social.intro': 'Measure employee engagement and the impact of societal initiatives.',
    'sections.social.indicators.title': 'Indicators',
    'sections.social.indicators.items.engagement': 'Engagement index, absenteeism, eNPS.',
    'sections.social.indicators.items.diversity': 'Diversity, gender equality, inclusion.',
    'sections.social.indicators.items.csr': 'Solidarity, responsible procurement, philanthropy.',
    'sections.social.programs.title': 'Programs',
    'sections.social.programs.items.surveys': 'Listening campaigns & anonymised surveys.',
    'sections.social.programs.items.training': 'Training plans, certifications, upskilling.',
    'sections.social.programs.items.community': 'Tracking of local initiatives and community partners.',
    'sections.social.note': 'Thematic dashboards streamline internal and external communication.',
    'sections.governance.title': 'Governance',
    'sections.governance.intro': 'Structure responsibilities, risks and ESG compliance.',
    'sections.governance.pillars.title': 'Pillars',
    'sections.governance.pillars.items.compliance': 'Compliance map (ethics, anti-corruption, GDPR).',
    'sections.governance.pillars.items.risk': 'ESG risk register with mitigation plans.',
    'sections.governance.pillars.items.ethics': 'Monitoring of codes of conduct, whistleblowing, audits.',
    'sections.governance.data.title': 'Data & processes',
    'sections.governance.data.items.references': 'Linked frameworks: ISO 26000, LUCIE, Ecovadis.',
    'sections.governance.data.items.workflow': 'Cross-validation workflow with committees.',
    'sections.governance.data.items.export': 'Automatic exports for the board of directors.',
    'sections.governance.note': 'Governance also centralises ESG policies and regulatory documentation.',
    'sections.annual.title': 'Annual ESG report',
    'sections.annual.intro': 'Automatic generation of bespoke sustainability reports.',
    'sections.annual.steps.title': 'How to generate a report',
    'sections.annual.steps.items.framework': 'Select the framework (GRI, CSRD, SDGs, etc.).',
    'sections.annual.steps.items.period': 'Choose the reporting period (month/year to month/year).',
    'sections.annual.steps.items.validation': 'Validate sections and narrative comments.',
    'sections.annual.deliverables.title': 'Deliverables',
    'sections.annual.deliverables.items.pdf': 'Adaptive PDF and Word outputs ready for distribution.',
    'sections.annual.deliverables.items.templates': 'Templates aligned with the chosen frameworks.',
    'sections.annual.deliverables.items.automation': 'Automation pre-fills with validated data.',
    'sections.annual.note': 'An integrated language model proposes sample reports to support drafting.',
    'sections.performance.title': 'Performance report',
    'sections.performance.intro': 'Comparison tables and quick insights to track results.',
    'sections.performance.steps.title': 'Configuration',
    'sections.performance.steps.items.filters': 'Choose filters and indicators to compare.',
    'sections.performance.steps.items.period': 'Define the coverage period (month/year).',
    'sections.performance.steps.items.share': 'Share the report or schedule automatic delivery.',
    'sections.performance.outputs.title': 'Outputs',
    'sections.performance.outputs.items.comparative': 'Comparative tables current vs previous year or target.',
    'sections.performance.outputs.items.scorecards': 'Scorecards by BU with status colours.',
    'sections.performance.outputs.items.notifications': 'Notifications on major variances for any indicator.',
    'sections.performance.note': 'Exports available in PDF, Excel and a Power BI connector.',
    'sections.parameters.title': 'Administration',
    'sections.parameters.intro': 'Manage global settings and user access.',
    'sections.parameters.org.title': 'Organisation',
    'sections.parameters.org.items.structure': 'Structure: entities, BUs, sites, teams.',
    'sections.parameters.org.items.entitlements': 'Permissions: roles, scopes, temporary delegations.',
    'sections.parameters.org.items.localization': 'Localisation: currency, time zones, languages.',
    'sections.parameters.targets.title': 'Objectives & alerts',
    'sections.parameters.targets.items.strategy': 'Strategic alignment with corporate goals.',
    'sections.parameters.targets.items.kpi': 'Targets per KPI with associated trajectories.',
    'sections.parameters.targets.items.alerts': 'Alert thresholds and notification channels.',
    'sections.parameters.callout': 'Admins can simulate new module activation before rollout.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const app = document.querySelector('.app');
  const main = document.getElementById('app-main');
  const navButtons = Array.from(document.querySelectorAll('.nav-item'));
  const sections = Array.from(document.querySelectorAll('.view'));
  const crumbCurrent = document.querySelector('[data-role="current-section"]');
  const languageButtons = Array.from(document.querySelectorAll('.language-switch__btn'));
  const themeToggle = document.querySelector('[data-action="toggle-theme"]');
  const sidebarToggle = document.querySelector('[data-action="collapse-sidebar"]');

  const storageKeys = {
    language: 'ecopilot:language',
    theme: 'ecopilot:theme',
    sidebar: 'ecopilot:sidebar'
  };

  const storage = {
    get(key) {
      try {
        return window.localStorage.getItem(key);
      } catch (error) {
        return null;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        /* noop */
      }
    }
  };

  let activeLanguage = 'fr';

  const getDictionary = (lang) => translations[lang] ?? translations.fr;

  const translateKey = (key, lang = activeLanguage) => {
    const dictionary = getDictionary(lang);
    return dictionary[key] ?? key;
  };

  const updateBreadcrumb = () => {
    if (!crumbCurrent) return;
    const activeSection = sections.find((section) => section.classList.contains('is-active'));
    if (!activeSection) return;
    const title = activeSection.querySelector('[data-role="section-title"]');
    if (!title) return;
    crumbCurrent.textContent = title.textContent.trim();
  };

  const applyLanguage = (lang) => {
    activeLanguage = translations[lang] ? lang : 'fr';
    const dictionary = getDictionary(activeLanguage);
    const translatable = document.querySelectorAll('[data-i18n]');
    translatable.forEach((element) => {
      const key = element.dataset.i18n;
      if (!key) return;
      const value = dictionary[key];
      if (value === undefined) return;
      element.innerHTML = value;
    });
    root.setAttribute('lang', activeLanguage);
    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === activeLanguage;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    storage.set(storageKeys.language, activeLanguage);
    updateBreadcrumb();
  };

  const setTheme = (theme) => {
    const resolved = theme === 'dark' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', resolved);
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(resolved === 'dark'));
      const icon = themeToggle.querySelector('.theme-switch__icon');
      if (icon) {
        icon.textContent = resolved === 'dark' ? '☀️' : '🌙';
      }
      const label = themeToggle.querySelector('.theme-switch__label');
      if (label) {
        const key = resolved === 'dark' ? 'actions.theme.light' : 'actions.theme.dark';
        label.dataset.i18n = key;
        label.innerHTML = translateKey(key);
      }
    }
    storage.set(storageKeys.theme, resolved);
  };

  const setSidebarCollapsed = (collapsed) => {
    if (!app) return;
    const isCollapsed = Boolean(collapsed);
    app.classList.toggle('is-sidebar-collapsed', isCollapsed);
    if (sidebarToggle) {
      sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed));
      const icon = sidebarToggle.querySelector('.sidebar__collapse-icon');
      if (icon) {
        icon.textContent = isCollapsed ? '⮞' : '⮜';
      }
      const label = sidebarToggle.querySelector('.sidebar__collapse-label');
      if (label) {
        const key = isCollapsed ? 'actions.sidebar.expand' : 'actions.sidebar.collapse';
        label.dataset.i18n = key;
        label.innerHTML = translateKey(key);
      }
    }
    storage.set(storageKeys.sidebar, isCollapsed ? '1' : '0');
  };

  const activateSection = (targetId) => {
    const section = sections.find((item) => item.id === targetId);
    if (!section) return;
    sections.forEach((item) => {
      item.classList.toggle('is-active', item === section);
      if (item === section) {
        item.scrollTop = 0;
      }
    });
    navButtons.forEach((button) => {
      const isActive = button.dataset.target === targetId;
      button.classList.toggle('is-active', isActive);
      if (isActive) {
        button.setAttribute('aria-current', 'page');
      } else {
        button.removeAttribute('aria-current');
      }
    });
    updateBreadcrumb();
  };

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      if (!targetId) return;
      activateSection(targetId);
    });
  });

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      if (!lang) return;
      applyLanguage(lang);
    });
  });

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      const collapsed = app?.classList.contains('is-sidebar-collapsed');
      setSidebarCollapsed(!collapsed);
    });
  }

  const savedSidebar = storage.get(storageKeys.sidebar) === '1';
  setSidebarCollapsed(savedSidebar);

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = storage.get(storageKeys.theme) || (prefersDark ? 'dark' : 'light');
  setTheme(savedTheme);

  const savedLanguage = storage.get(storageKeys.language) || 'fr';
  applyLanguage(savedLanguage);

  activateSection(sections.find((section) => section.classList.contains('is-active'))?.id || 'dashboard');
});
