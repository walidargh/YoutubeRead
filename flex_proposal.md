# YouTube Read
## Minimum Viable Product
YouTube Read is a chrome extension the allows users to simulataneously watch youtube videos and browse the comment section. It will be built using JavaScript, CSS, and HTML5, and will satisfy the following criteria: 
 -[ ] Moves comment section to the right of the video when in standard view mode (unless comments are disabled)
 -[ ] Moves suggested videos to below the comments and video section
 -[ ] Will highlight comments corresponding to a video timestamp (based on video upvotes)
 -[ ] Possible: Infinite Scroll for Comments
## Design Docs
* [Wireframes][views]
[views]: ./views.md

## Implementation Timeline
### Phase 1: Page and Comment Detection (1 day)
**Objective**: Be able to detect when a user is on a page with a youtube video playing
- [ ] Detect if user is on a video by checking URL for "watch=?v" or "/v/"
- [ ] Detect if video allows for comments
### Phase 2: Rearrange Comment Section and Suggested Videos (2 days)
**Objective**: Be able to grab DOM element that contains comment section and suggested videos section
- [ ] Search DOM for element by className corresponding to comment section and suggested videos
- [ ] Change CSS styling of those elements (using POJ not jQuery) to swap their positions
- [ ] Add Toggle Button that allows users to move elements back to their original positions
### Phase 3: Extend Functionality to Account for AutoPlay (2 days)
**Objective**: Ensure that there is a detection for video updates that will maintain positions of comment and suggested video sections
- [ ] Add listener for video player that will detect changes to video being played
- [ ] Rerun rearranger method to return DOM elements to desired positions
### Phase 4: Highlight Comments with Video Timestamps (3 days)
**Objective**: Search loaded comments for video timestamps (within a 10 second range) and display each comment for a duration corresponding to the number of characters in the comment
- [ ] Create a hashmap of time ranges (0:00 - 0:09, 0:10 - 0:19, etc.) with key being time and corresponding value being comment
- [ ] Use setInterval to get update corresponding comments every 10 seconds
- [ ] Allow users to disable functionality
- [ ] On video pause, stop setInterval
### Phase 5: Styling (1 day)
**Objective**: Implement smooth animations and clean styling
- [ ] Animation for comment highlighting 
- [ ] Apply CSS styling to rearrange how suggested videos are displayed

## Bonus: other comment filtering options/search
- [ ] Implement additional filtering options
- [ ] Filter by user (both in initial comment and replies)
- [ ] Search by topic
- [ ] Search for comments with timestamps
