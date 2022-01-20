/* console.log("console log is a function".toLowerCase());

function myName() {
  console.log("Albert Holskog");
}

myName();
*/

const heading = document.querySelector("h1");
const editbutt = document.querySelector(".edit");

function changHading() {
  heading.innerHTML = "updated heading";
}

editbutt.onclick = changHading;
