//-------------1---------
const product = {
  name: "Chicken feet",
  price: 149.99,
};
console.log(product.price);

//-----------------2--------------
const animals = [
  {
    type: "cat",
    colour: "black",
  },
  {
    type: "elephant",
    colour: "grey",
  },
  {
    type: "dog",
    colour: "brown",
  },
  {
    type: "zebra",
    colour: "black and white",
  },
];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i].colour);
}

//----------------3-----------------
const dinnerOptions = [
  { name: "Fish and Dips", price: 11.95, onSpecial: true },
  { name: "Bacon and Frogs", price: 12.99, onSpecial: false },
  { name: "Mince Flies", price: 19.0, onSpecial: true },
];

for (let i = 0; i < dinnerOptions.length; i++)
  if (dinnerOptions[i].onSpecial) {
    console.log(dinnerOptions[i].name);
  }

//-----------------------4----------

const people = [
  {
    firstName: "Burt",
    lastName: "Smacharach",
    age: 35,
  },
  {
    firstName: "Elvis",
    lastName: "Deadly",
    age: 55,
  },
  {
    firstName: "Susan",
    lastName: "Sarongson",
    age: 42,
  },
  {
    firstName: "Big",
    lastName: "Gabe",
    age: 10,
  },
];

for (let i = 0; i < people.length; i++) {
  const age = people[i].age;
  const fullName = people[i].firstName + " " + people[i].lastName;
  if (age >= 20 && age <= 50) {
    console.log(fullName);
  }
}

//-------------------5-------------
