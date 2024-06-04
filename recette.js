// Première étape : La liste des ingrédients doit être stockée dans un tableau. Afficher en une phrase, le nombre d’ingrédients nécessaires pour la recette. 

const ingredients = [
    "Pâtes",
    "Oeuf",
    "Sel",
    "Poivre",
    "Lardon",
    "Oignon",
    "Parmesan"
  ];

console.log(ingredients.length)

// Deuxième étape : Afficher la liste des ingrédients nécessaires pour la recette des pâtes carbonara. Pas de mode d’affichage imposé. 

const phrase = "Pour faire des pates carbo il faut toujours avoir dans son frigo des " + ingredients 

console.log(phrase)

// Troisième étape : L’affichage doit se faire avec un numéro attribué à l’ordre, comme dans la liste ci-dessus. On doit revenir à la ligne pour chaque ingrédient. 

let listeIngredients = "";
for (let i = 0; i < ingredients.length; i++) {
    listeIngredients += (i+1) + "." + ingredients[i] + "\n";
}

console.log(listeIngredients)

// Quatrième étape : L’ordre d’affichage doit se faire de manière alphabétique.

ingredients.sort()

console.log(ingredients)



