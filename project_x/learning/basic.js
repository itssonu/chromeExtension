let GetURL = document.getElementById("GetURL");
GetURL.onclick = function (element) {
  getCurrentTabUrl();
};
document.getElementById("getText").onclick = function (element) {
  chrome.tabs.executeScript(
    {
      code: "window.getSelection().toString();",
    },
    function (selection) {
      document.getElementById("selectedtext").innerHTML = selection[0];
    }
  );
};
function modifyDOM() {
  //You can play with your DOM here or check URL against your regex
  console.log("Tab script:");
  console.log(document.body);
  document.body.style.background = "blue";
  return true;
}
document.getElementById("colorChange").onclick = function (element) {
  chrome.tabs.executeScript(
    {
      code: "(" + modifyDOM + ")();", //argument here is a string but function.toString() returns function's code
    },
    function (selection) {
      alert(selection);
    }
  );
};
function getCurrentTabUrl() {
  var queryInfo = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    document.getElementById("url").innerHTML = url;
  });
}
