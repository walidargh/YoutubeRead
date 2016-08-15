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
	var comments = document.getElementById("watch-discussion");
	var sidebar = document.getElementById("watch7-sidebar-contents");
	var commentsParent = comments.parentElement
	var sidebarParents = sidebar.parentElement
	commentsParent.appendChild(sidebar)
	sidebarParents.insertBefore(comments, sidebarParents.firstChild)
}
document.addEventListener("DOMContentLoaded", function () {
	// swapCommentsAndVideos();
	console.log('hello');
});

swapCommentsAndVideos();
// moveCommentSection();
