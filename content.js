function moveCommentSection() {
	console.log('moving stuff');
	debugger
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
	comments.style.height = "100vh";
	comments.style.overflowY = "scroll";
	comments.style.overflowX = "hidden";
	// sidebarParent.style.overflow-y = "scroll";
	// sidebarParent.style.overflow-x = "hidden";
}
document.addEventListener("DOMContentLoaded", function () {
	// swapCommentsAndVideos();
	console.log('hello');
});

window.onload = function () {
	swap();
}
// swapCommentsAndVideos();
// moveCommentSection();
swap();
