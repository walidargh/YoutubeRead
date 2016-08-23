// function moveCommentSection() {
// 	var comments = document.getElementById("watch-discussion");
// 	var sidebar = document.getElementById("watch7-sidebar-contents");
// 	sidebar.insertBefore(comments, sidebar.firstChild);
// }

// function swapCommentsAndVideos() {
// 	var comments = document.getElementById("watch-discussion");
// 	var sidebar = document.getElementById("watch7-sidebar-contents");
// 	var commentsParent = comments.parentElement;
// 	var sidebarParent = sidebar.parentElement;
// 	commentsParent.appendChild(sidebar);
// 	sidebarParent.insertBefore(comments, sidebarParent.firstChild);
// 	styleComments(comments);
// 	styleSidebar(sidebar);
// 	currentSideBar = "comments";
// }

function styleComments() {
	comments.style.height = "88vh";
	// comments.style.width = "39vw";
	comments.style.overflowY = "scroll";
	comments.style.overflowX = "hidden";
	comments.style.position = defaultVideoView ? "fixed" : "relative";
	comments.addEventListener("scroll", loadMoreComments);
}

function loadMoreComments(event) {
	if (detectLoadMoreComments) {
		var loadButton = document.getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-default load-more-button yt-uix-load-more comment-section-renderer-paginator yt-uix-sessionlink")[0];
		loadButton.click();
	}
}

function styleSidebar() {
	sidebar.style.padding = "10px";
	var sidebarHead = document.getElementsByClassName("watch-sidebar-head")[0];
	sidebarHead.style.padding = "0px 0px 10px 5px";
	var autoPlayBar = document.getElementsByClassName("autoplay-bar")[0];
	autoPlayBar.style.position = "relative";
}

// function undoSwap() {
// 	var comments = document.getElementById("watch-discussion");
// 	var sidebar = document.getElementById("watch7-sidebar-contents");
// 	var commentsParent = comments.parentElement;
// 	var sidebarParent = sidebar.parentElement;
// 	sidebarParent.appendChild(comments);
// 	commentsParent.insertBefore(sidebar, commentsParent.firstChild);
// 	undoStyling(comments, sidebar);
// 	currentSideBar = "relatedVideos";
// }

function swapElements(elementA, elementB) {
	var parentA = elementA.parentElement;
	var parentB = elementB.parentElement;
	var aSibling = elementA.nextElementSibling;
	var bSibling = elementB.nextElementSibling;
	parentA.insertBefore(elementB, aSibling);
	parentB.insertBefore(elementA, bSibling);
	currentSideBar = 
		currentSideBar === "comments" ? "relatedVideos" : "comments";
	debugger
	if (currentSideBar === "comments") {
		styleSidebar();
		styleComments();
	} else {
		undoStyling();
	}
}

function undoStyling() {
	comments.style.height = "";
	comments.style.width = "";
	comments.style.overflowY = "";
	comments.style.overflowX = "";
	comments.style.position = "";
	comments.style.marginTop = "";
	sidebar.style.padding = "";
	var sidebarHead = document.getElementsByClassName("watch-sidebar-head")[0];
	sidebarHead.style.margin = "0px";
}


function detectLoadMoreComments() {
	var comments = document.getElementById("watch-discussion");
	comments.scrollTop >= (comments.scrollHeight - comments.offsetHeight - 10);
}

function toggleView() {
	var comments = document.getElementById("watch-discussion");
	defaultVideoView = !defaultVideoView;
	if (defaultVideoView) {
		comments.style.position = "fixed";
	} else {
		comments.style.position = "relative";
	} 
}

var currentSideBar = "relatedVideos";
var button;
var defaultVideoView;
var comments;
var sidebar;

document.addEventListener("spfdone", function () {
	button = null;
	button = document.getElementsByClassName("ytp-size-button ytp-button")[0];
	comments = document.getElementById("watch-discussion");
	sidebar = document.getElementById("watch7-sidebar-contents");
	button.addEventListener("click", toggleView);
	defaultVideoView = button.title === "Default view" ? false : true;
	swapElements(comments, sidebar);
});


chrome.runtime.onMessage.addListener( function(request, sender, senderResponse) {
	comments = document.getElementById("watch-discussion");
	sidebar = document.getElementById("watch7-sidebar-contents");
	if (request.action === "toggleSwap") {
		if (currentSideBar === "comments") {
			swapElements(sidebar, comments);
			undoStyling(comments, sidebar);
		} else {
			swapElements(sidebar, comments);
			styleSidebar(sidebar);
			styleComments(comments);
		}
	}
});



// TODO: fix issue comment section moving in theater mode
/* Change comment section position to static in theater mode*/
