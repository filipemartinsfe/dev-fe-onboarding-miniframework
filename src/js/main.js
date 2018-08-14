// import {animatedScrollTo} from './es6-scroll-to.js';

// document.querySelector('.title').innerHTML = 'Great success!'
// document.querySelector('.text').innerHTML = 'Javascript is working!'

// animatedScrollTo(500);

var toggledHeight = document.getElementById('howBig').offsetHeight;
var toggle = document.getElementById('howBig');


var mainC1 = document.getElementById('mainC1');

mainC1.style.cursor = 'pointer';
mainC1.onclick = () =>  toggle.classList.toggle('off');
