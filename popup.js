function getTabUrl(callback) {
	var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
  	var tab = tabs[0];
  	var url = tab.url;
  	console.assert(typeof url == 'string', 'tab.url should be a string');

  	callback(url);
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
