let a = parseInt(prompt("entrez un chiffre "));
let b = parseInt(prompt("entrez un second chiffre "));

let resultat = a + b;

if(resultat < 100){
  document.write(true);
}
else{
  document.write(false);
}