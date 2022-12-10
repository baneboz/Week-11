"use strict";
// EXERCISES 1
console.log("EXERCISES 1");
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

console.log("===================");

// EXERCISES 2
console.log("EXERCISES 2");
// Create a function that takes an array of objects (groceries) which
// calculates the total price and returns it as a number.
// A grocery object has a product, a quantity and a price, for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
function totalPrice(groceries) {
  let sum = 0;

  for (let i = 0; i < groceries.length; i++) {
    sum += groceries[i].quantity * groceries[i].price;
  }

  return `The sum of groceries is: ${sum}`;
}

console.log(
  totalPrice([
    {
      product: "Milk",
      quantity: 1,
      price: 1.5,
    },
    {
      product: "Bread",
      quantity: 2,
      price: 1.2,
    },
    {
      product: "Eggs",
      quantity: 20,
      price: 0.2,
    },
  ])
);

// 2. You go to a jewelry shop and try to find the most expensive piece of
// jewelry. You write down the name of each piece of jewelry and its
// price.
// Create a function that gets the name of the piece of jewelry with
// the highest price and returns "The most expensive one is the {name of
// jewelry piece}".
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold
// watch’, price:250}, ...])
// The most expensive one is the diamond Ring

function mostExpensive(jewelry) {
  let highestPrice = jewelry[0].price;
  let highestName = jewelry[0].name;

  for (let i = 0; i < jewelry.length; i++) {
    if (jewelry[i].price > highestPrice) {
      highestName = jewelry[i].name;
    }
  }
  console.log(`The most expensive one is the ${highestName}.`);
}

mostExpensive([
  { name: "DiamondEarings", price: 980 },
  { name: "Goldwatch", price: 250 },
  { name: "The One Ring", price: 1000000 },
]);

// Given a word, create an object that stores the indexes of each letter in an array. Make sure the letters are the keys.
// Make sure the indexes are stored in an array and those arrays are values.
// Examples:
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters("graapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5]

// And who cursed the most in the fight between you and your spouse?
// Given an object with three rounds, with nested objects as your scores
// per round, return a string of who cursed the most: If you, return "ME!"
// If your spouse, return "SPOUSE!" If a draw, return "DRAW!"
// Examples:
// determineWhoCursedTheMost([{me: 10,    spouse: 5  },  {    me: 5,
// spouse: 10  },
// {    me: 0, spouse: 10,  }]) ➞ "DRAW!"
// determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse:
// 10}, { me: 9,  spouse: 10}]) ➞ "ME!"
// determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9,  spouse:
// 44 }, { me: 10,    spouse: 55}]) ➞ "SPOUSE!"
function determineWhoCursedTheMost(curses) {
  let scoreMe = 0;
  let scoreSpouse = 0;

  for (let i = 0; i < curses.length; i++) {
    scoreMe += curses[i].me;
    scoreSpouse += curses[i].spouse;
  }

  if (scoreMe > scoreSpouse) return "ME!";
  else if (scoreMe < scoreSpouse) return "SPOUSE!";
  else return "DRAWN!";
}

console.log(
  determineWhoCursedTheMost([
    { me: 10, spouse: 5 },
    { me: 5, spouse: 10 },
    { me: 10, spouse: 10 },
  ])
);

// Create a function that converts color in RGB format to Hex format.
// Examples:
// rgbToHex({red: 0, green: 128,  blue: 192}) ➞ "#0080c0"
const rgbToHex = function (rgb) {
  const { red, green, blue } = rgb;

  const hex = `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
  return hex;
};
console.log(rgbToHex({ red: 0, green: 128, blue: 192 }));

// Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.
//   CoinValue
//   Penny 1c
//   Nickel 5c
//   Dime 10c
//   Quarter 25c

//   Examples:
//   makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
//   makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
//   makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }

const makeChange = function (change) {
  const result = { q: 0, d: 0, n: 0, p: 0 };

  while (change > 0) {
    if (change >= 25) {
      change -= 25;
      result.q++;
    } else if (change >= 10) {
      change -= 10;
      result.d++;
    } else if (change >= 5) {
      change -= 5;
      result.n++;
    } else if (change >= 1) {
      change -= 1;
      result.p++;
    }
  }
  return result;
};
console.log(makeChange(47));

// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.
// Examples:
// [
//   { name: "John", notes: [3, 5, 4]}
// ]
// ➞
// [
//   { name: "John", avgNote: 4 }
// ]

const avgNotes = function (students) {
  const studentsWithAvg = [];
  const sum = [];
  const avg = [];

  for (let i = 0; i < students.length; i++) {
    // predefine sum at index with 0
    sum[i] = 0;

    for (let j = 0; j < students[i].notes.length; j++) {
      sum[i] += students[i].notes[j];
    }

    avg[i] = sum[i] / students[i].notes.length;

    studentsWithAvg[i] = {
      name: students[i].name,
      avgNote: Math.round(avg[i] * 10) / 10,
    };
  }

  return studentsWithAvg;
};
console.log(
  avgNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Bane", notes: [1, 2, 3] },
    { name: "Goran", notes: [3, 2, 3] },
  ])
);

// Given an object with students and the grades that they made on the
// tests that they took, determine which student has the best Test
// Average. The key will be the student's name and the value will be an
// array of their grades. You will only have to return the student's name.
// You do not need to return their Test Average.
// getBestStudent([{  name: 'John’, grades: [100, 90, 80]}, {name: 'Bob’,
// grades: [100, 70, 80]}...]) ➞ "John" // John's avg = 90 // Bob's avg =
// 83.33
const getBestStudent = function (students) {
  const studentsWithAvg = [];
  const sum = [];
  const avg = [];

  for (let i = 0; i < students.length; i++) {
    // predefine sum at index with 0
    sum[i] = 0;

    for (let j = 0; j < students[i].grades.length; j++) {
      sum[i] += students[i].grades[j];
    }

    avg[i] = sum[i] / students[i].grades.length;

    studentsWithAvg[i] = {
      name: students[i].name,
      avgTest: Math.round(avg[i] * 100) / 100,
    };
  }

  let highestAvg = studentsWithAvg[0].avgTest;
  let highestName = studentsWithAvg[0].name;

  for (let k = 0; k < studentsWithAvg.length; k++) {
    if (studentsWithAvg[k].avgTest > highestAvg) {
      highestName = studentsWithAvg[k].name;
    }
  }

  return `And the best student is: ${highestName}!`;
};

// let highestPrice = jewelry[0].price;
// let highestName = jewelry[0].name;

// for (let i = 0; i < jewelry.length; i++) {
//   if (jewelry[i].price > highestPrice) {
//     highestName = jewelry[i].name;
//   }
// }
console.log(
  getBestStudent([
    { name: "John", grades: [100, 90, 80] },
    { name: "Bob", grades: [100, 70, 80] },
    { name: "Bane", grades: [100, 100, 80] },
  ])
);
