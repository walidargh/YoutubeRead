function styleComments() {
	var comments = document.getElementById("watch-discussion");
	comments.style.height = "88vh";
	comments.style.width = "39vw";
	comments.style.marginTop = "10px";
	comments.style.overflowY = "scroll";
	comments.style.overflowX = "hidden";
	comments.style.position = defaultVideoView ? "fixed" : "relative";
	comments.style.marginTop = defaultVideoView ? "10px" : "0px";
	commentLoader = comments.addEventListener("scroll", loadMoreComments);
}

function loadMoreComments(event) {
	if (detectLoadMoreComments) {
		var loadButton = 
			document.getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-default load-more-button yt-uix-load-more comment-section-renderer-paginator yt-uix-sessionlink")[0];
		loadButton.click();
	}
}

function styleSidebar() {
	var sidebar = document.getElementById("watch7-sidebar-contents");
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
	inReadMode = !inReadMode;
	chrome.storage.sync.set({'inReadMode': inReadMode}, function (obj) {console.log(obj)})
	if (inReadMode) {
		styleComments();
		styleSidebar();
	} else {
		undoStyling();
	}
}

function undoStyling() {
	var sidebar = document.getElementById("watch7-sidebar-contents");
	var comments = document.getElementById("watch-discussion");

	comments.style.height = "";
	comments.style.width = "";
	comments.style.overflowY = "";
	comments.style.overflowX = "";
	comments.style.position = "";
	comments.style.marginTop = "";
	sidebar.style.padding = "";
	comments.removeEventListener("scroll", commentLoader);
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
	if (defaultVideoView  && inReadMode) {
		comments.style.position = "fixed";
		comments.style.marginTop = "10px";
	} else {
		comments.style.position = "relative";
		comments.style.marginTop = "0px";
	} 
}

function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) };
}

var button;
var defaultVideoView;
var commentLoader;
var inReadMode;

document.addEventListener("spfdone", function () {
	chrome.storage.sync.get('inReadMode', function(result) {inReadMode = result.inReadMode});
	inReadMode = inReadMode === undefined ? false : inReadMode
	chrome.storage.sync.set({'inReadMode': inReadMode}, function (obj) {console.log(obj)})
	button = document.getElementsByClassName("ytp-size-button ytp-button")[0];
	var comments = document.getElementById("watch-discussion");
	var sidebar = document.getElementById("watch7-sidebar-contents");
	button.addEventListener("click", toggleView);
	defaultVideoView = button.title === "Default view" ? false : true;
	if (!inReadMode) {swapElements(comments, sidebar);}
});

document.addEventListener("scroll", function () {
	var player = document.getElementById("theater-background");
	var comments = document.getElementById("watch-discussion");
	var commentsRect = comments.getBoundingClientRect();
	var playerRect = player.getBoundingClientRect();
	var commentsOffSet = player.offsetHeight + 60;
	var footer = document.getElementById("footer");
	var footerRect = footer.getBoundingClientRect();
	if (inReadMode && !defaultVideoView) {
		if (playerRect.bottom < 50 && footerRect.top > 630) {
			comments.style.top = "0";
			comments.style.marginTop = "60px";
			comments.style.position = "fixed";
		} else if (footerRect.top <= 630) {
			comments.style.top = String(getCoords(comments).top - commentsOffSet) + "px";
			comments.style.marginTop = "0";
			comments.style.position = "absolute";
		} else {
			comments.style.top = "";
			comments.style.marginTop = "0";
			comments.style.position = "absolute";
		}
	} 
});


chrome.runtime.onMessage.addListener( function(request, sender, senderResponse) {
	var comments = document.getElementById("watch-discussion");
	var sidebar = document.getElementById("watch7-sidebar-contents");
	if (request.action === "toggleSwap") {
		swapElements(comments, sidebar);
		senderResponse({swap: "successful"});
	}
});


// TODO: fix issue comment section moving in theater mode
/* Change comment section position to static in theater mode*/
