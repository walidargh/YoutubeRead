chrome.extensions.onRequest.addListener(function (request, sender, sendResponse) {
	if (request.action == "getDOM") {
		var comments = document.getElementById("watch-discussion");
		var sidebar = document.getElementById("watch7-sidebar-contents");
		sendResponse({
			comments: comments,
			sidebar: sidebar 
		});
	} else {
		sendResponse({});
	}
});