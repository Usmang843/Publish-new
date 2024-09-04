# Project related to DOM

## projet link

[click here] (https://codesandbox.io/dashboard/sandboxes/?workspace=ce502c9c-940e-4658-a699-394eb491779c)
[click here] (https://github.com/hiteshchoudhary/js-hindi-youtube/tree/d478e4117a760005ee9abb79e2c7d5bf04d0d492/07_projects)

# Solution code

## project 1(Color Changere) Solution

```Javascript

const btns = document.querySelectorAll('.button')
const bdy = document.querySelector('body')


btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.id === 'grey'){
            bdy.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            bdy.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            bdy.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            bdy.style.backgroundColor = e.target.id
        }
    });
})

```

## project 2 (BMI Calculator) Solution

```Javascript
const form = document.querySelector("form");
// below getting value of input give us empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop for a while before submitting

  const height = parseInt(document.querySelector("#height").value);
  // isNan(height) return ture(convertable to number)or false
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height < 0) {
    results.innerHTML = "Please give a Valid Height";
  } else if (weight < 0) {
    results.innerHTML = "Please give a Valid weight";
  } else {
    const bni = (weight / ((height * height) / 10000)).toFixed(2);
    if (bni < 18.5) {
      results.innerHTML = `<span>Under Weight : ${bni}</span>`;
    } else if (bni >= 18.5 || bni < 25) {
      results.innerHTML = `<span>Normal Weight: ${bni}</span>`;
    } else if (bni >= 25) {
      results.innerHTML = `<span>Normal Weight: ${bni}</span>`;
    }
  }
});


```

## Project 3 (Digital Clock) Solution

```Javascript

const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')
clock.addEventListener('click',()=>{
    setInterval(() => {
        let date = new Date();
        clock.innerHTML = date.toLocaleTimeString()
      }, 1000);
})


```

## project 4 (Guess Numner) Solution

```Javascript

let rndNum = parseInt(Math.random() * 100 + 1);

const submt = document.querySelector("#guessNum");
const usrInp = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remain = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".results");

const p = document.createElement("p");

let prevGuess = [],
  numGuesses = 1,
  playGame = true;
if (playGame) {
  submt.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(rndNum);
    const guess = parseInt(usrInp.value);
    validGuess(guess);
  });
}
function validGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    if (!chkNum(guess) && numGuesses > 10) {
      display(`Game Over, Random Number was ${rndNum}`);
      endGame();
    }
  }
}
function chkNum(guess) {
  if (guess === rndNum) {
    display(`Your Guessed number is right`);
    endGame();
  } else if (guess < rndNum) {
    display(`Your Guessed number is Too Low`);
  } else if (guess > rndNum) {
    display(`Your Guessed number is Too High`);
  }
  return guess === rndNum;
}
function displayGuess(guess) {
  usrInp.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuesses++;
  remain.innerHTML = `${11 - numGuesses}`;
}
function display(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  usrInp.value = "";
  usrInp.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id= "newGame">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = "false";
  newGame();
}
function newGame() {
  const newGamebtn = document.querySelector("#newGame");
  newGamebtn.addEventListener("click", () => {
    rndNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = "";
    remain.innerHTML = `${11 - numGuesses}`;
    usrInp.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}

```
