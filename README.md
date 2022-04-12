# Picture-in-Picture
This is a java Script project which made it possible for user to pop a video out into a small floating window that stays above all others.
# Screen capture API
The screen capture API method used is: navigator.MediaDevices.getDisplayMedia().<br/>
THis method prompt the user to select the screen for sharing.
# Request picture-in-picture
After the screen is selected, the next step is to press the start button to start picture-in-picture.
When button is clicked, requestPictureInPicture method is called on video Element which pop a video out in the bottom right corner of the window.
The user can select this window and place it anywhere he/she wants.
