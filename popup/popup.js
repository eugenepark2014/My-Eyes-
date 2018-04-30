var slider = document.getElementById("Range");
var colorValue = document.getElementById("color");
var fullPage = document.getElementById("fullPage");
var start = document.getElementById("Start");
//set variables to html elements
const colors = [
  ["#ffffe6", "#000000", "Paperback"],
  ["#8C0000", "#DFFFF7", "F.Lux"],
  ["#000000", "#DFFFF7", "Pitch Black"]
];
//array of theme profiles
let currentColor = colors[1];

colorValue.innerHTML = currentColor[2]; // Display the default slider value

let params = {
  active: true,
  currentWindow: true
};
//this changes the slider name and current color variable
slider.oninput = function() {
  currentColor = colors[this.value - 1];
  colorValue.innerHTML = currentColor[2];
};
//sends a message to the active tab with information
start.onclick = function() {
  chrome.tabs.query(params, gotTab);
  function gotTab(tab) {
    chrome.tabs.sendMessage(tab[0].id, {
      color: currentColor,
      allPage: false
    });
  }
};

fullPage.onclick = function() {
  chrome.tabs.query(params, gotTab);
  function gotTab(tab) {
    chrome.tabs.sendMessage(tab[0].id, {
      color: currentColor,
      allPage: true
    });
  }
};
