let favoriteCities = ["Saint Louis", "Chicago", "Edwardsville", "New York", "Seattle"];
favoriteCities.forEach(city => {
    console.log(city.toUpperCase());
  });
// SAINT LOUIS
// CHICAGO
// EDWARDSVILLE
// NEW YORK
// SEATTLE

  let numbers = [1, 2, 3, 4, 5];
  let squares = numbers.map(num => num * num);
  console.log(squares);
// [1, 4, 9, 16, 25]

let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores);
// [85, 90, 100]

let favoriteFood = ["Buffalo Chicken", "Taco Bell", "Nachos", "Calamari", "Ice Cream"];
let firstFoodWithMoreThan4Letters = favoriteFood.find(food => food.length > 4);
console.log("First food with more than 4 letters:", firstFoodWithMoreThan4Letters);
let foodIndex = favoriteFood.findIndex(food => food.length > 4);
console.log("Index of the first food with more than 4 letters:", foodIndex);