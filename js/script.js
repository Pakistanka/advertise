let button = document.querySelector('.preview__button');
let preview = document.querySelector('.preview');
let questions = document.querySelector('.questions');

button.addEventListener('click', function(){
  preview.style.display = "none";
  questions.style.display = "flex";
})