# RSE App

Une première version d'un tableau de bord interactif pour piloter un programme de responsabilité sociétale d'entreprise (RSE). L'application est 100 % front-end et fonctionne hors connexion.

## Lancer l'application

1. Cloner ce dépôt ou récupérer les fichiers sur votre poste.
2. Ouvrir `index.html` dans votre navigateur préféré.

Aucun serveur n'est nécessaire : l'application repose uniquement sur HTML, CSS et JavaScript vanilla.

## Fonctionnalités clés

- **Aperçu synthétique** : cartes d'indicateurs dynamiques (progression moyenne, nombre d'actions finalisées, estimation des tonnes de CO₂ évitées, indice de mobilisation).
- **Suivi des échéances** : liste des prochaines dates clés générée automatiquement selon les statuts et les dates d'échéance.
- **Indice d'engagement** : scoring consolidé illustrant la mobilisation des équipes et l'état d'avancement des actions.
- **Gestion des actions** : filtres par pilier et par statut, mise à jour du niveau d'avancement via curseur, changement de statut avec confirmation.
- **Création d'initiatives** : formulaire guidé pour ajouter une nouvelle action RSE (pilier, responsable, impact, description, etc.).
- **Export** : téléchargement des actions au format JSON pour faciliter le reporting.

## Personnalisation

Les données sont stockées en mémoire. Pour injecter vos propres initiatives, modifiez le tableau `initialActions` dans `app.js` ou utilisez le formulaire intégré.

## Prochaines pistes

- Persistance locale (LocalStorage ou API) pour conserver les mises à jour entre deux sessions.
- Ajout de visualisations graphiques (courbes d'émissions, camemberts de répartition par pilier).
- Gestion des utilisateurs et suivi multi-sites.

## Synchronisation avec GitHub

Si GitHub n'affiche que le `README.md` sur la branche `main`, cela signifie que la branche locale `work` (celle qui contient le tableau de bord) n'a pas encore été poussée ni fusionnée.

1. **Pousser la branche de travail vers GitHub**
   ```bash
   git checkout work
   git push -u origin work
   ```
   Vous pourrez alors sélectionner la branche `work` dans l'interface GitHub pour voir les fichiers.

2. **Rendre les fichiers visibles sur `main`**
   - Depuis GitHub, créez une Pull Request pour fusionner `work` dans `main`, puis validez-la.
   - Ou bien en local :
     ```bash
     git checkout main
     git merge work
     git push origin main
     ```

Après la fusion, rafraîchissez la page GitHub : `index.html`, `styles.css` et `app.js` apparaîtront sur la branche `main`.
