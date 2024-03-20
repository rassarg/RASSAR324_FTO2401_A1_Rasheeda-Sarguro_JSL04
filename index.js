// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Regular'; // Possible values: 'Regular', 'Sugar-free', or undefined
console.log(`You prefer the ${userPreference ? userPreference : 'Regular'} variety of Monster energy drink!`);
/*
if (userPreference) {
    console.log(`You prefer the ${userPreference } variety of Monster energy drink!`);
} else {
    console.log(`You prefer the Regular variety of Monster energy drink!`);
}
*/

// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 2; // Any number of cans
console.log(`${cansLeft} cans left. ${cansLeft < 5 ? 'Time to restock!' : "We're stocked!"}`);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 95; // Current heart rate in bpm
console.log(`Current heart rate: ${heartRate}bpm. ${heartRate < 100 ? 'Boost needed!' : 'Energy levels are high!'}`);


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

let currentTemp = 5; // Current temperature in °C
console.log(`Drink temperature: ${currentTemp}°C. ${currentTemp <= 5 ? 'Chilled to perfection!' : 'Needs a cooler!'}`);


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 24;

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."

console.log(`Current time: ${currentHour}${currentHour >= 7 && currentHour < 24 ? "h. Unleash the beast!" : "h. Better stick to water!"}`);

// I chose to include up until midnight (24) but not include midnight itself.
// because it wouldn't make sense to drink the energy drink at midnight.
// Additionally there's a built-in JS method called getHours() that defines the range as being 0(midnight) to 23
// so you wouldn't include 24 in this range.