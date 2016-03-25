# TIY-Etsy
Let's Get Etsy-ing!


## Day 3-25

Greg's project manager, Dennis and Mike are continuing to be awesome.

### Issues:

- some CSS styling is breaking, now that we're adding some of the angular functionality into the site.
   - I'm looking at you, ng-show
- Our JSON file is very large - traversing this is a serious business.

- The price is weird:

   - we can't float right until we can make the whole div span the card container
   - width: 100%; should work, but it's not.
   - justify-content: space-between; should work as well, but once again - it needs to have the width span the length of the card.
   - we may need to do something with the position (position: relative;?)
   - text-align: justify; is a thing. Is it a viable thing? Maybe??
