function moveCommentSection() {
	var comments = document.getElementById("watch-discussion");
	var sidebar = document.getElementById("watch7-sidebar-contents");
	sidebar.insertBefore(comments, sidebar.firstChild);
}

// function swapCommentsAndVideos() {
// 	var comments = document.getElementById("comment-section-renderer");
// 	var relatedVideos = document.getElementById("watch7-sidebar-modules");
// 	var commentsParent = document.getElementById("watch-discussion");
// 	var relatedVideosParent = document.getElementById("watch7-sidebar-contents");
// 	relatedVideosParent.insertBefore(comments, relatedVideosParent.firstChild);
// 	commentsParent.insertBefore(relatedVideos, commentsParent.firstChild);
// }

function swapCommentsAndVideos() {
	var comments = document.getElementById("watch-discussion");
	var sidebar = document.getElementById("watch7-sidebar-contents");
	var commentsParent = comments.parentElement;
	var sidebarParent = sidebar.parentElement;
	commentsParent.appendChild(sidebar);
	sidebarParent.insertBefore(comments, sidebarParent.firstChild);
	comments.style.height = "88vh";
	comments.style.width = "39vw";
	comments.style.overflowY = "scroll";
	comments.style.overflowX = "hidden";
	comments.style.position = "fixed";
	comments.style.marginTop = "10px";
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



document.addEventListener("spfdone", swapCommentsAndVideos);
swapCommentsAndVideos();

chrome.runtime.onMessage.addListener(function (request, sender, senderResponse) {
	console.log("hello");
	console.log("the message has been received" + senderResponse);
});

// TODO: fix issue comment section moving in theater mode
/* Change comment section position to static in theater mode*/
