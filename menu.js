let abrir = document.querySelector('.abrir');
let close = document.querySelector('.close');
let menu = document.querySelectorAll('.menu');


abrir.addEventListener('click', () =>{
    menu.forEach(nav=>{nav.classList.add('mostrar')});
})

close.addEventListener('click', () =>{
    menu.forEach(nav=>{nav.classList.remove('mostrar')});
})

const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function(){
    search.classList.toggle('active')
}