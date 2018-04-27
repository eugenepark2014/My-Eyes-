var slider = document.getElementById("Range");
var output = document.getElementById("color");
output.innerHTML = slider.value; // Display the default slider value
const colors = ["#97CF72", "#FF0000", "#000000"];

slider.oninput = function() {
  console.log(colors[this.value - 1]);
  output.style.color = colors[this.value - 1];
  output.innerHTML = this.value;
};

function click() {
  chrome.tabs.executeScript(null, {
    code: `document.body.style.backgroundColor=${colors[this.value - 1]}`
  });
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    for(var i = 0; i<divs.length; i++){
        divs[i].addEventListener('click', click);
    }
});
