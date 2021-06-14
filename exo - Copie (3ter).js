let minuteAalculerEnSecond = parseInt(prompt("entrez un chiffre a calculer ! "));
let multiplicateur = 60 ;

function heure(minuteAalculerEnSecond, multiplicateur){
  resultat = minuteAalculerEnSecond * multiplicateur;
  return resultat;
}
document.write(heure(minuteAalculerEnSecond, multiplicateur));