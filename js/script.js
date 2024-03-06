const btn= document.getElementById("menu-btn");
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters= document.querySelectorAll('.counter');
let scrollStarted = false;
// /** @type {div} */ let counters = document.querySelector('.counter');


btn.addEventListener('click' , navToggle);
document.addEventListener('scroll' , scrollPage);


function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu')
}

function scrollPage(){
    const scrollPos = window.scrollY;
    if(scrollPos > 100 && !scrollStarted){
        countUp();
        scrollStarted = true
    }else if(scrollPos < 100 && scrollStarted ){
        reset();
        scrollStarted=false;
    }
}

function countUp(){
    counters.forEach((counter)=>{
        counter.innerHTML = '0';
        const updateCounter = () =>{
            // get count target
            const target = +counter.getAttribute('data-target');
            // get current counter value
            const c = +counter.innerHTML;
            // create an increment
            const increment = target/100;
            // if counter is less than target then we add the target
            if(c<target){
                counter.innerHTML= `${math.ceil(c+increment)}`;
                setTimeout(updateCounter, 75);
            }else{
                counter.innerHTML = target;
            }
        }
        updateCounter();
    })
}

function reset(){
    counters.forEach( (counter) => counter.innerHTML = 0)
}