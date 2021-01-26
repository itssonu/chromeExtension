$(function () {
  fetchResolution();
  // $("#screenResolution").click(function () {
  //   fetchResolution();
  // });
  // $("#2").click(function () {
  //   // chrome.windows.create(
  //   //   {
  //   //     focused: true,
  //   //     // incognito: true,
  //   //     url: "https://github.com/GoogleChrome/chrome-extensions-samples",
  //   //   },
  //   //   function (window) {
  //   //     console.log("created");
  //   //   }
  //   // );
  //   // chrome.windows.get(chrome.windows.WINDOW_ID_CURRENT, function (window) {
  //   //   console.log(window);
  //   // });
  //   // chrome.windows.getAll(function (window) {
  //   //   console.log(window);
  //   // });
  // });

  chrome.windows.onBoundsChanged.addListener(function () {
    fetchResolution();
  });

  // chrome.tabs.executeScript(
  //   {
  //     code: "(" + showCoords + ")();", //argument here is a string but function.toString() returns function's code
  //   },
  //   function (event) {
  //     console.log("scripte executed");
  //   }
  // );
  // function xax() {
  //   window.addEventListener("click", function (event) {
  //     var x = event.clientX;
  //     var y = event.clientY;
  //     var coords = "X coords: " + x + ", Y coords: " + y;
  //     document.getElementById("demo").innerHTML = coords;
  //     console.log(coords);
  //   });
  // }

  // chrome.tabs.query(
  //   { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
  //   function (tabs) {
  //     window.addEventListener("click", function (event) {
  //       var x = event.clientX;
  //       var y = event.clientY;
  //       var coords = "X coords: " + x + ", Y coords: " + y;
  //       document.getElementById("demo").innerHTML = coords;
  //       alert(coords);
  //       console.log(coords);
  //     });
  //   }
  // );

  function fetchResolution() {
    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      function (tabs) {
        console.log(tabs[0]);
        var height = tabs[0].height;
        var width = tabs[0].width;
        printResolution(width, height);
      }
    );
  }

  function printResolution(width, height) {
    var x = "Screen Resolution: " + width + "*" + height + "px";
    document.getElementById("screen").innerHTML = x;
  }

  // click event start

  chrome.tabs.executeScript(
    {
      // allFrames: true,
      file: "windowscript.js",
    },
    function (result) {
      // alert(result);
      console.log(result[0]);
    }
  );
  // chrome.tabs.executeScript(
  //   null,
  //   {
  //     code: "let foo='my result'; foo;",
  //   },
  //   function (results) {
  //     console.log(results);
  //   }
  // );

  function receiveText(resultsArray) {
    console.log(resultsArray[0]);
  }

  // click event end

  // window.addEventListener("click", function(event) {
  // });
});
