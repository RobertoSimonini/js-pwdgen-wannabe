/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21  */

/*
1. Prendo l'elemento dal dom 
2. Chiedo il nome dell'utente
3. Chiedo il cognome dell'utente
4. Chiedo il colore preferito dell'utente
5. Inserisco il tutto seguito da 21 nell'HTML

*/

// Prendo l'elemento dal DOM //
const Passwordelement = document.getElementById ('Password');
// // console.log(Passwordelement);

// Chiedo il nome dell'utente //

const userName = prompt('Quale è il tuo nome?');
// // console.log(userName);

// Chiedo il cognome dell'utente //

const userSurname = prompt('Quale è il tuo cognome?');
// // console.log(userSurname);

// Chiedo il colore preferito dell'utente //

const favColor = prompt('Quale è il tuo colore preferito?');
// // console.log(favColor);

const userAge = '21';
// // console.log(userAge)

Passwordelement.innerText = userName + userSurname + favColor + userAge;