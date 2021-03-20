# Projet Chibli

- faire des boutons en liens avec les routes

- utilisation de react et ses routes, proptypes, axios, semantic ui.

- posibilité de pagination.

Le fichier swagger.yaml est une base fictive de l'api.

adresse du logo : `https://upload.wikimedia.org/wikipedia/fr/thumb/e/eb/Logo_Ghibli.svg/langfr-420px-Logo_Ghibli.svg.png`

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

- le titre
- la description
- la date de sortie
- sa durée
- etc...

---

> `/people`

---

- name
- age
- gender
- eye_color
- hair_color
- films []
- species
- url

---

> `/locations`

---

- name
- climate
- terrain
- residents []
- films []

---

> `/species`

---

- name
- classification
- eye_colors
- url
- people []
- films []

---

> `/vehicles`

---

- name
- description
- vehicule_class
- url
- films []
