# YouTube Read
[Chrome Web Store][live]

[live]:https://chrome.google.com/webstore/detail/youtube-read/clkagagdbmhalkhdfoiahbgdgepijhfg

YouTube Read is a chrome extension the allows users to simulataneously watch youtube videos and browse the comment section. It is  built using JavaScript, CSS, and HTML.

[demo]: ./read_demo.gif

![demo]
## Page Detection

YouTube Read detects the player viewing mode, tracks the position of the comment section, and detects YouTube spf events to ensure that the viewing experience remains consistent.

## Content and Popup

The content script performes DOM manipulations when an spf event has completed. The popup offers a button which allows users to quickly toggle the "Reading" mode. This is done using the chrome.tabs.query and chrome.tabs.onMessage API to communicate betweeen the content and popup scripts.

```javascript
chrome.runtime.onMessage.addListener( function(request, sender, senderResponse) {
    var comments = document.getElementById("watch-discussion");
    var sidebar = document.getElementById("watch7-sidebar-contents");
    if (request.action === "toggleSwap") {
        swapElements(comments, sidebar);
        senderResponse({swap: "successful"});
    }
});
```

## Future Plans

### Timestamp Highlight

Using YouTube's comment API, I will identify comments with timestamps in them and create a hashmap of time ranges (0:00 - 0:09, 0:10 - 0:19, etc.) with key being time and corresponding value being comment. These comments will be highlighted when the video reaches a time corresponding to the timestamp.