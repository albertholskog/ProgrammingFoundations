# ProgrammingFoundations

Due: 10.01.22 16:00

# Programming Foundations Module Assignment 1

## Instructions

Your code must be properly formatted. You will lose marks for poorly formatted code.

If you have previous experience with JavaScript you can use the let and const keywords instead of var.

## Questions

1. Declare and initialise three variables with appropriate names and values. One variable with a number value, one with a boolean value and one with a string value.
2. Declare two variables. Assign your first name to one of the variables and your last name to the other. Concatenate (join) the variables, assign them to a third variable and console log the value of the third variable.
3. Check the type of the value "frog" with the typeof operator and assign the result to a variable. Console log the variable value with a label, e.g. “The type of frog is \_\_\_”.
4. Declare and initialise a variable called orderHasShipped with a boolean value. Create an if statement that checks if orderHasShipped is true. If it is true, console log the string value "The order shipped". If not, console log the string value "The order did not ship".
5. Create a for loop that counts from 7 to 13. Console log the value of the counter variable inside the loop.

## Submission

Push your answers to your public repository and submit a link to the repository on Moodle.

## øving oppgaver.

Question 1
Use a JavaScript string method to determine whether these strings are equal regardless of letter case.

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

Question 2
Write an if statement to check if the variable below has a minimum character count of 4 and a maximum of 10.

var username = "myusername";
If both tests pass log a message saying "Acceptable username".

If either test fails use nested if statements to indicate which test failed, e.g. if the character count is too low, log the message "Too few characters". If the character count is too high, log the message "Too many characters".

Change the variable's value to test your code.

Question 3
The following criteria need to be met before an order can be considered complete:

The invoice must be paid
The product must have been dispatched
The customer must have signed for the delivery
Using the variables below write an if/else statement that determines whether the order is complete:

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;
If the order is complete log the message "Order complete". If not, use nested if statements to indicate why the order is incomplete.

Use the logical AND (&&) operator to complete this task.

Change the variables' values to test your code.

Question 4
Re-write your code from the question above using the logical OR (||) operator.

## module 2

Question 1
Console log the 3rd item in this array.

var winningNumbers = [1, 76, 2, 78, 16, 7];

Question 2
Add a new item to this array using the push method and console log the new amount of items.

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
Question 3
Console log each item in this array using a for loop.

var randomThings = ["pumpkin", false, 23, true, "tomato"];
Question 4
Loop through this array but only log the item if it is a number value.

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];
Question 5
Order this array alphabetically and then loop through it and log each item.

var ingredients = ["water", "flour", "toothpaste", "fish lips"];
Question 6
Loop through this array and log every second item.

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];
