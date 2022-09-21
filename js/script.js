// Необхідно написати програму, яка буде зчитувати з клавіатури натискання
//  клавіш та відтворювати унікальний звук для кожної клавіши
//  (клавіши можуть бути будь-які, звуки можуть бути будь-які, тільки
// вкажіть у верстці – які кнопки натискати). В ідеалі повинно вийти як
// по посиланню."
     
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; 
  audio.currentTime = 0; 
  audio.play();
//   console.log(key);
  key.classList.add(`playing`);
}
function remaoveTransition(e) {
  if (e.propertyName !== `transform`) return; 
  this.classList.remove(`playing`);
}
const keys = document.querySelectorAll(`.key`);

keys.forEach(key => key.addEventListener(`transitionend`, remaoveTransition));
window.addEventListener(`keydown`, playSound);

let button = document.getElementsByClassName("key");
let audio = document.getElementsByClassName("aud");

for(let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        let id = this.id;
         button[i].classList.add(`playing`);
    for(let i = 0; i < button.length; i++) {
        if(audio[i].id  === id) {
        audio[i].currentTime = 0;
        audio[i].play();
        }
    }
    });
    
};
console.log();