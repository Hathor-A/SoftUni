Premiers pas dans la programmation
Tâches pour l'exercice en classe et pour les devoirs au cours «Bases de la programmation» @ SoftUni.
Testez vos solutions dans le système d'arbitrage en ligne : https://judge.softuni.org/Contests/Compete/Index/2399
Projet Visual Studio Code vierge
Créez un projet vide dans Visual Studio Code. Nous combinerons les solutions à toutes les tâches sous la forme de fichiers séparés dans ce projet. Cette possibilité est extrêmement pratique lorsque nous voulons travailler sur plusieurs projets et passer rapidement de l'un à l'autre ou que nous voulons fusionner logiquement plusieurs projets interdépendants. Cela nous aide à séparer les solutions aux tâches et à les conserver, pour les utiliser pour d'autres tâches ou révisions.
Démarrer Visual Studio Code
Créez un nouveau dossier qui contiendra les solutions individuelles. Une boîte de dialogue s'ouvrira dans laquelle vous devrez sélectionner son répertoire. Il est recommandé de nommer le dossier en fonction du sujet du travail, par exemple «Premiers pas dans les calculs»

Sélectionnez ensuite le dossier en tant qu'environnement de bureau pour ajouter les fichiers de solution JavaScript à vos tâches.

Le panneau de gauche ressemblera à ceci :

Programme console «Hello SoftUni»
Écrivez une fonction qui affiche le texte «Hello SoftUni».
Lignes directrices
Créez un nouveau fichier JavaScript dans le dossier existant et nommez-le de manière appropriée. Il est recommandé que chaque fichier de script soit indiqué comme le nom de la tâche dont il contient la solution.


Le contenu du nouveau fichier s'ouvrira dans la fenêtre de droite.


Allez dans le fichier hello.js et créez la fonction hello(). Vous pouvez vous aider de l'image ci-dessous :

Lancez le programme avec : Ctrl + F5. Pour obtenir un résultat, nous devons «appeler» la fonction :

Nous pouvons voir le résultat dans la console ci-dessous :

Testez la solution à ce problème dans le système d'arbitrage en ligne :


Nombres de 1 à 10
Écrivez une fonction qui imprime les nombres de 1 à 10 sur des lignes distinctes de la console.
Lignes directrices
Créez un nouveau fichier JavaScript dans le dossier existant et nommez-le « Nums-1-To-10 ». Utilisez le corps de la fonction «nums1To10()» :






Les commandes de type 10 console.log(), l'une après l'autre, pour afficher les nombres de 1 à 10.

Commencez le programme avec : Ctrl + F5. Pour obtenir un résultat, vous devez «appeler» la fonction.
Calcul de la face carrée
Écrivez une fonction qui reçoit un entier et calcule la face carrée du côté donné.
Entrée et sortie d'échantillons


Lignes directrices
Acceptez une entrée (un numéro de chaîne) et enregistrez-la dans la variable a en la convertissant en un type numérique.
Initialiser une variable qui contient la valeur faciale calculée obtenue par la formule
a * a et affiche le résultat, en se rappelant que pour obtenir un résultat localement, vous devez appeler la fonction et lui transmettre des données d'entrée.

Convertisseur: pouces en centimètres
Écrivez une fonction qui lit à partir de la console un nombre réel et le convertit en pouces en centimètres. Pour ce faire, multipliez les pouces par 2,54 (1 pouce = 2,54 centimètres).
Entrée et sortie d'échantillons





Attention : en fonction des paramètres régionaux du système d'exploitation, il est possible d'utiliser une virgule décimale (paramètres US) au lieu d'une virgule décimale (paramètres US). Si le programme attend une virgule décimale et qu'un nombre est entré avec une virgule décimale ou vice versa (une virgule décimale est entrée lorsqu'une virgule décimale est attendue), il ne pourra pas s'exécuter.
Il est recommandé de modifier les paramètres de votre ordinateur afin qu'une virgule décimale soit utilisée :


Salutations par nom
Écrivez une fonction qui récupère le nom d'une personne et affiche « Bonjour, <nom > !«, où <nom> est le nom saisi par la console.
Lignes directrices
Tout d'abord, créez un nouveau fichier JavaScript dans le dossier existant et nommez-le de manière appropriée. Il est recommandé de dire que chaque fichier de script est le nom de la tâche dont il contient la solution.



Le contenu du nouveau fichier s'ouvrira dans la fenêtre de droite

Créez la variable name et conservez-y le nom qui est passé par (input).
Générez la console à l'aide du modèle suivant :

Comment fonctionne l'exemple ? La méthode console.log() nous permet d'écrire entre parenthèses une séquence de caractères qui contient la valeur d'une variable – ${name} et de l'afficher sur la console.
Notez que pour que le texte fonctionne, il doit être entouré du symbole ' , qui reconnaît le texte brut et une variable. Pour qu'une variable soit reconnue comme telle, elle doit commencer par le symbole $ et être placée entre accolades : { } .
Exécutez le programme avec Ctrl+F5 et testez avec différents exemples d'entrée.
Pour obtenir un résultat, nous devons «appeler» la fonction et lui passer des données d'entrée :



Testez votre solution dans judge sans activer l'appel de fonction .
Joindre du texte et des chiffres
Écrivez une fonction qui reçoit : nom, prénom, âge et ville et affiche un message du type suivant :
« Vous êtes <prénom> <nom>, une personne <âge> ans de <ville>."
Lignes directrices
Ajoutez à la solution Visual Studio Code actuelle un autre fichier JavaScript nommé «Concatenate-Data».
Acceptez l'entrée de la console :

Affichez la sortie formatée sur la console.
Exécutez le programme avec Ctrl+F5 et testez avec différents exemples d'entrée. Pour générer localement un résultat sur la console, vous devez appeler la fonction et transmettre les données d'entrée dans l'ordre dans lequel vous vous attendez à les recevoir :


Préparation des projets
Écrivez un programme qui calcule le nombre d'heures qu'il faudra à un architecte pour préparer les projets de plusieurs chantiers de construction.
Entrée
À partir de la console, lisez 2 lignes :
Le nom de l'architecte - texte
Nombre de projets à préparer - un entier compris entre [0 ... 100]
Sortie
Sur la console est imprimé :
« L'architecte aura besoin de {heures requises} heures pour mener à bien {nombre de projets} projet(s).»
Entrée et sortie d'échantillons


Animalerie
Écrivez un programme qui calcule le coût d'achat de la nourriture pour chiens et chats. La nourriture est achetée dans une animalerie, car un paquet de nourriture pour chiens coûte 2,50 leva et un paquet de nourriture pour chats coûte 4 leva.
Entrée
À partir de la console, lisez 2 lignes :
Le nombre de paquets de nourriture pour chiens – un entier compris dans l'intervalle [0... 100]
Le nombre d'emballages de nourriture pour chats – un entier compris entre [0... 100]
Sortie
Sur la console est imprimé :
« {montant final} NV. »
Entrée et sortie d'échantillons


Aménagement paysager des cours
Bozhidara possède plusieurs maisons sur la côte de la mer Noire et souhaite aménager les cours de certaines d'entre elles, créant ainsi une atmosphère chaleureuse et confortable pour ses invités.
Écrivez un programme qui calcule le montant requis que Bozhidara devra payer à l'entrepreneur. Le prix d'un mètre carré est de 7,61 BGN avec TVA. Parce que son chantier est assez grand, l'entreprise entrepreneure offre une réduction de 18% sur le prix final.
Entrée
Une seule ligne est lue depuis la console :
Carré. mètres à aménager – un nombre réel de l'ordre de [0,00 ... 10000.00]
Sortie
Deux lignes sont imprimées sur la console :
«Le prix final est de : {prix final de la prestation} lv.»
«La réduction est: {отстъпка} lv.»
Entrée et sortie d'échantillons


