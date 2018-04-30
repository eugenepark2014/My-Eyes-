var slider = document.getElementById("Range");
var colorValue = document.getElementById("color");
var fullPage = document.getElementById("fullPage");
var start = document.getElementById("Start");

const colors = [
  ["#ffffe6", "#000000", "Paperback"],
  ["#8C0000", "#DFFFF7", "F.Lux"],
  ["#000000", "#DFFFF7", "Pitch Black"]
];

let currentColor = colors[1];

colorValue.innerHTML = currentColor[2]; // Display the default slider value

colorValue.style.color = currentColor[0];

let params = {
  active: true,
  currentWindow: true
};


slider.oninput = function() {
  currentColor = colors[this.value - 1];
  colorValue.style.color = currentColor[0];
  colorValue.innerHTML = currentColor[2];
};

start.onclick = function() {
  chrome.tabs.query(params, gotTab);
  function gotTab(tab) {
    chrome.tabs.sendMessage(tab[0].id, {
      color: currentColor,
      allPage: false,
      check: true
    });
  }
};

fullPage.onclick = function() {
  chrome.tabs.query(params, gotTab);
  function gotTab(tab) {
    chrome.tabs.sendMessage(tab[0].id, {
      color: currentColor,
      allPage: true,
      check: false
    });
  }
};
