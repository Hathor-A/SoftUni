/*
Écrivez une fonction qui récupère le nom d'une personne et affiche
« Bonjour, <nom > !« , où <nom> est le nom saisi par la console.

 Créez la variable name et conservez-y le nom qui est passé par (input).
Générez la console à l'aide du modèle suivant :

Comment fonctionne l'exemple ? La méthode console.log() nous permet
d'écrire entre parenthèses une séquence de caractères qui contient la
valeur d'une variable – ${name} et de l'afficher sur la console.
Notez que pour que le texte fonctionne, il doit être entouré du symbole ' ,
qui reconnaît le texte brut et une variable. Pour qu'une variable soit
reconnue comme telle, elle doit commencer par le symbole $ et être
placée entre accolades : { } .
3. Exécutez le programme avec Ctrl+F5 et testez avec différents
exemples d'entrée.
4. Pour obtenir un résultat, nous devons « appeler » la fonction et lui
passer des données d'entrée :
*/

function greetings(input) {
    let name = input[0];
    console.log(`Hello, ${name}!`);
}
greetings(["Ato"]);