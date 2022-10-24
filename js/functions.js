import { jobArray, htmlForm } from "./content.js";

const boxContent = document.querySelector('.boxContent');

const randomizer = array => {
  return array[Math.floor(Math.random() * array.length)];
}

const jobRandomizer = objectArray => {
  const jobObject = randomizer(objectArray);
  boxContent.innerHTML = `${jobObject.job}${jobObject.content}<button class="go">Try again!</button>`;
  document.querySelector('.go').addEventListener('click', function() {
    document.querySelector('.jobCoachAnswer').className = 'jobCoach';
    go();
  })
}

export const go = () => {
  boxContent.innerHTML = htmlForm;
  document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  document.querySelector('.jobCoach').className = 'jobCoachAnswer';
  jobRandomizer(jobArray);
  const greeting = `Hey ${dataObject.fname}, so nice to see you here! Let's see what cool career we got for you today. You'll probably be a fantastic:`
  boxContent.prepend(greeting);
  });
}
