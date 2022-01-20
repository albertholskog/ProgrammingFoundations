// let random = Math.random();
// if (random < 0.5) {
//   console.log("ja den er mindre");
// } else {
//   console.log("det er større");
// }
// console.log(random);

// if (1 + 1 === 2) {
//   console.log("det funker");
// }

// const dayOfWeek = "wjnere";

// if (dayOfWeek === "monday") {
//   console.log("jeg hater mandager");
// } else if (dayOfWeek === "satureday") {
//   console.log("jeg liker lørdager");
// } else if (dayOfWeek === "friday") {
//   console.log("fredag er grei");
// } else {
//   console.log("en annen dag");
// }

// const age = 50;

// if (age < 5) {
//   console.log("du kommmer inn gratis");
// } else if (age < 10) {
//   console.log("du er et barn, du kommer inn for 10kr");
// } else if (age < 65) {
//   console.log("du er voksen du betaler 20 kr");
// }

// if (phrase === "stop") {
//   console.log("red");
// } else if (phrase === "slow") {
//   console.log("yellow");
// } else if (phrase === "go") {
//   console.log("green");
// } else {
//   console.log("purple");
// }

// const password = prompt("please enter a new password");

// //password must be 6+ characters
// if (password.length >= 6) {
//   // password cannot include space
//   if (password.indexOf(" ") === -1) {
//     console.log("goodkjent passord");
//   } else {
//     console.log("password cannot contain spaces");
//   }
// } else {
//   console.log("password too short! must be 6+ characters");
// }

// const password = prompt("Enter a password");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("godkjent passord");
// } else {
//   console.log("incorrect format for password");
// }

// 0-5 free
// 5-10 kr10
// 10-65 kr20
// 65+ free

// const age = -10;
// if ((age > 0 && age < 5) || age >= 65) {
//   console.log("free");
// } else if (age >= 5 && age < 10) {
//   console.log("10kr");
// } else if (age >= 10 && age < 65) {
//   console.log("20kr");
// } else {
//   console.log("invalid Age");
// }

// -------------Array
// let days = ["mandag", "tirsdag", "onsdag", "torsdag", "ffredag"];
// console.log(days[2]);

// forandre array etter man har laget en! her gjør jeg det med ffredag til fredag.
// days[4] = "fredag";
// console.log(days);

// push - add to end
// pop - remove from end
// shift - remove from start
// unshift -add to start

// hvordan man slår sammen 2 array
// let cats = ["blue", "kitty"];
// let dog = ["rusty", "balder"];
// let comboParty = cats.concat(dog);
// console.log(comboParty);

// Array inni Array. hvordan man kan hente ut ting fra et Array som er inni et
// const gameBord = [["x", "o", "x"], [("o", null, "x")], [("o", "o", "x")]];
// console.log(gameBord[1][1]);

// const airplaneSeats = [
//   ["Ruth", "Anthony", "Stevie"],
//   ["Amelia", "Pedro", "Maya"],
//   ["Xavier", "Ananya", "Luis"],
//   ["Luke", null, "Deniz"],
//   ["Rin", "Sakura", "Francisco"],
// ];
// airplaneSeats[3][1] = "Hugo";
// console.log(airplaneSeats);

// Object

// const person = {
//   firstName: "Albert",
//   lastName: "Holskog",
//   sex: "male",
//   age: 27,
//   student: true,
//   food: ["pizza", "taco"],
// };
// console.log(person);
// //for å få ut info fra objektet.
// console.log(person["lastName"]);
// console.log(person.lastName);
// //legge til.
// person.age = 28;
// console.log(person);
// person.samboer = "line";
// console.log(person);

// Object inni en Array
// const comments = [
//   { username: "Albert", text: "lololol", votes: 9 },
//   { username: "line", text: "hahahha", votes: 10 },
// ];
// console.log(comments[1].text);

// for loops

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i)
// }
// for(let i = 100; i >= 0; i -= 10){
//     console.log(i)
// }

// looping over Array

// const airplaneSeats = ["Ruth", "Anthony", "Stevie", "Amelia", "Pedro", "Maya"];

// for (let i = 0; i < airplaneSeats.length; i++) {
//   console.log(i, airplaneSeats[i]);
// }

// for (let i = airplaneSeats.length - 1; i >= 0; i--) {
//   console.log(i, airplaneSeats[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].toUpperCase());
// }

// const airplaneSeats = [
//   ["Ruth", "Anthony", "Stevie"],
//   ["Amelia", "Pedro", "Maya"],
//   ["Xavier", "Ananya", "Luis"],
//   ["Luke", "Hugo", "Deniz"],
//   ["Rin", "Sakura", "Francisco"],
// ];
// for (let i = 0; i < airplaneSeats.length; i++) {
//   const row = airplaneSeats[i];
//   console.log("Row #");
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// while loop

// let count = 0;
// while (const < 10){
//     count++;
// }
