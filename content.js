function moveCommentSection() {
	var comments = document.getElementById("watch-discussion");
	var sidebar = document.getElementById("watch7-sidebar-contents");
	sidebar.insertBefore(comments, sidebar.firstChild);
}

function swapCommentsAndVideos() {
	var comments = document.getElementById("watch-discussion");
	var sidebar = document.getElementById("watch7-sidebar-contents");
	var commentsParent = comments.parentNode;
	var commentsSibling = 
		comments.nextSibling === sidebar ? comments : comments.nextSibling;
	sidebar.parentNode.insertBefore(comments, sidebar);
	commentsParent.insertBefore(sidebar, commentsSibling);
}
document.addEventListener("DOMContentLoaded", function () {
	// moveCommentSection();
	swapCommentsAndVideos();
});

