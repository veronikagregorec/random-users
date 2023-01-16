// Local Storage
document.getElementById("addBtn").addEventListener("click", addToStorage);
let person = JSON.parse(localStorage.getItem("tester"));

console.log(person);

function addToStorage() {
  let tempFirst = document.getElementById("firstName").value.capitalize();
  let tempLast = document.getElementById("lastName").value.capitalize();
  let myObj = JSON.stringify({ firstName: tempFirst, lastName: tempLast });

  localStorage.setItem("tester", myObj);
  console.log(myObj);
  localStorage.getItem("tester");
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Get data from JSON
const addBtn = document
  .getElementById("getBtn")
  .addEventListener("click", addJSON);
const output = document.querySelector("#output");

function addJSON() {
  const url = "https://randomuser.me/api/?results=4";
  output.innerHTML = " ";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let people = data.results;
      console.log(people);

      return people.map(function (val) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let span = document.createElement("span");
        let firstName = val.name.first.capitalize();
        let lastName = val.name.last.capitalize();
        let phone = val.phone;
        let gender = val.gender;

        img.src = val.picture.large;
        span.innerHTML =
          "Name: " +
          firstName +
          " " +
          lastName +
          "<br/>" +
          "Phone: " +
          phone +
          "<br/>" +
          "Gender: " +
          gender;

        div.appendChild(img);
        div.appendChild(span);
        output.appendChild(div);
      });
    })

    .catch(function (error) {
      console.log(error);
    });
}
