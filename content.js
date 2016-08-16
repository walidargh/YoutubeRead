function moveCommentSection() {
	console.log('moving stuff');
	var comments = document.getElementById("watch-discussion");
	var sidebar = document.getElementById("watch7-sidebar-contents");
	sidebar.insertBefore(comments, sidebar.firstChild);
}

function swapCommentsAndVideos() {
	console.log('swapping stuff');
	var comments = document.getElementById("comment-section-renderer");
	var relatedVideos = document.getElementById("watch7-sidebar-modules");
	var commentsParent = document.getElementById("watch-discussion");
	var relatedVideosParent = document.getElementById("watch7-sidebar-contents");
	relatedVideosParent.insertBefore(comments, relatedVideosParent.firstChild);
	commentsParent.insertBefore(relatedVideos, commentsParent.firstChild);
}

function swap() {
	console.log('swapping');
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
	// sidebarHead.style.position = "relative";
	// var autoPlayButton = document.getElementsByClassName("checkbox-on-off")[0];
	// autoPlayButton.style.padding = "10px";
}

document.addEventListener("spfdone", swap);
swap();
