/*
Écrivez une fonction qui lit à partir de la console un nombre réel et le
convertit en pouces en centimètres. Pour ce faire, multipliez les pouces
par 2,54 (1 pouce = 2,54 centimètres).
*/

function nbConverter(input) {
    let inche = Number(input[0]);
    let result = inche * 2.54;
    console.log(result);
}
nbConverter([5]);
nbConverter([7]);