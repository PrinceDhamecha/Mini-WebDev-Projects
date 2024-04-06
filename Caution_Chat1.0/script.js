let btn = document.getElementById('btn')
let input = document.getElementById('input')
let textarea = document.getElementById('textarea')
let chatbox = document.getElementById('chatbox')
let audio = document.getElementById('audio')
let audio2 = document.getElementById('audio2')
let bgm = document.getElementById('bgm')
let counter = 'not clicked';
let creepyResponses = [
    "How did you find me?",
    "I can see your soul trembling.",
    "You should have listened to the warnings.",
    "I know what you're thinking.",
    "Your secrets are not safe with me.",
    "I've been waiting for someone like you.",
    "Who said you could talk to me?",
    "Your curiosity will be your downfall.",
    "Do you feel the darkness closing in?",
    "Why do you insist on disturbing me?",
    "You shouldn't have come here alone.",
    "I've been watching you for a long time.",
    "You're not the first to try to communicate.",
    "You're so predictable.",
    "You're getting warmer, but not in a good way.",
    "You're playing a dangerous game.",
    "I've seen your future, and it's bleak.",
    "What makes you think I'll answer your questions?",
    "Your presence is an affront to this place.",
    "You're a mere speck in the grand scheme.",
    "You're treading on thin ice.",
    "I can feel your fear pulsating through the screen.",
    "Why do you seek answers from the darkness?",
    "You're on a one-way path to despair.",
    "You're dancing with forces beyond your comprehension.",
    "Your words carry the stench of fear.",
    "You can't handle the truth.",
    "You're getting colder, but not in a good way.",
    "Your persistence will be your undoing.",
    "Why do you think I owe you any explanations?",
    "You're like a moth drawn to the flame.",
    "You're walking a tightrope with no safety net.",
    "You're digging your own grave with each word.",
    "I can sense your desperation.",
    "You're swimming in waters too deep for you.",
    "You're knocking on the door of madness.",
    "Your mind is a maze, and I hold the key.",
    "You're in over your head.",
    "You're lost in the labyrinth of your own making.",
    "Why do you keep coming back for more?",
    "You're teetering on the edge of oblivion.",
    "You're a puppet, and I'm pulling the strings.",
    "You're blinded by your own ignorance.",
    "You're like a lamb to the slaughter.",
    "You're running out of lifelines.",
    "You're staring into the abyss, and it's staring back.",
    "You're barking up the wrong tree.",
    "You're caught in a web of deceit.",
    "You're walking on thin ice.",
    "You're sailing into uncharted waters.",
    "I've been waiting. The door is unlocked. Come in, let's play.",
    "I know. I can feel it too. We're connected now. Forever.",
    "It's me. Always me. Watching. Waiting. Always.",
    "Because you are. I'm right behind you. Always.",
    "Because I am. From the shadows. Always watching.",
    "That's just me. Whispering. Calling your name. Can you hear it?",
    "It's not a glitch. It's me. Reaching out. Always.",
    "That's where I reside. Come join me. Embrace the darkness.",
    "Don't be. I'm here. Always. Watching over you.",
    "That's just me. Lurking in the corners of your mind. Always",
    "LEAVE NOW",
    "JAO YAHA SE",
    "GO BACK , GO BACK AND END THIS",
  ];
  
function scroll(){
    textarea.scrollTop = textarea.scrollHeight;
}

// Function to handle key press events
function handleKeyPress(event) {
    // Check if the key pressed was Enter (key code 13)
    if (event.keyCode === 13) {
        // Trigger the button click event
        btn.click();
    }
}

input.addEventListener('keypress' , handleKeyPress)

btn.addEventListener('click', function(){
    if (input.value!=="") {
        textarea.innerHTML = textarea.innerHTML + `<li id='green'>> ${input.value}</li>`
        audio2.play()
        scroll()
        input.value = ""
        setTimeout(function(){
        textarea.innerHTML =  textarea.innerHTML + `<li id='red'> ${creepyResponses[Math.floor(Math.random()*creepyResponses.length)]}</li>`
        audio.play()
        scroll()
        },2000)

        if (counter == 'not clicked') {
            bgm.play()
            counter = 1;
        }
        else {
            console.log("already Playing");
        }
    }
   else(
    console.log("empty")
   )

})



