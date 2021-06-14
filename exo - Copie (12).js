let heure = parseInt(prompt("entrez 1 heure a convertir en seconde"));

let minute = 60;
let seconde = 60;

function tempsEnSeconde(minute,seconde,heure){
  resultat = ( minute * seconde) * heure;
  return resultat
}
document.write(tempsEnSeconde(minute, seconde, heure));