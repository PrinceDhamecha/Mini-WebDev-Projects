// document reference id linking and declaration of variable in js  
let playbutton = document.getElementById('btn-play');
let music1 = document.getElementById('music1');
let music2 = document.getElementById('music2');
let music3 = document.getElementById('music3');
let music4 = document.getElementById('music4');
let previousbutton = document.getElementById('btn-previous');
let nextbutton = document.getElementById('btn-next');
let pause = document.getElementById('pause');

// array of songs , with values (variables) declared above
let songs = [music1,music2,music3,music4]

// queue will act as an index of songs starting from 1st song ie index 0
let queue = 0;

// play button when clicked , plays the song in queue also 
// it hides the play button and display pause button 
playbutton.addEventListener('click' , function startplaying ( ){
    songs[queue].play()
    playbutton.style = 'display:none'
    pause.style = 'display:block'
})

// pause button when clicked , stops the song in queue also 
// it hides the pause button and display play button 
pause.addEventListener('click' , function stopplayy(){
    songs[queue].pause()
    pause.style = 'display:none'
    playbutton.style = 'display:block'

})

/* previous button when clicked , first stops the song and then
deduct 1 from the que in a variable z and then queue and z are of same value
then plays from the new que
*/


previousbutton.addEventListener('click' , function prev(){
    songs[queue].pause()
    let z = queue-1;
    queue = z;
    // console.log('after: ' , z)
    // console.log(queue)
    songs[queue].play()
    playbutton.style = 'display:none'
    pause.style = 'display:block'
   


})


// same as previous 
nextbutton.addEventListener('click' , function next(){
    songs[queue].pause()
    let z = queue+1;
    queue = z;
    counter = z;
    // console.log('after: ' , z)
    // console.log(queue)
    songs[queue].play()
    playbutton.style = 'display:none'
    pause.style = 'display:block'
    

})



/*
These Things are Not Added Yet/Problems Not Solved As Its Just a Prototype
 - Keep Pressing Next Or Previous Leads To Out Of Range and Eventually Plays Nothing
 - if a Audio Ends the pause buttons does not get changed to Play
 - There is No Feature to Loop or Repeat 
 - not Responsive , if viewed , in mobile needs to be zoomed out
 
  -- Will Improve This all and More in Future --
  -- Btw This is My First JavaScript Based Project That i Made on my Own & That Works :) --


*/