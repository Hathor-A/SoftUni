/*
Écrivez une fonction qui reçoit un entier et calcule la face carrée du côté
donné.
Acceptez une entrée (un numéro de chaîne) et enregistrez-la dans la
variable a en la convertissant en un type numérique.
Initialiser une variable qui contient la valeur faciale calculée obtenue
par la formule
a * a et affiche le résultat, en se rappelant que pour obtenir un résultat
localement, vous devez appeler la fonction et lui transmettre des
données d'entrée.
*/

function squarArea(input) {
    let a = Number(input[0]);
    let area = a * a;
    console.log(area);

}
squarArea([10]);