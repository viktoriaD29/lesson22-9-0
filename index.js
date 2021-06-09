const buttonElem = Array.from(document.querySelectorAll('.pagination__page'));
function handleClick(event) {
  console.log(Object.values(event.target.dataset)[0]);
}
buttonElem[0].addEventListener('click', handleClick);
buttonElem[1].addEventListener('click', handleClick);
buttonElem[2].addEventListener('click', handleClick);
