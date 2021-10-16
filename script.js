const marker = document.querySelector('#marker');
const item = document.querySelectorAll('ul li a');

function Indicator(e) {
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}

item.forEach(Link => {
  Link.addEventListener('mousemove', (e) => {
    Indicator(e.target);
  })
})