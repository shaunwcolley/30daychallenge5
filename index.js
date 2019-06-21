const panels = document.querySelectorAll('.panel');

// could not use const def because it would apply open style to whichever dom element clicked
function toggleOpen() {
  this.classList.toggle('open')
}

const toggleActive = (e) => {
  if(e.propertyName.includes('flex')) {
    e.target.classList.toggle('open-active');
  }
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
