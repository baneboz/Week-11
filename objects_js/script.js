"use strict";

// 1. Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
const favCoffee = {
  name: "espresso",
  strength: "strong",
  milk: false,
  sugar: false,
  countryOfOrigin: "Italy",
};

// 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.
const favMovie = {
  title: "Matrix",
  actors: [
    "Keanu Reeves",
    "Carrie-Anne Moss",
    "Hugo Weaving",
    "Laurence Fishburne",
  ],
  director: "The Wachowskis",
  genre: ["Action", "Sci-Fi"],
};

// 3. Write a function that creates an object that represents a project. Each project is described by: description, programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository, a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

function Project(description, pLanguage, gitRepo, inDevelopment) {
  this.description = description;
  this.pLanguage = pLanguage;
  this.gitRepo = gitRepo;
  this.inDevelopment = inDevelopment;
}

const mwc = new Project(
  "BIT project - Most Wanted Criminal",
  "HTML&CSS",
  "www.github.com",
  false
);

mwc.printRepo = function () {
  console.log(this.gitRepo);
};
mwc.checkJS = function () {
  if (this.pLanguage === "JavaScript") {
    return true;
  } else {
    return false;
  }
};
mwc.checkDev = function () {
  if (this.inDevelopment) {
    return true;
  } else {
    return false;
  }
};

mwc.printRepo();
console.log(mwc.checkJS());
console.log(mwc.checkDev());

// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
// Add a method that prints out all the ingredients necessary for the meal preparation.
// Add a method that checks if a meal can be prepared in under 15 minutes.
// Add a method that changes the type of cuisine to the given value.
// Add a method that delete a given ingredient from the list of ingredients.
function Recipe(
  name,
  type,
  complexity,
  ingredients,
  prepTime,
  prepInstruction
) {
  this.name = name;
  this.type = type;
  this.complexity = complexity;
  this.ingredients = ingredients;
  this.prepTime = prepTime;
  this.prepInstruction = prepInstruction;
}

const pizza = new Recipe(
  "pizza",
  "flatbread",
  2,
  ["dough", "sauce", "cheese", "bacon", "mushrooms"],
  10,
  "buy pizza form pizzeria"
);

pizza.printIngredients = function () {
  console.log(...this.ingredients);
};
pizza.ifUnder15 = function () {
  return this.prepTime < 15 ? true : false;
};
pizza.changeCuisine = function (newCuisine) {
  this.type = newCuisine;
};
pizza.deleteIngredient = function (ingredient) {
  this.ingredients = this.ingredients.filter(function (el) {
    return el !== ingredient;
  });
};

pizza.printIngredients();

pizza.changeCuisine("neka nova cuisine");
console.log(pizza.type); //neka nova cuisine

console.log(pizza.ifUnder15()); //true

pizza.deleteIngredient("mushrooms");
console.log(pizza.ingredients); //no mushrooms
