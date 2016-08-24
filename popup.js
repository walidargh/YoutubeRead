function toggleCommentAndVideoSwap() {
  console.log('we are in the toggle');
	var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
  	var tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, {action: "toggleSwap"});
  });
}

function moveCommentSection() {
	var comments = document.getElementById("watch-discussion");
	var sidebar = document.getElementById("watch7-sidebar-contents");
	sidebar.insertBefore(comments, sidebar.firstChild);
}


document.addEventListener("DOMContentLoaded", function() {
  var toggleSwitch = document.getElementById("switch");
  var slider = document.getElementById("slider");
  toggleSwitch.addEventListener("click", function () {
    toggleCommentAndVideoSwap();
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
  });
});

