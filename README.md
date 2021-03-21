# Projet Chibli

- Faire des boutons en liens avec les routes

- Utilisation de react et ses routes, proptypes, axios, semantic ui.

- Posibilité de pagination.

Le fichier swagger.yaml est une base fictive de l'api.

## installation du projet

A la racine du projet, dans le terminal :

> `yarn`

### techno

- html / scss
- javascript
- reactjs
- react-router-dom
- axios
- semantic ui

_adresse du logo :_ `https://upload.wikimedia.org/wikipedia/fr/thumb/e/eb/Logo_Ghibli.svg/langfr-420px-Logo_Ghibli.svg.png`

<details>
<summary>
    Détails sur l'api
</summary>
Utilisation de l'API Chibli de base:

---

> `https://ghibliapi.herokuapp.com`

---

## Pouvoir reccupérer des infos

mettre a la suite de l'API de base
ex => `https://ghibliapi.herokuapp.com/films`
par défaut l'API retourne 50 resultats, pour un maximum de 250.

---

> `/films`

---

- title
- original_title
- original_title_romanised
- description
- release_date
- producer
- director

---

> `/people`

---

- name
- age
- gender
- eye_color
- hair_color
- species

---

> `/locations`

---

- name
- climate
- terrain

---

> `/species`

---

- name
- classification
- eye_colors

---

> `/vehicles`

---

- name
- description
- vehicule_class
</details>
