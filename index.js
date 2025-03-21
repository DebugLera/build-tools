import { sum } from './main.js';
import './index.css';
import reactLogo from './react@4x.png';

const array = [1, 2, 3].map(i => i + 1);

function hello(...args) {
    console.log('Hello Rollup!', args[0], args[1], args[2]);
}

hello(sum(1,2), array);

const img = document.createElement('img');
img.src = reactLogo;
document.querySelector('body').append(img);
console.log(reactLogo);