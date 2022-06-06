import React from "react";
import "./Blogworks.css";

var images = [...document.querySelectorAll(".img")];
var slider = document.querySelector(".slider");
var sliderWidth;
var imageWidth;
var current = 0;
var target = 0;
var ease = 0.05;

function importAll(r) {
  return r.keys().map(r);
}

const pics = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

function Blogworks() {
  images.forEach((img, idx) => {
    img.style.backgroundImage = { pics };
    // `url(./images/${idx + 1}.jpg)`;
  });

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  function setTransform(el, transform) {
    el.style.transform = transform;
  }

  function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${
      sliderWidth - (window.innerWidth - window.innerHeight)
    }px`;
  }

  window.addEventListener("resize", init);

  function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    setTransform(slider, `translateX(-${current}px)`);
    animateImages();
    requestAnimationFrame(animate);
  }

  function animateImages() {
    var ratio = current / imageWidth;
    var intersectionRatioValue;

    images.forEach((image, idx) => {
      intersectionRatioValue = ratio - idx * 0.7;
      setTransform(image, `translateX(${intersectionRatioValue * 70}px)`);
    });
  }

  //   init();
  //   animate();

  <section>
    {/* <header>
    <img src={require("./images/1.jpg")} alt="" />
  </header> */}
    <main>
      <div className="slider">
        <div className="slider-inner">
          <div className="slider-item">
            <div className="img"></div>
          </div>
          <div className="slider-item">
            <div className="img"></div>
          </div>
          <div className="slider-item">
            <div className="img"></div>
          </div>
          <div className="slider-item">
            <div className="img"></div>
          </div>
          <div className="slider-item">
            <div className="img"></div>
          </div>
          <div className="slider-item">
            <div className="img"></div>
          </div>
        </div>
      </div>
    </main>
  </section>;
}

export default Blogworks;
