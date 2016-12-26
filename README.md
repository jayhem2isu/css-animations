# css-animations
A few web animations made with css, javascript and jquery
#Some Css Hacks

These are a few web animations made with css, javascript and jquery.
#Shake Animation
This animation causes the element to vibrate around it's position on hover. It's great for buttons and clickable elements.
The code is all in css so all you have to do is link the shake.css file to your html file and use the classname 'shake' for the element
you want to affect.

#Slide Animation
Uses scroll to identify when a div is scrolled into view and scrolls the content in from the left. The event listens for when the div
is fully in display and pushes the content in. Link the slide.css to your html page and set the id of the element as 'inactive" then
link the js to the bottom of body or manually add the code in a script tag. Set the class of the hosting div to 'detect' and you
are good to go.

#Change Animation
Change iterates throught a number of elements and displays them in turn; fading each element in and out at time intervals. Set the 
class of the element to 'changes', link the css and js files to your html page. We are good to go.

#Fade Animation
It fades in an element when it is scrolled into the viewport. Link the css and js files to your html page; set the class of your 
fade element to 'fade' and the class of the element directly above it to 'detect'. This should work.

All but the shake animation are dependent on jquery so link that to the page as well. 
