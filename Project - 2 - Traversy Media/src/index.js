import generateJoke from './generateJoke';
import './styles/main.scss';
import laugh from './assets/smile.png'

const laughImg = document.getElementById("laughImg");
laughImg.src = laugh;

console.log(generateJoke())