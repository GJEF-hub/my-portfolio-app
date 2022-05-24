import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// --------For side scroll indicator ---------- 

const ids = document.querySelectorAll('id');
const windowHeight = window.innerHeight;
const navigation = document.querySelector('.navigation');

function reset () {
    for (let i = 0; i < navigation.children.length; i++) {
        navigation.children[i].id.remove('#clicked');
    }
}

window.addEventListener('onClick', function() {
    const onClick = window.scrollY;
    ids.forEach(function(id, i) {
        if (id.offsetTop < onClick + windowHeight/2 && onClick < id.offsetTop + windowHeight/2) {
            
            reset();
            navigation.children[i].id.add('#clicked');
        }
    
});
});

// --------For smooth scroll of the page ----------

document.querySelectorAll('.navigation-lists').forEach(function(item, i) {
    item.addEventListener('click', function() {
        window.scrollTo ({
            top: i * windowHeight,
            behavior: "smooth"
            
        })
    });
});


// ------------ For contact page -----------------

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});


// ------------ For Navigation Menu Top -----------------

let menuBtn = document.querySelector('.toggle-menu-btn');
let menu = document.querySelector('.toggle-navigation');
let menuStatus = false;

let closeMenuBtn = document.querySelector(".close-menu");

menu.style.marginTop = '-100vh';

function menuToggle() {
    if (menuStatus === false) {
        menu.style.marginTop = '0';
        menuStatus = true;
    }
    else if (menuStatus === true) {
        menu.style.marginTop = '-100vh';
        menuStatus = false;
    }
}

menuBtn.onclick = menuToggle;
closeMenuBtn.onclick = menuToggle;

// ------------ Load more button action -----------------

let showMore = document.querySelector('.load-more');
let pageItems = document.querySelector('.show-more-parent');
let displayStatus = false;
let goBack = document.querySelector(".go-back-btn");

pageItems.style.display ='none';

 function loadMore() {
     if (displayStatus === false) {
         
         pageItems.style.display ='block';
         displayStatus = true;
     }
     else if (displayStatus === true) {
         pageItems.style.display ='none';
         displayStatus = false;
     }
 }
showMore.onClick = loadMore;
goBack.onClick =loadMore;


// ------------ Remove hash from url when clicked on Menu -----------------

window.onload = function() { 
    window.location.hash = '' 
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
