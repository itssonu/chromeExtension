var coords = 0;
var a = [];

window.addEventListener("click", showCoords, true);
console.log("clicked 1");

function showCoords(event) {
  console.log("clicked 2");
  var x = event.clientX;
  var y = event.clientY;
  var coords = "Custom Screen Resolution: " + x + "*" + y + "px";
  // alert(coords);
  // return coords;
  // console.log(coords);
  doSomethingWithCoords(coords);
}

function doSomethingWithCoords(coords) {
  a;
}
coords;
