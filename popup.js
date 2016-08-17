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



// document.addEventListener("DOMContentLoaded", function () {
// 	var func = function () { console.log(document.title); };
// 	chrome.tabs.executeScript({
// 		code: 'var comments = document.getElementById("watch-discussion"); var sidebar = document.getElementById("watch7-sidebar-contents"); sidebar.insertBefore(comments, sidebar.firstChild);'
// 	});
// });
document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById("root");
  root.addEventListener("click", toggleCommentAndVideoSwap);
})

