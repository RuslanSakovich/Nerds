 var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var overlay = document.querySelector('.modal-overlay');

var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) 
{
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add('overlay-show');

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
  login.focus();
  console.log("клик по кнопке Напишите нам");
  }
}
);

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
  console.log('клик по кнопке закрыть');
});  

overlay.addEventListener('click', function (evt) 
{
  evt.preventDefault();
  popup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
  console.log("клик по overlay");
});

form.addEventListener("submit", function (evt) 
{
  if (!login.value || !password.value) 
  {
    evt.preventDefault();
    console.log("необходимо ввести данные");
    popup.classList.add("modal-error");
  } else {
      if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    } 
  }
 });

window.addEventListener("keydown", function (evt)
{
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      overlay.classList.remove('overlay-show');
    }
  }
})