$(function () {
  console.log("plugin is running .....");

  //   get current url start
  var currentURL;

  chrome.tabs.query(
    { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
    function (tabs) {
      getCurrentURL(tabs[0].url);
    }
  );

  function getCurrentURL(tab) {
    currentURL = tab;
  }
  //   get current url end

  $("#show_url").click(function () {
    alert(currentURL);
  });
});
