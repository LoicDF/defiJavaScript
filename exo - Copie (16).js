let heure = parseInt(prompt("entrez une heure"));
let minute = parseInt(prompt("entrez un nombre de minute"));

function second(heure,minute){
  resultat1 = heure * 3600;
  resultat2 = minute * 60;
  resultat3 = resultat1 + resultat2;
  return resultat3
}
document.write(second(heure,minute));