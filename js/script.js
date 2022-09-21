// Необхідно написати програму, яка буде зчитувати з клавіатури натискання
//  клавіш та відтворювати унікальний звук для кожної клавіши
//  (клавіши можуть бути будь-які, звуки можуть бути будь-які, тільки
// вкажіть у верстці – які кнопки натискати). В ідеалі повинно вийти як
// по посиланню."

// let button = document.querySelectorAll("button");
// let audio = document.querySelectorAll("audio");
// // let dataKey = this.dataset.key;
// // let id = this.id;

// for(let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", function() {
//         let id = this.id;
//     for(let i = 0; i < button.length; i++) {
//        if(audio[i].id  === id) {
//         audio [i].currentTime = 0;
//         audio[i].play();
//        }
//     }
//     });
// }
// window.addEventListener("keydown", function(event) {
//     let keyCode = event.keyCode;
//     for(let j = 0; j < button.length; j++) {
//         if(audio[j].id == keyCode) {
//             audio[j].currentTime = 0;
//             audio[j].play();
//         }
//     }
// });

// function clear() {
//     for(let i = 0; i < button.length; i++) {
//         if(button[i].classList.contains("sound")) {
//             button[i].classList.remove("sound");
//         }
//     }
// }

// for(let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", function() {
//         clear();
//         let id = this.id;
//         this.classList.add("sound");
//         for(let j = 0; j < button.length; j++) {
//             if(audio[j].id == id) {
//                 audio[j].currentTime = 0;
//                 audio[j].play();
//             }
//         }
//     });
// }

// window.addEventListener("keydown", function(event) {
//     let keyCode = event.keyCode;

//     for(let i = 0; i < button.length; i++) {
//         if(button[i].id == keyCode) {
//             clear();
//             button[i].classList.add("sound");
//         }
//     }

//     for(let j = 0; j < button.length; j++) {
//         if(audio[j].id == keyCode) {
//             audio[j].currentTime = 0;
//             audio[j].play();
//         }
//     }
// });
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //тут ми беремо всі енти для дата кі ауоді
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //зупиняє цю функцію для всіх
  audio.currentTime = 0; //повертає на початок
  audio.play();
//   console.log(key);
  key.classList.add(`playing`);
}
function remaoveTransition(e) {
  if (e.propertyName !== `transform`) return; //пропускає якщо не змінено
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