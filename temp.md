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
