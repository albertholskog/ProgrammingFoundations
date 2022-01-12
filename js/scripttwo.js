const requiredName = "Gertrude";
const suppliedName = "GERTRUDE";
if (requiredName.toLowerCase === suppliedName.toLowerCase);
{
  console.log("the strings er equal");
}

const userName = "myusername";
const len = userName.length;

console.log(len);

if (len >= 4 && len <= 10) {
  console.log("godkjent bruker navn");
} else {
  if (len < 4) {
    console.log("for mange");
  }
  if (len > 10) {
    console.log("for få");
  }
}
let invoicePaid = true;
let productDispatched = false;
let customerHasSigned = false;

if (invoicePaid && productDispatched && customerHasSigned) {
  console.log("Order complete");
} else {
  if (!invoicePaid) {
    console.log("t");
  }
  if (!productDispatched) {
    console.log("gf");
  }
  if (!customerHasSigned) {
    console.log("ge");
  }
}

if (!invoicePaid || !productDispatched || !customerHasSigned) {
  if (!invoicePaid) {
    console.log("Invoice is not paid");
  }
  if (!productDispatched) {
    console.log("Product is not dispatched");
  }
  if (!customerHasSigned) {
    console.log("Customer has not signed");
  }
} else {
  console.log("Order complete");
}

let winningNumbers = [1, 76, 2, 78, 16, 7];

console.log(winningNumbers[2]);

let vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("ice cream");
console.log(vegetables);
var itemCount = vegetables.length;
console.log(itemCount);

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
  console.log(requiredName[i]);
}

let moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (let i = 0; i < moreThings.length; i++) {
  let typeOfItem = typeof moreThings[i];
  if (typeOfItem === "number") {
    console.log(moreThings[i]);
  }
}

let ingredients = ["water", "flour", "toothpaste", "fish lips"];
let sortIngredients = ingredients.sort();

for (let i = 0; i < sortIngredients.length; i++) {
  console.log(sortIngredients[i]);
}

let characters = [
  "Gob",
  "Michael",
  "George Michael",
  "Lindsay",
  "Buster",
  "Maeby",
  "Tobias",
  "Lucille",
];
for (let i = 0; i < characters.length; i++) {
  if (i % 2 === 1) {
    console.log(characters[i]);
  }
}
