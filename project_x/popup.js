$(function () {
  $("#screenResolution").click(function () {
    // chrome.tabs.query(
    //   { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
    //   function (tabs) {
    //     console.log(tabs[0]);
    //     var height = tabs[0].height;
    //     var width = tabs[0].width;
    //     printResolution(width, height);
    //   }
    // );
  });
  $("#2").click(function () {
    // chrome.windows.create(
    //   {
    //     focused: true,
    //     // incognito: true,
    //     url: "https://github.com/GoogleChrome/chrome-extensions-samples",
    //   },
    //   function (window) {
    //     console.log("created");
    //   }
    // );
    // chrome.windows.get(chrome.windows.WINDOW_ID_CURRENT, function (window) {
    //   console.log(window);
    // });
    // chrome.windows.getAll(function (window) {
    //   console.log(window);
    // });
  });

  chrome.windows.onBoundsChanged.addListener(function () {
    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      function (tabs) {
        // console.log(tabs[0]);
        var height = tabs[0].height;
        var width = tabs[0].width;
        printResolution(width, height);
      }
    );
  });

  function printResolution(width, height) {
    var x = "Screen Resolution: " + width + "*" + height + "px";
    document.getElementById("screen").innerHTML = x;
  }
});
