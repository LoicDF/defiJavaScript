let nombreEntier = parseInt(prompt("entrez un chiffre entier "));
let divise = 5;
let modulo = nombreEntier % divise;

if(modulo==0){
  document.write(true);
}
else{
  document.write(false);
}
