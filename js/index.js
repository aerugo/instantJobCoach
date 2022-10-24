import { go } from "./functions.js";

document.querySelector('.logo').addEventListener('click', function() {
  location.reload();
})

document.querySelector('.go').addEventListener('click', function() {
  go();
})
