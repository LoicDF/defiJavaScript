let base = parseInt(prompt(" entrez la base du triangle "));
let hauteur = parseInt(prompt(" entrez la hauter du triangle "));

function triangle(base, hauteur){
  resultat = ( base * hauteur ) / 2;
  return resultat;
}

document.write(triangle(base, hauteur));