import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// --------For side scroll indicator ----------

const ids = document.querySelectorAll("id");
const windowHeight = window.innerHeight;
const navigation = document.querySelector(".navigation");

function reset() {
  for (let i = 0; i < navigation.children.length; i++) {
    navigation.children[i].id.remove("#clicked");
  }
}

window.addEventListener("onClick", function() {
  const onClick = window.scrollY;
  ids.forEach(function(id, i) {
    if (
      id.offsetTop < onClick + windowHeight / 2 &&
      onClick < id.offsetTop + windowHeight / 2
    ) {
      reset();
      navigation.children[i].id.add("#clicked");
    }
  });
});

// --------For smooth scroll of the page ----------

document.querySelectorAll(".navigation-lists").forEach(function(item, i) {
  item.addEventListener("click", function() {
    window.scrollTo({
      top: i * windowHeight,
      behavior: "smooth",
    });
  });
});

// ------------ For contact page -----------------

// document.querySelector("#contact-form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   e.target.elements.name.value = "";
//   e.target.elements.email.value = "";
//   e.target.elements.message.value = "";
// });

// ------------ Remove hash from url when clicked on Menu -----------------

window.onload = function() {
  window.location.hash = "";
  // document.querySelector("#contact-form").addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   e.target.elements.name.value = "";
  //   e.target.elements.email.value = "";
  //   e.target.elements.message.value = "";
  // });
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
