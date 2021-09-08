const INPUT = document.querySelector('input');
const SEARCH = document.querySelector('button');

SEARCH.onclick = function(event) {
    INPUT.classList.toggle('active');
    INPUT.focus();
}