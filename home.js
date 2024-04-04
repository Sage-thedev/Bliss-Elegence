const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-items");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("act");
  const icon = document.querySelector(".hamburger i");

  if (menu.classList.contains("act")) {
    // Show close icon
    icon.classList.remove("fa-solid", "fa-bars");
    icon.classList.add("fa-solid", "fa-xmark");
    icon.style.display = "block";
  } else {
    // Show hamburger icon
    icon.classList.remove("fa-solid", "fa-xmark");
    icon.classList.add("fa-solid", "fa-bars");
  }
});


let words = ["We put a smile on your face with our amazing designs..."];
let currentIndex = 0;
let currentWord = "";
let textswitch = document.querySelector(".element");

function typeText() {

  currentWord = words[currentIndex];
  let index = 0;
  const typingInterval = setInterval(() => {
    textswitch.textContent += currentWord[index];
    index++
    if (index === currentWord.length) {
      clearInterval(typingInterval);
      setTimeout(typeText, 5000);
    }
  }, 100);
  setTimeout(() => {
    textswitch.style.display = "none";
    textswitch.style.transform = "scalex()"
  }, 6000);

}
typeText();

setTimeout(()=>{

  let words = ["Be the star of every occassion with our designs..."];
let currentIndex = 0;
let currentWord = "";
let texts = document.querySelector(".element2");

function typeText2() {

  currentWord = words[currentIndex];
  let index = 0;
  const typingInterval = setInterval(() => {
    texts.textContent += currentWord[index];
    index++
    if (index === currentWord.length) {
      clearInterval(typingInterval);
      
    }
  }, 100);
  setTimeout(() => {
    texts.style.display = "none";
    texts.style.scale = 0.7;
  }, 6000);

}
typeText2();
},7000)

setTimeout(()=>{

  let words = ["Stay trendy 365days with Bliss Elegence!!!"];
let currentIndex = 0;
let currentWord = "";
let textss = document.querySelector(".element3");

function typeText3() {

  currentWord = words[currentIndex];
  let index = 0;
  const typingInterval = setInterval(() => {
    textss.textContent += currentWord[index];
    index++
    if (index === currentWord.length) {
     clearInterval(typingInterval);
    }
  }, 100);
}
typeText3();
},13000)

// function eraseText(){
//   let text = textswitch.textContent;
//   const eraseTypingText= setInterval(() => {
//     text = text.slice(0, -1);
//     textswitch.textContent = text;
//     if(text === ""){
//       clearInterval(eraseTypingText);
//       currentIndex =(currentIndex+1) %words.length;
//       setTimeout(typeText, 100);
//     }
//   }, 100);
// }




// Emoji finger down indicator

function emojiFingerDown() {
  const finger = document.querySelector(".emoji-finger-down");
  let emojiInterval;

  emojiInterval = setInterval(() => {
    if (finger.classList.contains("act")) {
      finger.classList.remove("act");
    } else {
      finger.classList.add("act");
    }
    setTimeout(() => {
      
      // clear interval 

      clearInterval(emojiInterval);
      
      // emojiFingerDown display none 

      finger.style.display = "none";
    }, 20000);
  }, 5000);

  
}

emojiFingerDown();


function emojiFingerDown2() {
  const finger2 = document.querySelector(".emoji-finger-down2");
  let emojiInterval;

  emojiInterval = setInterval(() => {
    if (finger2.classList.contains("active")) {
      finger2.classList.remove("active");
    } else {
      finger2.classList.add("active");
    }
    setTimeout(() => {
      
      // clear interval 

      clearInterval(emojiInterval);
      
      // emojiFingerDown display none 

      finger2.style.display = "none";
    }, 20000);
  }, 5000);

  
}

emojiFingerDown2();


// drop text

function dropText(){
  const popoverTitle = document.querySelector(".popover-title2");
  let popoverInterval;

  popoverInterval = setInterval(() => {
    if(popoverTitle.classList.contains("drop")){
      popoverTitle.classList.remove("drop");
    }else{
      popoverTitle.classList.add("drop");
    }
    clearInterval(popoverInterval)
  }, 10000);
  
}
dropText();