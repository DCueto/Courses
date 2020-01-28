
// console.log(document.querySelector('.menu'));
const $menu = document.querySelector('.menu');
const $burgerButton = document.querySelector("#burger-menu");
const $mQueryipad = window.matchMedia('screen and (max-width: 767px');
// console.log($burgerButton);

// if ($mQueryipad.matches){
//   $burgerButton.addEventListener("click", hideShow);
// } else {
//   $burgerButton.removeEventListener("click", hideShow);
// }

console.log($mQueryipad);

$mQueryipad.addListener(validation);

function validation(event){
  if (event.matches){
    $burgerButton.addEventListener("click", hideShow);
  } else {
    $burgerButton.removeEventListener("click", hideShow);
  }
  console.log(event.matches);
}

validation($mQueryipad);

function hideShow(){
  if($menu.classList.contains('is-active')){
    $menu.classList.remove('is-active');
  } else {
    $menu.classList.add('is-active');
  }
}

