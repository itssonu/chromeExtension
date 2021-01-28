$(function () {
  var currentURL;

  $("#redirect").click(function () {
    // alert("bdch");
    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      function (tabs) {
        getCurrentURL(tabs[0].url);
        // confirm(currentURL);
        if (confirm(currentURL)) {
          var url = "https://web.whatsapp.com/";
          chrome.tabs.create({ active: true, url: url });
        } else {
          // alert("no");
          console.log("canceled confirm box");
        }
      }
    );

    function getCurrentURL(tab) {
      currentURL = tab;
    }
  });

  fetchResolution();

  chrome.windows.onBoundsChanged.addListener(function () {
    fetchResolution();
  });

  function fetchResolution() {
    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      function (tabs) {
        console.log(tabs[0]);
        var height = tabs[0].height;
        var width = tabs[0].width;
        var currentURL = tabs[0].url;
        printResolution(width, height);
        // alertUrl(currentURL);
      }
    );
  }

  function printResolution(width, height) {
    var x = "Screen Resolution: " + width + "*" + height + "px";
    document.getElementById("screen").innerHTML = x;
  }

  // click event start

  // chrome.tabs.executeScript(
  //   {
  //     // allFrames: true,
  //     file: "windowscript.js",
  //   },
  //   function (result) {
  //     // alert(result);
  //     console.log(result);
  //   }
  // );

  // click event end
});
