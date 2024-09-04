# Project related to DOM

## projet link

[click here] (https://codesandbox.io/dashboard/sandboxes/?workspace=ce502c9c-940e-4658-a699-394eb491779c)
[click here] (https://github.com/hiteshchoudhary/js-hindi-youtube/tree/d478e4117a760005ee9abb79e2c7d5bf04d0d492/07_projects)
# Solution code

## project 1

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
