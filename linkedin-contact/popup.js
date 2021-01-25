$(function () {
  console.log("plugin is running .....");

  // Resources1× 0.5× 0.25×Rerun

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
  // http://dev.01s.in/medit/public/api/state_list
  $("#login").click(function () {
    // axios
    //   .get("http://dev.01s.in/linkedin-contact/login.php")
    //   .then(function (response) {
    //     // alert();
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     alert("no");
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // alert("allways");
    //     // always executed
    //   });

    var url = "http://dev.01s.in/linkedin-contact/login.php";

    $accessToken =
      "AQUMOXhjEBkpv7r7ue09PpKii5j27wJ5KzOqDx2ej9T-xZM_tdz6woCK6fI_VnvhtRlngKGbpAtB4qRUc-Hp-Jdr9hxazbInkTCDycBz_aEhcSuXoQVaLwn3Noy3apQqmIngdVIuOu0I4_cZbeMuXgmFU30yladN_hamYq433gPq3pfr3l4YKEuoe-GQtI4_rmrhLGqVYVn1xHA-HlXmapPw9AMBul0Xv978-hEyHnTUg0TxkXamH_1NhswHpBvCseLgCq75OiZLC_hZOce_-JuRUpzigzJJ_U45uxtLEaRGb4flxmQ1nricK4cnGMsmPoKNkxaS43fCZYL3TP9PtjQP6HxKAw";

    var config = {
      method: "get",
      url: "https://api.linkedin.com/v2/me",
      headers: {
        Authorization: "Bearer " + $accessToken + "",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var result = response.data;
        alert(result.localizedLastName);
        // alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  });
});
