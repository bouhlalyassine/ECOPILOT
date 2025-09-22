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
    'nav.modules.heading': 'Parcours RSE',
    'nav.modules.popoverTitle': 'Accès rapide',
    'nav.modules.pilotage.label': 'Pilotage RSE',
    'nav.modules.pilotage.submodules.dashboard': 'Tableau de bord',
    'nav.modules.pilotage.submodules.alerts': 'Alertes & priorités',
    'nav.modules.pilotage.submodules.materiality': 'Double matérialité',
    'nav.modules.pilotage.submodules.roadmap': 'Feuille de route',
    'nav.modules.collecte.label': 'Collecte & campagnes',
    'nav.modules.collecte.submodules.campaigns': 'Campagnes',
    'nav.modules.collecte.submodules.forms': 'Formulaires',
    'nav.modules.collecte.submodules.controls': 'Contrôles qualité',
    'nav.modules.collecte.submodules.contributors': 'Contributeurs',
    'nav.modules.analyse.label': 'Analyses & simulations',
    'nav.modules.analyse.submodules.carbon': 'Empreinte carbone',
    'nav.modules.analyse.submodules.energy': 'Énergie & sobriété',
    'nav.modules.analyse.submodules.social': 'Social & impact',
    'nav.modules.analyse.submodules.governance': 'Gouvernance & risques',
    'nav.modules.reporting.label': 'Reporting & communication',
    'nav.modules.reporting.submodules.csrd': 'Rapport CSRD',
    'nav.modules.reporting.submodules.scorecards': 'Scorecards',
    'nav.modules.reporting.submodules.exports': 'Exports & API',
    'nav.modules.reporting.submodules.stakeholders': 'Portail parties prenantes',
    'nav.modules.parametrage.label': 'Paramétrage & administration',
    'nav.modules.parametrage.submodules.organization': 'Organisation',
    'nav.modules.parametrage.submodules.roles': 'Utilisateurs & rôles',
    'nav.modules.parametrage.submodules.references': 'Référentiels',
    'nav.modules.parametrage.submodules.security': 'Sécurité',
    'nav.popover.hint': 'Survoler pour explorer le module complet.',
    'sections.pilotage.title': 'Pilotage RSE',
    'sections.pilotage.intro': 'Tableau de bord consolidé pour suivre les indicateurs ESG et prioriser les actions.',
    'sections.pilotage.cards.dashboard.title': 'Tableau de bord exécutif',
    'sections.pilotage.cards.dashboard.items.overview': 'Indicateurs stratégiques multi-ODD et CSRD.',
    'sections.pilotage.cards.dashboard.items.targets': 'Comparaison automatique aux objectifs et trajectoires.',
    'sections.pilotage.cards.dashboard.items.materiality': 'Vue consolidée par entité, site ou périmètre.',
    'sections.pilotage.cards.alerts.title': 'Alertes & priorités',
    'sections.pilotage.cards.alerts.items.warnings': 'Alertes sur les écarts de performance et de conformité.',
    'sections.pilotage.cards.alerts.items.workflow': 'Boîte d’actions assignées avec responsables et échéances.',
    'sections.pilotage.cards.alerts.items.actions': 'Escalade automatique vers les comités de pilotage.',
    'sections.pilotage.cards.roadmap.title': 'Feuille de route & initiatives',
    'sections.pilotage.cards.roadmap.items.portfolio': 'Portfolio d’initiatives alignées sur les piliers ESG.',
    'sections.pilotage.cards.roadmap.items.budget': 'Budgets, ROI et gains carbone suivis dans le temps.',
    'sections.pilotage.cards.roadmap.items.followup': 'Synchronisation avec les plans d’actions métiers.',
    'sections.pilotage.callout': 'Les widgets se personnalisent par rôle et par périmètre pour proposer une navigation contextuelle.',
    'sections.collecte.title': 'Collecte & campagnes',
    'sections.collecte.intro': 'Coordonner les contributeurs, la saisie de données et la qualité avant consolidation.',
    'sections.collecte.cards.campaigns.title': 'Campagnes & formulaires',
    'sections.collecte.cards.campaigns.items.multi': 'Calendrier multi-sites avec rappels automatiques.',
    'sections.collecte.cards.campaigns.items.forms': 'Formulaires dynamiques adaptés à chaque typologie de données.',
    'sections.collecte.cards.campaigns.items.imports': 'Imports assistés depuis Excel, CSV ou API.',
    'sections.collecte.cards.quality.title': 'Qualité & validation',
    'sections.collecte.cards.quality.items.controls': 'Contrôles de cohérence et règles métiers paramétrables.',
    'sections.collecte.cards.quality.items.workflow': 'Workflow d’approbation multi-niveaux avec notifications.',
    'sections.collecte.cards.quality.items.audit': 'Journal d’audit et traçabilité complète par contribution.',
    'sections.collecte.cards.integrations.title': 'Intégrations & dépôts',
    'sections.collecte.cards.integrations.items.erp': 'Connecteurs ERP / IoT pour automatiser la collecte.',
    'sections.collecte.cards.integrations.items.api': 'API sécurisée et webhooks pour synchronisations temps réel.',
    'sections.collecte.cards.integrations.items.repository': 'Bibliothèque documentaire pour preuves et pièces jointes.',
    'sections.collecte.callout': 'Chaque contributeur dispose d’un espace dédié listant ses tâches et ses alertes.',
    'sections.analyse.title': 'Analyses & simulations',
    'sections.analyse.intro': 'Croiser les données et référentiels pour identifier les leviers d’amélioration ESG.',
    'sections.analyse.blocks.carbon.title': 'Empreinte carbone',
    'sections.analyse.blocks.carbon.items.scopes': 'Scopes 1, 2, 3 calculés avec facteurs certifiés.',
    'sections.analyse.blocks.carbon.items.roadmap': 'Budgets carbone et trajectoires SBTi par périmètre.',
    'sections.analyse.blocks.carbon.items.simulation': 'Simulations de scénarios et plans d’actions.',
    'sections.analyse.blocks.energy.title': 'Énergie & sobriété',
    'sections.analyse.blocks.energy.items.monitoring': 'Suivi des consommations et intensités par site.',
    'sections.analyse.blocks.energy.items.optimisation': 'Détection des dérives et optimisation en temps réel.',
    'sections.analyse.blocks.energy.items.alerts': 'Alertes sur dépassements budgétaires et anomalies.',
    'sections.analyse.blocks.social.title': 'Social & impact',
    'sections.analyse.blocks.social.items.engagement': 'Engagement collaborateurs, diversité et QVT.',
    'sections.analyse.blocks.social.items.diversity': 'Suivi des programmes et indicateurs locaux.',
    'sections.analyse.blocks.social.items.impact': 'Mesure de l’impact sociétal et des partenariats.',
    'sections.analyse.blocks.governance.title': 'Gouvernance & risques',
    'sections.analyse.blocks.governance.items.risk': 'Cartographie des risques ESG et conformité.',
    'sections.analyse.blocks.governance.items.compliance': 'Suivi des politiques, contrôles et audits.',
    'sections.analyse.blocks.governance.items.committee': 'Préparation des comités et décisions clés.',
    'sections.analyse.note': 'Les dashboards sont alignés avec les principaux référentiels (GRI, CSRD, ISO 26000, ODD…).',
    'sections.reporting.title': 'Reporting & communication',
    'sections.reporting.intro': 'Automatiser la production des livrables internes et externes.',
    'sections.reporting.cards.csrd.title': 'Rapports réglementaires',
    'sections.reporting.cards.csrd.items.frameworks': 'Modèles CSRD, DPEF, GHG Protocol prêts à l’emploi.',
    'sections.reporting.cards.csrd.items.narrative': 'Narratif collaboratif avec suggestions IA.',
    'sections.reporting.cards.csrd.items.validation': 'Workflow de validation et gel des versions.',
    'sections.reporting.cards.delivery.title': 'Diffusion & exports',
    'sections.reporting.cards.delivery.items.exports': 'Exports PDF, Word, Excel et connecteur BI.',
    'sections.reporting.cards.delivery.items.schedule': 'Planification des envois et signatures automatisées.',
    'sections.reporting.cards.delivery.items.portal': 'Portail parties prenantes avec suivi des lectures.',
    'sections.reporting.callout': 'La double matérialité et les KPIs publiés restent synchronisés avec les modules d’analyse.',
    'sections.parametrage.title': 'Paramétrage & administration',
    'sections.parametrage.intro': 'Configurer la structure du groupe, les droits et les référentiels ESG.',
    'sections.parametrage.cards.organization.title': 'Organisation & rôles',
    'sections.parametrage.cards.organization.items.structure': 'Hiérarchie entités, BU, sites et périmètres.',
    'sections.parametrage.cards.organization.items.entitlements': 'Gestion des rôles, délégations et accès temporaires.',
    'sections.parametrage.cards.organization.items.workflows': 'Scénarios de workflows par module.',
    'sections.parametrage.cards.security.title': 'Référentiels & sécurité',
    'sections.parametrage.cards.security.items.policies': 'Paramétrage des politiques, objectifs et alertes.',
    'sections.parametrage.cards.security.items.references': 'Gestion des référentiels ESG et des traductions.',
    'sections.parametrage.cards.security.items.localization': 'Audit des accès, SSO et journalisation.',
    'sections.parametrage.callout': 'Les paramètres se dupliquent par environnement (test, production) pour sécuriser les déploiements.'
  },
  en: {
    'brand.title': 'Ecopilot',
    'brand.subtitle': 'ESG steering',
    'welcome.title': 'Welcome',
    'welcome.user': 'User',
    'actions.sidebar.collapse': 'Collapse menu',
    'actions.sidebar.expand': 'Expand menu',
    'actions.theme.dark': 'Dark mode',
    'actions.theme.light': 'Light mode',
    'buttons.logout': 'Log out',
    'breadcrumbs.home': 'Home',
    'user.role': 'Admin',
    'user.status': 'Online',
    'nav.modules.heading': 'ESG journey',
    'nav.modules.popoverTitle': 'Quick access',
    'nav.modules.pilotage.label': 'ESG steering',
    'nav.modules.pilotage.submodules.dashboard': 'Executive dashboard',
    'nav.modules.pilotage.submodules.alerts': 'Alerts & priorities',
    'nav.modules.pilotage.submodules.materiality': 'Double materiality',
    'nav.modules.pilotage.submodules.roadmap': 'Roadmap',
    'nav.modules.collecte.label': 'Data collection',
    'nav.modules.collecte.submodules.campaigns': 'Campaigns',
    'nav.modules.collecte.submodules.forms': 'Forms',
    'nav.modules.collecte.submodules.controls': 'Quality controls',
    'nav.modules.collecte.submodules.contributors': 'Contributors',
    'nav.modules.analyse.label': 'Analysis & simulations',
    'nav.modules.analyse.submodules.carbon': 'Carbon footprint',
    'nav.modules.analyse.submodules.energy': 'Energy & efficiency',
    'nav.modules.analyse.submodules.social': 'People & impact',
    'nav.modules.analyse.submodules.governance': 'Governance & risks',
    'nav.modules.reporting.label': 'Reporting & communication',
    'nav.modules.reporting.submodules.csrd': 'CSRD report',
    'nav.modules.reporting.submodules.scorecards': 'Scorecards',
    'nav.modules.reporting.submodules.exports': 'Exports & APIs',
    'nav.modules.reporting.submodules.stakeholders': 'Stakeholder portal',
    'nav.modules.parametrage.label': 'Settings & administration',
    'nav.modules.parametrage.submodules.organization': 'Organisation',
    'nav.modules.parametrage.submodules.roles': 'Users & roles',
    'nav.modules.parametrage.submodules.references': 'Reference data',
    'nav.modules.parametrage.submodules.security': 'Security',
    'nav.popover.hint': 'Hover to explore the full module.',
    'sections.pilotage.title': 'ESG steering',
    'sections.pilotage.intro': 'A consolidated cockpit to monitor sustainability KPIs and prioritise actions.',
    'sections.pilotage.cards.dashboard.title': 'Executive dashboard',
    'sections.pilotage.cards.dashboard.items.overview': 'Strategic KPIs mapped to SDGs and CSRD.',
    'sections.pilotage.cards.dashboard.items.targets': 'Automatic comparisons versus targets and trajectories.',
    'sections.pilotage.cards.dashboard.items.materiality': 'Consolidated view by entity, site or scope.',
    'sections.pilotage.cards.alerts.title': 'Alerts & priorities',
    'sections.pilotage.cards.alerts.items.warnings': 'Performance and compliance alerts triggered automatically.',
    'sections.pilotage.cards.alerts.items.workflow': 'Action inbox with owners and due dates.',
    'sections.pilotage.cards.alerts.items.actions': 'Escalation to steering committees when thresholds are met.',
    'sections.pilotage.cards.roadmap.title': 'Roadmap & initiatives',
    'sections.pilotage.cards.roadmap.items.portfolio': 'Initiative portfolio aligned with ESG pillars.',
    'sections.pilotage.cards.roadmap.items.budget': 'Budgets, ROI and carbon savings tracked over time.',
    'sections.pilotage.cards.roadmap.items.followup': 'Sync with business action plans and OKRs.',
    'sections.pilotage.callout': 'Widgets adapt to each role and scope to provide contextual navigation.',
    'sections.collecte.title': 'Data collection',
    'sections.collecte.intro': 'Coordinate contributors, data entry and quality before consolidation.',
    'sections.collecte.cards.campaigns.title': 'Campaigns & forms',
    'sections.collecte.cards.campaigns.items.multi': 'Multi-site calendar with automated reminders.',
    'sections.collecte.cards.campaigns.items.forms': 'Dynamic forms tailored to each data category.',
    'sections.collecte.cards.campaigns.items.imports': 'Guided imports from spreadsheets or APIs.',
    'sections.collecte.cards.quality.title': 'Quality & validation',
    'sections.collecte.cards.quality.items.controls': 'Consistency checks and configurable business rules.',
    'sections.collecte.cards.quality.items.workflow': 'Multi-level approval workflow with notifications.',
    'sections.collecte.cards.quality.items.audit': 'Complete audit trail and traceability per submission.',
    'sections.collecte.cards.integrations.title': 'Integrations & vault',
    'sections.collecte.cards.integrations.items.erp': 'ERP and IoT connectors to automate collection.',
    'sections.collecte.cards.integrations.items.api': 'Secure API and webhooks for real-time sync.',
    'sections.collecte.cards.integrations.items.repository': 'Document repository for evidence and attachments.',
    'sections.collecte.callout': 'Each contributor accesses a personalised workspace listing tasks and alerts.',
    'sections.analyse.title': 'Analysis & simulations',
    'sections.analyse.intro': 'Combine datasets and frameworks to identify ESG improvement levers.',
    'sections.analyse.blocks.carbon.title': 'Carbon footprint',
    'sections.analyse.blocks.carbon.items.scopes': 'Scopes 1, 2, 3 calculated with certified factors.',
    'sections.analyse.blocks.carbon.items.roadmap': 'Carbon budgets and SBTi trajectories per scope.',
    'sections.analyse.blocks.carbon.items.simulation': 'Scenario simulations and action plans.',
    'sections.analyse.blocks.energy.title': 'Energy & efficiency',
    'sections.analyse.blocks.energy.items.monitoring': 'Consumption and intensity tracking per site.',
    'sections.analyse.blocks.energy.items.optimisation': 'Real-time drift detection and optimisation.',
    'sections.analyse.blocks.energy.items.alerts': 'Alerts on budget overruns and anomalies.',
    'sections.analyse.blocks.social.title': 'People & impact',
    'sections.analyse.blocks.social.items.engagement': 'Engagement, diversity and wellbeing indicators.',
    'sections.analyse.blocks.social.items.diversity': 'Programme monitoring with local indicators.',
    'sections.analyse.blocks.social.items.impact': 'Measurement of societal impact and partnerships.',
    'sections.analyse.blocks.governance.title': 'Governance & risks',
    'sections.analyse.blocks.governance.items.risk': 'ESG risk and compliance mapping.',
    'sections.analyse.blocks.governance.items.compliance': 'Policies, controls and audit follow-up.',
    'sections.analyse.blocks.governance.items.committee': 'Preparation for committees and key decisions.',
    'sections.analyse.note': 'Dashboards are aligned with major frameworks (GRI, CSRD, ISO 26000, SDGs…).',
    'sections.reporting.title': 'Reporting & communication',
    'sections.reporting.intro': 'Automate the production of internal and external deliverables.',
    'sections.reporting.cards.csrd.title': 'Regulatory reports',
    'sections.reporting.cards.csrd.items.frameworks': 'Ready-to-use CSRD, NFRD and GHG Protocol templates.',
    'sections.reporting.cards.csrd.items.narrative': 'Collaborative narrative with AI-assisted suggestions.',
    'sections.reporting.cards.csrd.items.validation': 'Validation workflow with version freeze.',
    'sections.reporting.cards.delivery.title': 'Distribution & exports',
    'sections.reporting.cards.delivery.items.exports': 'PDF, Word, Excel exports and BI connector.',
    'sections.reporting.cards.delivery.items.schedule': 'Scheduling, signatures and automated delivery.',
    'sections.reporting.cards.delivery.items.portal': 'Stakeholder portal with reading analytics.',
    'sections.reporting.callout': 'Double materiality and published KPIs stay synchronised with analysis modules.',
    'sections.parametrage.title': 'Settings & administration',
    'sections.parametrage.intro': 'Configure the organisation, permissions and ESG reference data.',
    'sections.parametrage.cards.organization.title': 'Organisation & roles',
    'sections.parametrage.cards.organization.items.structure': 'Hierarchy for entities, BUs, sites and scopes.',
    'sections.parametrage.cards.organization.items.entitlements': 'Role management, delegations and temporary access.',
    'sections.parametrage.cards.organization.items.workflows': 'Workflow scenarios per module.',
    'sections.parametrage.cards.security.title': 'Reference data & security',
    'sections.parametrage.cards.security.items.policies': 'Policies, targets and alert thresholds.',
    'sections.parametrage.cards.security.items.references': 'ESG frameworks, taxonomies and translations.',
    'sections.parametrage.cards.security.items.localization': 'Access audit, SSO and logging.',
    'sections.parametrage.callout': 'Settings can be cloned between environments to secure roll-outs.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const app = document.querySelector('.app');
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
        // ignore storage errors
      }
    }
  };

  let activeLanguage = 'fr';

  const getDictionary = (lang) => translations[lang] ?? translations.fr;

  const translateKey = (key) => {
    const dictionary = getDictionary(activeLanguage);
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

  const applyTranslations = () => {
    const dictionary = getDictionary(activeLanguage);
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (!key) return;
      const value = dictionary[key];
      if (value === undefined) return;
      element.innerHTML = value;
    });
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
        label.innerHTML = translateKey(key);
      }
    }
    storage.set(storageKeys.theme, resolved);
  };

  const toggleTheme = () => {
    const current = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  const setSidebarState = (collapsed) => {
    if (!app) return;
    app.classList.toggle('is-sidebar-collapsed', collapsed);
    if (sidebarToggle) {
      sidebarToggle.setAttribute('aria-expanded', String(!collapsed));
      const label = sidebarToggle.querySelector('.sidebar__collapse-label');
      if (label) {
        const key = collapsed ? 'actions.sidebar.expand' : 'actions.sidebar.collapse';
        label.innerHTML = translateKey(key);
      }
    }
    storage.set(storageKeys.sidebar, collapsed ? 'collapsed' : 'expanded');
  };

  const activateSection = (targetId) => {
    const target = sections.find((section) => section.id === targetId);
    if (!target) return;
    sections.forEach((section) => {
      section.classList.toggle('is-active', section === target);
    });
    navButtons.forEach((button) => {
      const isActive = button.dataset.target === targetId;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    updateBreadcrumb();
  };

  const applyLanguage = (lang) => {
    activeLanguage = translations[lang] ? lang : 'fr';
    root.setAttribute('lang', activeLanguage);
    applyTranslations();
    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === activeLanguage;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    setTheme(document.body.getAttribute('data-theme'));
    setSidebarState(app?.classList.contains('is-sidebar-collapsed'));
    storage.set(storageKeys.language, activeLanguage);
    updateBreadcrumb();
  };

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      if (!targetId) return;
      activateSection(targetId);
    });
    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        button.click();
      }
    });
  });

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      applyLanguage(lang);
    });
  });

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      toggleTheme();
    });
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      const isCollapsed = app?.classList.contains('is-sidebar-collapsed');
      setSidebarState(!isCollapsed);
    });
  }

  const storedLanguage = storage.get(storageKeys.language);
  const storedTheme = storage.get(storageKeys.theme);
  const storedSidebar = storage.get(storageKeys.sidebar);

  if (storedSidebar === 'collapsed') {
    setSidebarState(true);
  } else {
    setSidebarState(false);
  }

  applyLanguage(storedLanguage ?? activeLanguage);
  setTheme(storedTheme ?? document.body.getAttribute('data-theme'));

  const defaultSection = sections.find((section) => section.classList.contains('is-active'));
  activateSection(defaultSection?.id ?? 'pilotage');
});
