function styleComments() {
	comments.style.height = "88vh";
	comments.style.width = "39vw";
	comments.style.marginTop = "10px";
	comments.style.overflowY = "scroll";
	comments.style.overflowX = "hidden";
	comments.style.position = defaultVideoView ? "fixed" : "relative";
	comments.style.marginTop = defaultVideoView ? "10px" : "0px";
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


function swapElements(elementA, elementB) {
	var parentA = elementA.parentElement;
	var parentB = elementB.parentElement;
	var aSibling = elementA.nextElementSibling;
	var bSibling = elementB.nextElementSibling;
	parentA.insertBefore(elementB, aSibling);
	parentB.insertBefore(elementA, bSibling);
	currentSideBar = 
		currentSideBar === "comments" ? "relatedVideos" : "comments";
	if (currentSideBar === "comments") {
		styleComments();
		styleSidebar();
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
		swapElements(comments, sidebar);
	}
});



// TODO: fix issue comment section moving in theater mode
/* Change comment section position to static in theater mode*/
