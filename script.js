
/*
 ------
 MODALS
 ------
*/

let images = document.querySelectorAll('.web-dev-gallery img.has-modal');
let modals = document.getElementsByClassName('modal');

function closeModal() {
    this.scrollTop = 0;
    this.style.display = 'none';
}

function openModal() {
    document.getElementById(this.dataset.modal).style.display = 'block';
}

images.forEach(image => image.addEventListener('click', openModal));
[...modals].forEach(modal => modal.addEventListener('click', closeModal));
