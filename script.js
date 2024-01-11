// var index = 0;
// var data = [
//   "Fouzia Iffat",
//   "a Web Developer",
//   "a problem solver",
//   "a lifelong learner",
//   "an enthusiast of web technologies",
//   "a team player",
//   "a curious explorer",
// ];

// var span = document.querySelector("span");
// var section = document.querySelector("section");

// function init() {
//   let txt = document.createTextNode(data[index]);
//   section.dataset.identity = data[index];
//   span.innerText = txt.textContent;
//   index++;
// }

// init();

// setInterval(function () {
//   let txt = document.createTextNode(data[index]);
//   section.dataset.identity = data[index];
//   span.innerText = txt.textContent;
//   index++;
//   index = index < data.length ? index++ : 0;
// }, 4501);

// // Add this to your existing script
// document.getElementById("nav-toggle").addEventListener("click", function () {
//   var links = document.querySelectorAll(".nav-link");
//   for (var i = 0; i < links.length; i++) {
//     links[i].style.display =
//       links[i].style.display === "block" ? "none" : "block";
//   }
// });

$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

var index = 0;
var data = [
  "Fouzia Iffat",
  "a Web Developer",
  "a problem solver",
  "a lifelong learner",
  "an enthusiast of web technologies",
  "a team player",
  "a curious explorer",
];

var span = document.querySelector("#redTitle");
var section = document.querySelector("section");

function init() {
  let txt = document.createTextNode(data[index]);
  section.dataset.identity = data[index];
  span.innerText = txt.textContent;
  index++;
}

init();

setInterval(function () {
  let txt = document.createTextNode(data[index]);
  section.dataset.identity = data[index];
  span.innerText = txt.textContent;
  index++;
  index = index < data.length ? index++ : 0;
}, 4501);
