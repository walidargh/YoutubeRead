var currentSideBar = "relatedVideos";

function swapCommentsAndVideos() {
	var comments = document.getElementById("watch-discussion");
	var sidebar = document.getElementById("watch7-sidebar-contents");
	var commentsParent = comments.parentElement;
	var sidebarParent = sidebar.parentElement;
	commentsParent.appendChild(sidebar);
	sidebarParent.insertBefore(comments, sidebarParent.firstChild);
	styleComments(comments);
	styleSidebar(sidebar);
	currentSideBar = "comments";
}

function styleComments(comments) {
	comments.style.height = "88vh";
	comments.style.width = "39vw";
	comments.style.overflowY = "scroll";
	comments.style.overflowX = "hidden";
	comments.style.position = defaultVideoView ? "fixed" : "relative";
	comments.style.marginTop = defaultVideoView ? "10px" : "0px";
}

function styleSidebar(sidebar) {
	sidebar.style.padding = "10px";
	var sidebarHead = document.getElementsByClassName("watch-sidebar-head")[0];
	sidebarHead.style.padding = "0px 0px 10px 5px";
	var autoPlayBar = document.getElementsByClassName("autoplay-bar")[0];
	autoPlayBar.style.position = "relative";
}

function undoSwap() {
	var comments = document.getElementById("watch-discussion");
	var sidebar = document.getElementById("watch7-sidebar-contents");
	var commentsParent = comments.parentElement;
	var sidebarParent = sidebar.parentElement;
	sidebarParent.appendChild(comments);
	commentsParent.insertBefore(sidebar, commentsParent.firstChild);
	undoStyling(comments, sidebar);
	currentSideBar = "relatedVideos";
}

function undoStyling(comments, sidebar) {
	comments.style.height = "";
	comments.style.width = "";
	comments.style.overflowY = "";
	comments.style.overflowX = "";
	comments.style.position = "";
	comments.style.marginTop = "";
	sidebar.style.padding = "";
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


var button = document.getElementsByClassName("ytp-size-button ytp-button")[0];
var defaultVideoView = button.title === "Default view" ? false : true;
button.addEventListener("click", toggleView);
document.addEventListener("spfdone", swapCommentsAndVideos);
swapCommentsAndVideos();

chrome.runtime.onMessage.addListener( function(request, sender, senderResponse) {
	if (request.action === "toggleSwap") {
		if (currentSideBar === "comments") {
			undoSwap();	
		} else {
			swapCommentsAndVideos();
		}
	}
});


// TODO: fix issue comment section moving in theater mode
/* Change comment section position to static in theater mode*/
