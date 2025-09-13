// partie-pour l'en-tete et le petit bnt de scroll

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// pour le changement de position des élement de ma navmenu

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

// connexion de ma formulaire et mon icon avec mes variables

const wraper = document.querySelector('.wraper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.getElementById('user-button');
const iconClose = document.querySelector('.icon-close');
const dashboardLink = document.getElementById('dashboardLink');


registerlink.addEventListener('click', ()=> {
    wraper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wraper.classList.remove('active');
});


btnPopup.addEventListener('click', (event)=> {
    event.preventDefault();
     wraper.classList.add('active-popup');
 });
// Afficher le formulaire de connexion lorsque l'utilisateur clique sur le lien "Dashboard"
 dashboardLink.addEventListener('click', function(event){
    event.preventDefault();
    wraper.classList.add('active-popup');
 }); 

 iconClose.addEventListener('click', (event)=> {
    event.preventDefault();
     wraper.classList.remove('active-popup');
 });

// Soumission du formulaire de connexion 
document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log(email);
    
    if (email === 'user@gmail.com' && password === 'password123'){
        window.location.href = 'dashboard/das.html';
    } else { 
         alert('Email ou mot de passe incorrect'); 
    }

});
 let cartItemCount = 0;
 
 function addToCart(imageSrc) {
    cartItemCount++;
    document.querySelector('#item-count').innerText = cartItemCount;
    const cartItems = document.querySelector('#cart-items');
    const newItem = document.createElement('div');
    newItem.classList.add('cart-item');
    newItem.innerHTML = `<img src="${imageSrc}" alt="Produit dans le panier">`;
    cartItems.appendChild(newItem);
    alert("voulez-vous ajouter cet article au panier ?");
}

function toggleCart(){
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === "none" || modal.style.display === "") ? "block" : "none";
}

