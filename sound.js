const key = document.querySelectorAll('.key');

console.log(key)

function playSound(url) {
    console.log(url)
    new Audio(url).play()
}

// key.forEach((element ,i) => {
    // const num = i < 15 ? '0' + (i + 1) : (i + 1)
    // const url = 'music/key' + num + '.mp3';
    // element.addEventListner('click',()=>playSound(url))
// });
key.forEach((pianoKey, i) => {
  const number = i < 15 ? (i + 1) : i + 1;
    
  const url = "music/key" + number + ".mp3";
  pianoKey.addEventListener("click", () => playSound(url));
});