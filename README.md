# touch-grass

HOTH 9 submission by Jeffrey Kwan and Ming Zhu

## Intro
Social media can be a draining battlefield. Sometimes, you get sucked so deep into it that you often don't realize - maybe it's time to take a break, touch some grass perhaps. 

Our goal, in creating this Chrome extension, is to facilitate your awakening from your slumber in the bottomless rabbit hole that is social media. 

It's time, User. Time to wake up. Time to go touch some grass.

## Usage
After cloning the repo, open up your Chrome's extension page and check Developer mode. There should now be a toolbar with the "Load Unpacked" option. Click that and select the src folder as the path to load the extension. 

This extension currently works with Instagram, Twitter, and Facebook. If you want some more functionality, feel free to edit the `manifest.json` file and reload the package, at your own risk. 

## Project Design 
We made a chrome plugin that does something every time you go on a social media, after a certain period of time (shortened for demonstration), ducks/geese start floating around on your screen

And you can click them away

But they’ll keep spewing

Yeah...

We haven’t figured out how to stop them yet, but the goal is after a certain of interval of time, the onslaught pauses

Generally the idea is that when ducks start spawning, it is a reminder to unplug and destress.

## Challenges 
Believe it or not, spending 12 hours to make a massive s--tpost is harder than it looks. We were a two-person team learning as we developed. Many chrome extensions and javascript APIs were asynchronously implemented without much warning, and the web console is not the most descriptive with error messages. One sech plugin was chrome.runtime's message system, which we took around 4 hours to implement to no avail. JQuery also decided to not work for the most part..., and overlaying displays on top of other people's websites was not as easy as it seems.

## Potential Next Steps

- Actually implement the touching grass portion by using a supervised learning model to verify images of the user touching grass

- Make a mobile endpoint to verify grass touching

If you made it this far, know that we made this project with care and love (or at least attempted to). Thanks for sticking around! Remember to touch grass every so often :)
