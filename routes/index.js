var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const API_Jeton = process.env.OWM_API_JETON;

// 👉 Dans le fichier index.js, créez une route /movies chargée de faire une requête vers le webservice The Movie Database afin de récupérer les dernières "découvertes" proposées par l’API.
router.get("/movies", (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=fr-FR`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      res.json({movies: data.results});
    });
});

module.exports = router;
