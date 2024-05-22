/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

const tabPersonnes = [
    {
        nom: 'Romero',
        prenom: 'Santiago',
        age: 61,
        localite: 'La Paz',
    },
    {
        nom: 'López',
        prenom: 'Camila',
        age: 63,
        localite: 'Buenos Aires',
    },
    {
        nom: 'Martínez',
        prenom: 'Mariana',
        age: 65,
        localite: 'Asunción',
    },
    {
        nom: 'Martínez',
        prenom: 'Valentina',
        age: 47,
        localite: 'La Paz',
    },
    {
        nom: 'García',
        prenom: 'Camila',
        age: 35,
        localite: 'Lima',
    },
    {
        nom: 'González',
        prenom: 'Camila',
        age: 67,
        localite: 'Santiago',
    },
    {
        nom: 'Martínez',
        prenom: 'Santiago',
        age: 33,
        localite: 'Santiago',
    },
    {
        nom: 'Torres',
        prenom: 'Valentina',
        age: 20,
        localite: 'La Paz',
    },
    {
        nom: 'Torres',
        prenom: 'Sebastián',
        age: 56,
        localite: 'Santiago',
    },
    {
        nom: 'Torres',
        prenom: 'Camila',
        age: 21,
        localite: 'São Paulo',
    },
    {
        nom: 'González',
        prenom: 'Mariana',
        age: 59,
        localite: 'Buenos Aires',
    },
    {
        nom: 'Pérez',
        prenom: 'Mateo',
        age: 59,
        localite: 'São Paulo',
    },
    {
        nom: 'Rodríguez',
        prenom: 'Valeria',
        age: 57,
        localite: 'Bogotá',
    },
    {
        nom: 'Rodríguez',
        prenom: 'Mariana',
        age: 59,
        localite: 'Quito',
    },
    {
        nom: 'Rodríguez',
        prenom: 'Santiago',
        age: 40,
        localite: 'Buenos Aires',
    },
    {
        nom: 'Pérez',
        prenom: 'Mateo',
        age: 79,
        localite: 'La Paz',
    },
    {
        nom: 'Romero',
        prenom: 'Valentina',
        age: 45,
        localite: 'Buenos Aires',
    },
    {
        nom: 'Pérez',
        prenom: 'Mariana',
        age: 55,
        localite: 'Buenos Aires',
    },
    {
        nom: 'Sánchez',
        prenom: 'Luciana',
        age: 47,
        localite: 'Santiago',
    },
    {
        nom: 'Flores',
        prenom: 'Camila',
        age: 38,
        localite: 'Montevideo',
    },
    {
        nom: 'Pérez',
        prenom: 'Valeria',
        age: 77,
        localite: 'Buenos Aires',
    },
    {
        nom: 'Martínez',
        prenom: 'Mateo',
        age: 43,
        localite: 'Santiago',
    },
    {
        nom: 'Martínez',
        prenom: 'Matías',
        age: 67,
        localite: 'Santiago',
    },
    {
        nom: 'Romero',
        prenom: 'Camila',
        age: 18,
        localite: 'Bogotá',
    },
    {
        nom: 'Torres',
        prenom: 'Valeria',
        age: 57,
        localite: 'Quito',
    },
    {
        nom: 'Flores',
        prenom: 'Mateo',
        age: 47,
        localite: 'Santiago',
    },
    {
        nom: 'Sánchez',
        prenom: 'Mariana',
        age: 52,
        localite: 'Caracas',
    },
    {
        nom: 'Flores',
        prenom: 'Santiago',
        age: 35,
        localite: 'Asunción',
    },
    {
        nom: 'García',
        prenom: 'Mateo',
        age: 59,
        localite: 'Lima',
    },
    {
        nom: 'Sánchez',
        prenom: 'Mariana',
        age: 67,
        localite: 'Bogotá',
    },
    {
        nom: 'Torres',
        prenom: 'Matías',
        age: 22,
        localite: 'Montevideo',
    },
    {
        nom: 'Rodríguez',
        prenom: 'Camila',
        age: 33,
        localite: 'Quito',
    },
    {
        nom: 'González',
        prenom: 'Sebastián',
        age: 64,
        localite: 'La Paz',
    },
    {
        nom: 'López',
        prenom: 'Mateo',
        age: 76,
        localite: 'Quito',
    },
    {
        nom: 'García',
        prenom: 'Mateo',
        age: 70,
        localite: 'Lima',
    },
    {
        nom: 'Rodríguez',
        prenom: 'Valentina',
        age: 21,
        localite: 'Bogotá',
    },
    {
        nom: 'García',
        prenom: 'Camila',
        age: 74,
        localite: 'Quito',
    },
    {
        nom: 'Sánchez',
        prenom: 'Sebastián',
        age: 33,
        localite: 'Bogotá',
    },
    {
        nom: 'López',
        prenom: 'Mateo',
        age: 69,
        localite: 'Montevideo',
    },
    {
        nom: 'Romero',
        prenom: 'Luciana',
        age: 57,
        localite: 'Buenos Aires',
    },
    {
        nom: 'Rodríguez',
        prenom: 'Valeria',
        age: 70,
        localite: 'Bogotá',
    },
    {
        nom: 'Pérez',
        prenom: 'Mariana',
        age: 20,
        localite: 'Caracas',
    },
    {
        nom: 'Torres',
        prenom: 'Santiago',
        age: 18,
        localite: 'Santiago',
    },
    {
        nom: 'García',
        prenom: 'Matías',
        age: 73,
        localite: 'Quito',
    },
    {
        nom: 'Sánchez',
        prenom: 'Camila',
        age: 69,
        localite: 'Caracas',
    },
    {
        nom: 'Flores',
        prenom: 'Santiago',
        age: 74,
        localite: 'Bogotá',
    },
    {
        nom: 'González',
        prenom: 'Mateo',
        age: 68,
        localite: 'Santiago',
    },
    {
        nom: 'Sánchez',
        prenom: 'Mariana',
        age: 75,
        localite: 'Lima',
    },
];


// Récupère le 1er formulaire du document
const formulaire = document.querySelector('form');
// Récupère les champs textes
const txtRechercher = document.querySelector('#rechercher');
const txtNom = document.querySelector('#nom');
const txtPrenom = document.querySelector('#prenom');
const txtAge = document.querySelector('#age');
const txtLocalite = document.querySelector('#localite');
// Récupère le premier corps de tableau <tbody>
const tableBody = document.querySelector('tbody');
// Test si la récupération des éléments HTML est OK
console.log(formulaire, txtNom, tableBody, txtRechercher);

// Fonction qui filtre le tableau par prénom et nom
function filtreTableau () {
    // Si on recherche rien on retourne tout tableau
    if(txtRechercher.value === '') {
        return tabPersonnes;
    }
    return tabPersonnes.filter(function(obj){
        return obj.prenom.toLowerCase()
            .includes(txtRechercher.value.toLowerCase()) ||
            obj.nom.toLowerCase()
                .includes(txtRechercher.value.toLowerCase());
    });
}

// Fonction qui créer un tableau HTML à partir du tableau JS des personnes
function construireTableau() {
    // Vide le tableau
    tableBody.innerHTML = '';
   // Filtre le tableau tabPersonnes
   let tabFiltre = filtreTableau();
    // Parcours le tableau d'objets tabPersonnes
    for(let personne of tabFiltre) {
        tableBody.innerHTML += `
        <tr>
            <td>${ personne.prenom }</td>
            <td>${ personne.nom }</td>
            <td>${ personne.age }</td>
            <td>${ personne.localite }</td>
        </tr>
    `;
    }
}

// Ecouter l'envoi du formulaire
formulaire.addEventListener('submit', function envoyer(event) {
   // Stopper l'envoi du formulaire
    event.preventDefault();
    // Ajoute un objet à tabPersonnes
    tabPersonnes.push({
        prenom: txtPrenom.value,
        nom: txtNom.value,
        age: txtAge.value,
        localite: txtLocalite.value,
    });
    construireTableau();
    // Vide tous les champs du formulaire
    formulaire.reset();
    // Focus sur le prénom
    txtPrenom.focus();
});

// Ectouter le changement de valeur du champ de recherche
txtRechercher.addEventListener('input', function () {
   construireTableau();
});

// Ecoute la fin de chargement de la page
window.addEventListener('load', function () {
    construireTableau();
});












