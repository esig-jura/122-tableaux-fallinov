/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

const personnes = [
    {
        nom: 'Doe',
        prenom: 'John',
        age: 25,
        localite: 'New York',
    },
    {
        nom: 'Doe',
        prenom: 'Jane',
        age: 30,
        localite: 'Los Angeles',
    },
    {
        nom: 'Doe',
        prenom: 'Jack',
        age: 28,
        localite: 'Chicago',
    },
    {
        nom: 'Doe',
        prenom: 'Jill',
        age: 35,
        localite: 'Miami',
    },
    {
        nom: 'Doe',
        prenom: 'Jim',
        age: 40,
        localite: 'San Francisco',
    }
];

// Récupère le 1er formulaire du document
const formulaire = document.querySelector('form');
// Récupère le champ texte #nom
const txtNom = document.querySelector('#nom');
const txtPrenom = document.querySelector('#prenom');
// Récupère le premier corps de tableau <tbody>
const tableBody = document.querySelector('tbody');
// Test si la récupération des éléments HTML est OK
console.log(formulaire, txtNom, tableBody);

// Ecouter l'envoi du formulaire
formulaire.addEventListener('submit', function envoyer(event) {
   // Stopper l'envoi du formulaire
    event.preventDefault();
    // Crée le code HTML da la nouvelle ligne
    let nouvelleLigne = `
        <tr>
            <td>${ txtPrenom.value }</td>
            <td>${ txtNom.value }</td>
            <td></td>
            <td></td>
        </tr>
    `;
    // Ajouter la nouvelle personne à la fin du <tbody>
    tableBody.innerHTML += nouvelleLigne;
});
