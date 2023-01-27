const key = document.querySelectorAll(".key");
const fskey = document.querySelectorAll(".fs_key");
//const drum = document.querySelectorAll('text')


function playSound(url) {
  console.log(url);
  new Audio(url).play();
}

key.forEach((pianoKey, i) => {
  const number = i < 10 ? i + 1 : i + 1;
  const url = "music/key" + number + ".mp3";
  pianoKey.addEventListener("click", () => playSound(url));
});

fskey.forEach((pianoKey, i) => {
  const url = "music/Fs/key" + (i+1) + ".mp3";
  pianoKey.addEventListener("click", () => playSound(url));
});

// const padred = document.getElementById("tc")
//
//
// function drum() {
  // padred.addEventListener("click", drum);
  // const snare1 = new Audio("https://www.fesliyanstudios.com/play-mp3/6774");
  // snare1.play()
  // console.log('pad red click');
// }

//pad tones

let tr1 = document.getElementById("r1");
let audio = new Audio();

tr1.addEventListener("click", function () {
  if (audio.paused) {
    audio.src = "pads/loop1.mp3";
    audio.play()
    tr1.classList.add("border-clicked");
  } else {
    audio.pause();
    tr1.classList.remove("border-clicked");
  }
});

let tr2 = document.getElementById("r2");
let audio2 = new Audio();

tr2.addEventListener("click", function () {
  if (audio2.paused) {
    audio2.src = "pads/loop2.mp3";
    audio2.play();
    tr2.classList.add("border-clicked");
  } else {
    audio2.pause();
    tr2.classList.remove("border-clicked");
  }
});

let tr3 = document.getElementById("g1")
let audio3 = new Audio();

tr3.addEventListener("click", function () {
   if (audio3.paused) {
     audio3.src = "pads/loop3.mp3";
     audio3.play();
     tr3.classList.add("border-clicked");
   } else {
     audio3.pause();
     tr3.classList.remove("border-clicked");
   }
})

let t4 = document.getElementById("g2");
let audio4 = new Audio();

t4.addEventListener("click", function () {
  if (audio4.paused) {
    audio4.src = "pads/loop4.mp3";
    audio4.play();
    g2.classList.add("border-clicked");
  } else {
    audio4.pause();
    g2.classList.remove("border-clicked");
  }
});

let t5 = document.getElementById("br1");
let audio5 = new Audio();

t5.addEventListener("click", function () {
  if (audio5.paused) {
    audio5.src = "pads/loop5.mp3";
    audio5.play();
    t5.classList.add("border-clicked");
  } else {
    audio5.pause();
    t5.classList.remove("border-clicked");
  }
});

let t6 = document.getElementById("br2");
let audio6 = new Audio();

t6.addEventListener("click", function () {
  if (audio6.paused) {
    audio6.src = "pads/loop6.wav";
    audio6.play();
    t6.classList.add("border-clicked");
  } else {
    audio6.pause();
    t6.classList.remove("border-clicked");
  }
});

let t7 = document.getElementById("br3");
let audio7 = new Audio();

t7.addEventListener("click", function () {
  if (audio7.paused) {
    audio7.src = "pads/loop7.wav";
    audio7.play();
    t7.classList.add("border-clicked");
  } else {
    audio7.pause();
    t7.classList.remove("border-clicked");
  }
});

let t8 = document.getElementById("br4")
let audio8 = new Audio();

t8.addEventListener("click", function () {
  if (audio8.paused) {
    audio8.src = "pads/loop8.wav";
    audio8.play();
    t8.classList.add("border-clicked");
  } else {
    audio7.pause();
    t8.classList.remove("border-clicked");
  }
})

