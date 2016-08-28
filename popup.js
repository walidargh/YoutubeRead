function toggleCommentAndVideoSwap() {
	var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
  	var tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, {action: "toggleSwap"}, function (response) {
      if (response) {
      var toggleSwitch = document.getElementById("switch");
      var slider = document.getElementById("slider");

      if (toggleSwitch.classList.contains("active-switch")) {
        toggleSwitch.classList.remove("active-switch");
        slider.classList.remove("active-slider");
        toggleSwitch.classList.add("inactive-switch");
        slider.classList.add("inactive-slider");
      } else {
          toggleSwitch.classList.remove("inactive-switch");
          slider.classList.remove("inactive-slider");
          toggleSwitch.classList.add("active-switch");
          slider.classList.add("active-slider");
        }
      }
    });
  });
}

// function getSidebarState() {
//   var queryInfo = {
//     active: true,
//     currentWindow: true
//   };
//   chrome.tabs.query(queryInfo, function(tabs) {
//     var tab = tabs[0];
//     chrome.tabs.sendMessage(tab.id, {commentSidebar: true}, function (response) {
//       debugger
//       commentSidebar = response.commentSidebar;
//       console.log(commentSidebar);
//     });
//   });
// }

document.addEventListener("DOMContentLoaded", function() {
  var inReadMode
  chrome.storage.sync.get('inReadMode', function(result) {inReadMode = result.inReadMode});
  var toggleSwitch = document.getElementById("switch");
  toggleSwitch.addEventListener("click", function () {
    chrome.storage.sync.set({'inReadMode': !inReadMode}, function (obj) {console.log(obj)})
    toggleCommentAndVideoSwap();
  });
});