import generateJoke from './generateJoke';
import './styles/main.scss';
import laugh from './assets/smile.png'

const laughImg = document.getElementById("laughImg");
laughImg.src = laugh;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener('click', generateJoke)

generateJoke();