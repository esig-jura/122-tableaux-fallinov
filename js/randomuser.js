'use strict';
// Variable globale représentant une personne
let personne = {};

// Questionne l'API pour récupérer une personne aléatoire
fetch('https://randomuser.me/api/')
    // Attend la réponse puis analyse le JSON et le retourne
    .then(function (reponseAuFormatJson) {
        return reponseAuFormatJson.json(); // transforme Json en JavaScript
    } )
    // Attend la réponse au format JavaScript
    .then(function (reponseAuFormatJS) {
        // console.log(reponseAuFormatJS);
        // console.log(reponseAuFormatJS.results[0].email);
        personne = reponseAuFormatJS.results[0];
        console.log(personne);
        document.querySelector('h1').innerHTML = personne.email;
        document.querySelector('img').src = personne.picture.large;
    });
