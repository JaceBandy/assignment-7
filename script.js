console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Pizza", "Sushi", "Ramen", "Ice Cream", "Tacos", "Burgers"];

// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log(`One of my favorite foods is ${favoriteFoods[i]}.`);
}

// 3. Print out the rating for each food with a ranking
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log(`My #${i + 1} favorite food is ${favoriteFoods[i]}.`);
}

// 4a. Create a function printFoodRecommendation(foodName)
function printFoodRecommendation(foodName) {
    console.log(`Have you ever tried ${foodName}?`);
    console.log(`I always recommend ${foodName} to friends.`);
    console.log(`Trust me — ${foodName} is delicious.`);
    console.log(''); // Adds a blank line for readability
}

// 4b. Call the function at least 3 times
printFoodRecommendation("Ramen");
printFoodRecommendation("Sushi");
printFoodRecommendation("Tacos");

// 5 & 6. Print out only foods that have an "a" in the name and store them in an array
let foodsWithA = [];

for (let i = 0; i < friendFavorites.length; i++) {
    let food = friendFavorites[i];
    // Check if the food name contains 'a' (case-insensitive)
    if (food.toLowerCase().includes('a')) {
        foodsWithA.push(food);
    }
}

// Print the array
console.log("Foods with 'a' in the name:", foodsWithA);

// 7 & 8. Separate foods by name length
let longFoodNames = [];
let shortFoodNames = [];

for (let i = 0; i < friendFavorites.length; i++) {
    let food = friendFavorites[i];
    if (food.length > 6) {
        longFoodNames.push(food);
    } else {
        shortFoodNames.push(food);
    }
}

// 9. Print both arrays
console.log("Long food names (>6 chars):", longFoodNames);
console.log("Short food names (≤6 chars):", shortFoodNames);

// Compare lengths
if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
    console.log("There are more short-named foods.");
} else {
    console.log("There is an equal number of long and short-named foods.");
}

// 10. STRETCH: Find the longest food name
let longestFood = friendFavorites[0];

for (let i = 1; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length > longestFood.length) {
        longestFood = friendFavorites[i];
    }
}

console.log(`The longest food name in the list is ${longestFood} with ${longestFood.length} characters.`);