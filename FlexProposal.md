# YouTube Read
## Minimum Viable Product
YouTube Read is a chrome extension the allows users to simulataneously watch youtube videos and browse the comment section. It will be built using JavaScript, CSS, and HTML5, and will satisfy the following criteria: 
 -[ ] Moves comment section to the right of the video when in standard view mode (unless comments are disabled)
 -[ ] Moves suggested videos to below the comments and video section
 -[ ] Will highlight comments corresponding to a video timestamp (based on video upvotes)
 -[ ]
 -[ ] Possible: Infinite Scroll for Comments
## Design Docs
## Implementation Timeline
### Phase 1: Page and Comment Detection
Objective: Be able to detect when a user is on a page with a youtube video playing
- [ ] Detect if user is on a video by checking URL for "watch=?v" or "/v/"
- [ ] Detect if video allows for comments
### Phase 2: Rearrange Comment Section and Suggested Videos
Objective: Be able to grab DOM element that contains comment section and suggested videos section
- [ ] Search DOM for element by className corresponding to comment section and suggested videos
- [ ] Change CSS styling of those elements (using POJ not jQuery) to swap their positions
- [ ] Add Toggle Button that allows users to move elements back to their original positions
### Phase 3: Extend Functionality to Account for AutoPlay
Objectives: Ensure that there is a detection for video updates that will maintain positions of comment and suggested video sections
- [ ] Add listener for video player that will detect changes to video being played
- [ ] Rerun rearranger method to return DOM elements to desired positions
- [ ] 

