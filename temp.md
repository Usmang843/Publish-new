# Project related to DOM

## projet link

- [click here] (https://codesandbox.io/dashboard/sandboxes/?workspace=ce502c9c-940e-4658-a699-394eb491779c)
- [click here] (https://github.com/hiteshchoudhary/js-hindi-youtube/tree/d478e4117a760005ee9abb79e2c7d5bf04d0d492/07_projects)

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

## project 5 (timeInterval) Solution

```Javascript
  let strtInterval = "";
      const printDate = function (str) {
        console.log(str, Date.now());
      };
      document.querySelector("#start").addEventListener("click", () => {
        strtInterval = setInterval(printDate, 1000, "Hello Usman"); // continuously return the value given
        console.log(strtInterval)
      });
      document.querySelector("#stop").addEventListener("click", () => {
        clearInterval(strtInterval);
        console.log("Time Stopped");
      });
      // setTimeOut is taken handler function
      const printName = function () {
        // console.log("Usman Ur Rehman!");
      };
      setTimeout(printName, 2000); // 2 secs // give fn without paranthesis which shows reference not fn
      const chngTxt = function () {
        document.querySelector("h1").innerHTML = "Time Interval Task";
      };
      const returnTxt = setTimeout(chngTxt, 2000);

      //   document.querySelector("#stop").addEventListener("click", () => {
      //     clearTimeout(returnTxt);
      //     console.log("Stopped");
      //   });

```

## project 6 (unlimited Color Changer) Solution

```Javascript
    // generate random color
      const rncolor = function () {
        const hex = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          rnNum = Math.floor(Math.random() * 16);
          color += hex[rnNum];
        //   console.log(rnNum)
        }
        return color;
      };
    //   console.log(rncolor())
      let intervl;
      const strtColorChng = function () {
        if (!intervl) {
          intervl = setInterval(chngBgColor, 1000);
        }

        function chngBgColor() {
          document.body.style.backgroundColor = rncolor();
        //   console.log(rncolor())
        }
      };
      const stopColorChng = function () {
        clearInterval(intervl);
        intervl = null; // dereferencing the global variable
      };
      document.querySelector("#start").addEventListener("click", strtColorChng);
      document.querySelector("#stop").addEventListener("click", stopColorChng);


```

## project 7 (pressing keys) Solution

```Javascript
const insert = document.getElementById('insert')
      window.addEventListener('keydown',(e)=>{
          insert.innerHTML = `
              <div class= "color">
                  <table>
                        <tr>
                        <th>key</th>
                        <th>key Code</th>
                        <th>Code</th>
                        </tr>
                        <tr>
                        <td>${e.key === " "?'space':e.key}</td>
                        <td>${e.keyCode}</td>
                        <td>${e.code}</td>
                        </tr>
                    </table>
              </div>
          `;
      })

```