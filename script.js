const appShell = document.querySelector('.app-shell');
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebarToggleIcon = sidebarToggle?.querySelector('.sidebar-toggle__icon');
const sidebarToggleText = sidebarToggle?.querySelector('.sidebar-toggle__text');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.content-section');
const breadcrumbCurrent = document.querySelector('.breadcrumb__current');
const languageButtons = document.querySelectorAll('.language-toggle__btn');
const themeToggle = document.querySelector('.theme-toggle');
const themeToggleIcon = themeToggle?.querySelector('.theme-toggle__icon');
const themeToggleText = themeToggle?.querySelector('.theme-toggle__text');

const STORAGE_KEYS = {
  language: 'ecopilot-language',
  theme: 'ecopilot-theme',
  sidebar: 'ecopilot-sidebar',
};

const translations = {
  fr: {

    'brand.title': 'Ecopilot',
    'brand.subtitle': 'Plateforme RSE',
    'welcome.title': 'Bienvenue',
    'welcome.user': 'Utilisateur',
    'nav.main.label': 'Indicateurs clés',
    'nav.main.hint': 'Synthèse globale',
    'nav.data.label': 'Saisie de données',
    'nav.data.hint': 'Workflow & contrôles',
    'nav.energy.label': "Gestion de l'énergie",
    'nav.energy.hint': 'Consommations & sobriété',
    'nav.carbon.label': 'Gestion des émissions',
    'nav.carbon.hint': 'GHG Protocol, CSRD',
    'nav.waste.label': 'Gestion des déchets',
    'nav.waste.hint': 'Tri & valorisation',
    'nav.social.label': 'Performance sociale',
    'nav.social.hint': 'Engagement & inclusion',
    'nav.reporting.label': 'Rapport RSE',
    'nav.reporting.hint': 'Exports & conformité',
    'nav.parameters.label': 'Paramètres',
    'nav.parameters.hint': 'Organisation & alertes',
    'buttons.logout': 'Déconnexion',
    'actions.sidebar.collapse': 'Replier le menu',
    'actions.sidebar.expand': 'Afficher le menu',
    'actions.theme.dark': 'Mode sombre',
    'actions.theme.light': 'Mode clair',
    'breadcrumbs.level': 'Accueil',
    'user.role': 'Administrateur',
    'user.status': 'Connecté',
    'sections.main.title': 'Indicateurs clés',
    'sections.main.description': "Vue synthétique des performances Environnement, Social et Gouvernance (ESG) pour piloter l'amélioration continue et anticiper les tendances réglementaires.",
    'kpi.carbon.title': 'Empreinte carbone',
    'kpi.carbon.value': '-8% vs N-1',
    'kpi.carbon.meta': 'Scopes 1-3',
    'kpi.energy.title': "Consommation d'énergie",
    'kpi.energy.value': '52 kWh / m²',
    'kpi.energy.meta': 'Objectif sobriété atteint à 92%',
    'kpi.waste.title': 'Taux de valorisation des déchets',
    'kpi.waste.value': '64%',
    'kpi.waste.meta': '+5 pts vs objectif',
    'kpi.social.title': 'Indice social',
    'kpi.social.value': '78 / 100',
    'kpi.social.meta': 'Engagement & formation',
    'cta.kpi': 'Ajouter un KPI',
    'cta.chart': 'Créer un graphique',
    'cta.sdg': 'Configurer un suivi SDG',
    'highlight.alerts.title': 'Alertes intelligentes',
    'highlight.alerts.description': "Notifications proactives lorsqu'un indicateur dérive des seuils définis.",
    'highlight.benchmarks.title': 'Benchmarks sectoriels',
    'highlight.benchmarks.description': 'Comparez vos performances aux moyennes sectorielles et meilleures pratiques.',
    'highlight.scenarios.title': 'Scénarios prospectifs',
    'highlight.scenarios.description': 'Projetez-vous avec des simulations climat, énergie et conformité réglementaire.',
    'sections.data.title': 'Workflow de saisie des données',
    'sections.data.description': 'Un processus collaboratif et traçable pour centraliser les données RSE issues de sources hétérogènes.',
    'data.column.entry.title': 'Saisie de données',
    'data.column.entry.step1.title': 'Agent de saisie',
    'data.column.entry.step1.description': 'Complète les formulaires normalisés (10 à 20 min / mois).',
    'data.column.entry.step2.title': 'Super User',
    'data.column.entry.step2.description': 'Valide ou corrige les données et déclenche les contrôles automatiques.',
    'data.column.entry.step3.title': 'Intégration',
    'data.column.entry.step3.description': 'Les données validées alimentent les tableaux de bord et rapports.',
    'data.column.erp.title': 'Connexion ERP & systèmes',
    'data.column.erp.description': 'Connectez vos ERP et bases de données existantes pour automatiser les imports, assurer la traçabilité et limiter la double saisie.',
    'data.column.erp.item1': "Connecteurs prêts à l'emploi (SAP, Oracle, Sage).",
    'data.column.erp.item2': 'API sécurisées & gestion des droits par rôle.',
    'data.column.erp.item3': 'Imports Excel guidés pour les structures non connectées.',
    'sections.energy.title': "Module — Gestion de l'énergie",
    'sections.energy.description': "Suivez les consommations, identifiez les gisements d'économies et pilotez votre plan de sobriété énergétique.",
    'energy.card.indicators.title': 'Graphiques & indicateurs',
    'energy.card.indicators.item1': 'Répartition des énergies (électricité, gaz, renouvelable).',
    'energy.card.indicators.item2': "Intensité énergétique par site & unité d'œuvre.",
    'energy.card.indicators.item3': "Suivi des actions d'efficacité et ROI associé.",
    'energy.card.filters.title': 'Filtres dynamiques',
    'energy.card.filters.item1': 'Sites, pays et typologies de bâtiments.',
    'energy.card.filters.item2': 'Périodes (mensuel, trimestriel, annuel).',
    'energy.card.filters.item3': 'Comparaison vs objectifs et trajectoire neutralité.',
    'energy.card.chart.title': 'Consommation annuelle',
    'energy.card.chart.description': 'Objectif 2025 : -15% vs référence 2019',
    'sections.carbon.title': 'Module — Gestion des émissions',
    'sections.carbon.description': 'Conformité aux standards GHG Protocol, CSRD et automatisation des calculs de trajectoires carbone.',
    'carbon.card.scopes.title': 'Scopes couverts',
    'carbon.card.scopes.item1': 'Scope 1 & 2 : énergie, flotte, fuites.',
    'carbon.card.scopes.item2': 'Scope 3 : achats, déplacements, logistique.',
    'carbon.card.scopes.item3': "Intégration des facteurs d'émissions certifiés.",
    'carbon.card.automation.title': 'Automatisation',
    'carbon.card.automation.item1': 'Imports normalisés & contrôles de cohérence.',
    'carbon.card.automation.item2': 'Scénarios de neutralité & budgets carbone.',
    'carbon.card.automation.item3': 'Exports réglementaires (CSRD, CDP, ADEME).',
    'carbon.card.chart.title': 'Trajectoire carbone',
    'carbon.card.chart.description': 'Gap to target : -12%',
    'sections.waste.title': 'Module — Gestion des déchets',
    'sections.waste.description': "Optimisez vos flux, augmentez la valorisation matière et assurez la conformité réglementaire locale.",
    'waste.card.indicators.title': 'Indicateurs clés',
    'waste.card.indicators.item1': 'Taux de recyclage & valorisation énergétique.',
    'waste.card.indicators.item2': 'Coûts de traitement vs budget.',
    'waste.card.indicators.item3': 'Alertes seuils pour déchets dangereux.',
    'waste.card.operational.title': 'Suivi opérationnel',
    'waste.card.operational.item1': "Plan d'actions par site & prestataire.",
    'waste.card.operational.item2': 'Contrats & reporting réglementaire.',
    'waste.card.operational.item3': 'Analyse des gisements et opportunités.',
    'waste.card.chart.title': 'Valorisation par flux',
    'waste.card.chart.value': '64%',
    'waste.card.chart.description': 'Objectif annuel : 60%',
    'sections.social.title': 'Module — Performance sociale & sociétale',
    'sections.social.description': "Mesurez l'impact social de vos initiatives et renforcez la démarche RSE auprès des collaborateurs.",
    'social.card.axes.title': 'Axes de suivi',
    'social.card.axes.item1': 'Engagement & climat social.',
    'social.card.axes.item2': 'Diversité, inclusion & égalité professionnelle.',
    'social.card.axes.item3': 'Programmes de formation & mécénat.',
    'social.card.features.title': 'Fonctionnalités',
    'social.card.features.item1': 'Enquêtes pulse & baromètres.',
    'social.card.features.item2': "Plans d'actions avec responsables dédiés.",
    'social.card.features.item3': 'Tableaux de bord multi-sites.',
    'social.card.chart.title': 'Radar ESG',
    'social.card.chart.description': 'Comp & Bien-être en progression.',
    'sections.reporting.title': 'Rapport RSE & exports',
    'sections.reporting.description': "Préparez vos rapports réglementaires et communication extra-financière en quelques clics.",
    'reporting.card.standards.title': 'Modèles standards',
    'reporting.card.standards.item1': 'GHG Protocol, CSRD, DPEF, Taxonomie UE.',
    'reporting.card.standards.item2': 'Mise en page automatisée & branding.',
    'reporting.card.standards.item3': 'Exports PDF, PowerPoint et Excel.',
    'reporting.card.collaboration.title': 'Collaboration',
    'reporting.card.collaboration.item1': 'Versionning & historique des validations.',
    'reporting.card.collaboration.item2': 'Commentaires contextualisés.',
    'reporting.card.collaboration.item3': 'Workflow multi-acteurs (audit, direction).',
    'reporting.card.capitalization.title': 'Capitalisation',
    'reporting.card.capitalization.item1': 'Bibliothèque de KPIs & best practices.',
    'reporting.card.capitalization.item2': 'Comparaisons temporelles & sectorielles.',
    'reporting.card.capitalization.item3': 'Suivi des engagements ODD/SDG.',
    'sections.parameters.title': 'Paramètres de la plateforme',
    'sections.parameters.description': 'Configurez votre organisation, gérez les accès et personnalisez les alertes pour chaque module.',
    'parameters.profile.title': 'Profil',
    'parameters.profile.description': 'Mettez à jour vos informations et préférences de notification.',
    'parameters.organization.title': 'Organisation',
    'parameters.organization.description': 'Structurez les entités, sites et équipes pour refléter votre réalité.',
    'parameters.subscription.title': 'Abonnement',
    'parameters.subscription.description': 'Suivez votre plan, consommez vos crédits de modules et gérez la facturation.',
    'parameters.notifications.title': 'Notifications',
    'parameters.notifications.description': 'Définissez des alertes personnalisées par seuil, périodicité ou module.',
  },
  en: {

    'brand.title': 'Ecopilot',
    'brand.subtitle': 'ESG Platform',
    'welcome.title': 'Welcome',
    'welcome.user': 'User',
    'nav.main.label': 'Main KPIs',
    'nav.main.hint': 'Global overview',
    'nav.data.label': 'Data collection',
    'nav.data.hint': 'Workflow & controls',
    'nav.energy.label': 'Energy management',
    'nav.energy.hint': 'Consumption & sobriety',
    'nav.carbon.label': 'Emissions management',
    'nav.carbon.hint': 'GHG Protocol, CSRD',
    'nav.waste.label': 'Waste management',
    'nav.waste.hint': 'Sorting & recovery',
    'nav.social.label': 'Social performance',
    'nav.social.hint': 'Engagement & inclusion',
    'nav.reporting.label': 'ESG reporting',
    'nav.reporting.hint': 'Exports & compliance',
    'nav.parameters.label': 'Settings',
    'nav.parameters.hint': 'Organisation & alerts',
    'buttons.logout': 'Log out',
    'actions.sidebar.collapse': 'Collapse menu',
    'actions.sidebar.expand': 'Show menu',
    'actions.theme.dark': 'Dark mode',
    'actions.theme.light': 'Light mode',
    'breadcrumbs.level': 'Home',
    'user.role': 'Admin',
    'user.status': 'Online',
    'sections.main.title': 'Main KPIs',
    'sections.main.description': 'A synthetic view of Environmental, Social and Governance (ESG) performance to drive continuous improvement and stay ahead of regulatory trends.',
    'kpi.carbon.title': 'Carbon footprint',
    'kpi.carbon.value': '-8% vs LY',
    'kpi.carbon.meta': 'Scopes 1-3',
    'kpi.energy.title': 'Energy consumption',
    'kpi.energy.value': '52 kWh / m²',
    'kpi.energy.meta': 'Sobriety target reached at 92%',
    'kpi.waste.title': 'Waste recovery rate',
    'kpi.waste.value': '64%',
    'kpi.waste.meta': '+5 pts vs target',
    'kpi.social.title': 'Social index',
    'kpi.social.value': '78 / 100',
    'kpi.social.meta': 'Engagement & training',
    'cta.kpi': 'Add a KPI',
    'cta.chart': 'Create a chart',
    'cta.sdg': 'Configure SDG tracking',
    'highlight.alerts.title': 'Smart alerts',
    'highlight.alerts.description': 'Proactive notifications when an indicator drifts outside defined thresholds.',
    'highlight.benchmarks.title': 'Sector benchmarks',
    'highlight.benchmarks.description': 'Compare your performance with sector averages and best practices.',
    'highlight.scenarios.title': 'Forward scenarios',
    'highlight.scenarios.description': 'Project yourself with climate, energy and regulatory compliance simulations.',
    'sections.data.title': 'Data collection workflow',
    'sections.data.description': 'A collaborative and traceable process to centralise ESG data from heterogeneous sources.',
    'data.column.entry.title': 'Data entry',
    'data.column.entry.step1.title': 'Data agent',
    'data.column.entry.step1.description': 'Completes the standardised forms (10 to 20 min / month).',
    'data.column.entry.step2.title': 'Super user',
    'data.column.entry.step2.description': 'Validates or corrects data and triggers automated controls.',
    'data.column.entry.step3.title': 'Integration',
    'data.column.entry.step3.description': 'Validated data feeds dashboards and reports.',
    'data.column.erp.title': 'ERP & systems connection',
    'data.column.erp.description': 'Connect your ERPs and databases to automate imports, ensure traceability and avoid double entry.',
    'data.column.erp.item1': 'Out-of-the-box connectors (SAP, Oracle, Sage).',
    'data.column.erp.item2': 'Secure APIs & role-based access management.',
    'data.column.erp.item3': 'Guided Excel imports for non-connected structures.',
    'sections.energy.title': 'Module — Energy management',
    'sections.energy.description': 'Monitor consumption, identify savings potential and steer your energy sobriety plan.',
    'energy.card.indicators.title': 'Charts & indicators',
    'energy.card.indicators.item1': 'Energy split (electricity, gas, renewables).',
    'energy.card.indicators.item2': 'Energy intensity per site & activity unit.',
    'energy.card.indicators.item3': 'Tracking of efficiency actions and associated ROI.',
    'energy.card.filters.title': 'Dynamic filters',
    'energy.card.filters.item1': 'Sites, countries and building typologies.',
    'energy.card.filters.item2': 'Periods (monthly, quarterly, yearly).',
    'energy.card.filters.item3': 'Comparison vs targets and net-zero trajectory.',
    'energy.card.chart.title': 'Annual consumption',
    'energy.card.chart.description': '2025 target: -15% vs 2019 baseline',
    'sections.carbon.title': 'Module — Emissions management',
    'sections.carbon.description': 'Compliance with GHG Protocol, CSRD standards and automation of carbon trajectory calculations.',
    'carbon.card.scopes.title': 'Covered scopes',
    'carbon.card.scopes.item1': 'Scope 1 & 2: energy, fleet, fugitive emissions.',
    'carbon.card.scopes.item2': 'Scope 3: purchasing, travel, logistics.',
    'carbon.card.scopes.item3': 'Integration of certified emission factors.',
    'carbon.card.automation.title': 'Automation',
    'carbon.card.automation.item1': 'Standardised imports & consistency checks.',
    'carbon.card.automation.item2': 'Net-zero scenarios & carbon budgets.',
    'carbon.card.automation.item3': 'Regulatory exports (CSRD, CDP, ADEME).',
    'carbon.card.chart.title': 'Carbon trajectory',
    'carbon.card.chart.description': 'Gap to target: -12%',
    'sections.waste.title': 'Module — Waste management',
    'sections.waste.description': 'Optimise waste streams, increase material recovery and ensure local regulatory compliance.',
    'waste.card.indicators.title': 'Key indicators',
    'waste.card.indicators.item1': 'Recycling & energy recovery rates.',
    'waste.card.indicators.item2': 'Treatment costs vs budget.',
    'waste.card.indicators.item3': 'Threshold alerts for hazardous waste.',
    'waste.card.operational.title': 'Operational tracking',
    'waste.card.operational.item1': 'Action plans by site & contractor.',
    'waste.card.operational.item2': 'Contracts & regulatory reporting.',
    'waste.card.operational.item3': 'Analysis of waste generation and opportunities.',
    'waste.card.chart.title': 'Recovery by stream',
    'waste.card.chart.value': '64%',
    'waste.card.chart.description': 'Annual target: 60%',
    'sections.social.title': 'Module — Social & societal performance',
    'sections.social.description': 'Measure the social impact of your initiatives and strengthen ESG engagement among employees.',
    'social.card.axes.title': 'Monitoring axes',
    'social.card.axes.item1': 'Engagement & social climate.',
    'social.card.axes.item2': 'Diversity, inclusion & gender equality.',
    'social.card.axes.item3': 'Training programmes & sponsorship.',
    'social.card.features.title': 'Features',
    'social.card.features.item1': 'Pulse surveys & barometers.',
    'social.card.features.item2': 'Action plans with dedicated owners.',
    'social.card.features.item3': 'Multi-site dashboards.',
    'social.card.chart.title': 'ESG radar',
    'social.card.chart.description': 'Skills & wellbeing trending up.',
    'sections.reporting.title': 'ESG reporting & exports',
    'sections.reporting.description': 'Prepare regulatory reports and extra-financial communication in a few clicks.',
    'reporting.card.standards.title': 'Standard templates',
    'reporting.card.standards.item1': 'GHG Protocol, CSRD, NFRD, EU taxonomy.',
    'reporting.card.standards.item2': 'Automated layout & branding.',
    'reporting.card.standards.item3': 'PDF, PowerPoint and Excel exports.',
    'reporting.card.collaboration.title': 'Collaboration',
    'reporting.card.collaboration.item1': 'Version history & approvals.',
    'reporting.card.collaboration.item2': 'Contextual comments.',
    'reporting.card.collaboration.item3': 'Multi-stakeholder workflow (audit, leadership).',
    'reporting.card.capitalization.title': 'Knowledge hub',
    'reporting.card.capitalization.item1': 'KPI library & best practices.',
    'reporting.card.capitalization.item2': 'Time-series & peer comparisons.',
    'reporting.card.capitalization.item3': 'Tracking of SDG/ESG commitments.',
    'sections.parameters.title': 'Platform settings',
    'sections.parameters.description': 'Configure your organisation, manage access and customise alerts for each module.',
    'parameters.profile.title': 'Profile',
    'parameters.profile.description': 'Update your information and notification preferences.',
    'parameters.organization.title': 'Organisation',
    'parameters.organization.description': 'Structure entities, sites and teams to reflect your reality.',
    'parameters.subscription.title': 'Subscription',
    'parameters.subscription.description': 'Monitor your plan, module credits usage and billing.',
    'parameters.notifications.title': 'Notifications',
    'parameters.notifications.description': 'Set custom alerts by threshold, frequency or module.',
  },
};

let currentLanguage = 'fr';
let currentTheme = 'light';

function safeGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // ignore storage errors
  }
}

function getTranslation(lang, key) {
  return translations[lang]?.[key] ?? translations.fr?.[key] ?? '';
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) {
      return;
    }
    const translation = getTranslation(currentLanguage, key);
    if (typeof translation === 'string') {
      element.textContent = translation;
    }
  });
}

function updateBreadcrumb() {
  if (!breadcrumbCurrent) return;
  const activeNavLabel = document.querySelector('.nav-item.is-active .nav-item__label');
  if (activeNavLabel) {
    const label = activeNavLabel.textContent;
    breadcrumbCurrent.textContent = label;
    document.title = `Ecopilot RSE - ${label}`;
  }
}

function updateSidebarToggleState() {
  if (!sidebarToggle) return;
  const collapsed = appShell?.classList.contains('is-sidebar-collapsed');
  const labelKey = collapsed ? 'actions.sidebar.expand' : 'actions.sidebar.collapse';
  const label = getTranslation(currentLanguage, labelKey);
  sidebarToggle.setAttribute('aria-expanded', String(!collapsed));
  sidebarToggle.setAttribute('aria-label', label);
  sidebarToggle.setAttribute('title', label);
  if (sidebarToggleText) {
    sidebarToggleText.textContent = label;
  }
  if (sidebarToggleIcon) {
    sidebarToggleIcon.textContent = collapsed ? '☰' : '⮜';
  }
}

function setSidebarCollapsed(collapsed, { persist = true } = {}) {
  if (!appShell) return;
  appShell.classList.toggle('is-sidebar-collapsed', collapsed);
  if (persist) {
    safeSetItem(STORAGE_KEYS.sidebar, collapsed ? 'collapsed' : 'expanded');
  }
  updateSidebarToggleState();
}

function updateThemeToggleState() {
  if (!themeToggle) return;
  const isDark = document.body.classList.contains('theme-dark');
  const labelKey = isDark ? 'actions.theme.light' : 'actions.theme.dark';
  const label = getTranslation(currentLanguage, labelKey);
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('title', label);
  if (themeToggleText) {
    themeToggleText.textContent = label;
  }
  if (themeToggleIcon) {
    themeToggleIcon.textContent = isDark ? '🌞' : '🌙';
  }
}

function setTheme(theme, { persist = true } = {}) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('theme-dark', isDark);
  currentTheme = isDark ? 'dark' : 'light';
  if (persist) {
    safeSetItem(STORAGE_KEYS.theme, currentTheme);
  }
  updateThemeToggleState();
}

function setLanguage(lang, { persist = true } = {}) {
  if (!translations[lang]) {
    lang = 'fr';
  }
  currentLanguage = lang;
  document.documentElement.lang = lang;
  if (persist) {
    safeSetItem(STORAGE_KEYS.language, lang);
  }
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  applyTranslations();
  updateSidebarToggleState();
  updateThemeToggleState();
  updateBreadcrumb();
}

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    const targetId = item.dataset.target;
    if (!targetId) return;

    navItems.forEach((nav) => nav.classList.remove('is-active'));
    item.classList.add('is-active');

    sections.forEach((section) => {
      section.classList.toggle('is-active', section.id === targetId);
    });

    updateBreadcrumb();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    if (!lang) return;
    setLanguage(lang);
  });
});

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    const collapsed = !appShell?.classList.contains('is-sidebar-collapsed');
    setSidebarCollapsed(collapsed);
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('theme-dark');
    setTheme(isDark ? 'light' : 'dark');
  });
}

const storedLanguage = safeGetItem(STORAGE_KEYS.language);
const storedSidebar = safeGetItem(STORAGE_KEYS.sidebar);
const storedTheme = safeGetItem(STORAGE_KEYS.theme);
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

setSidebarCollapsed(storedSidebar === 'collapsed', { persist: false });
setTheme(initialTheme === 'dark' ? 'dark' : 'light', { persist: Boolean(storedTheme) });
const initialLanguage = translations[storedLanguage] ? storedLanguage : 'fr';
setLanguage(initialLanguage, { persist: Boolean(storedLanguage) });
updateBreadcrumb();
