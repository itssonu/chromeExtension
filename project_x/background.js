chrome.runtime.onInstalled.addListener(function () {
  window.addEventListener("click", function (event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
    alert(coords);
    console.log(coords);
  });
});
