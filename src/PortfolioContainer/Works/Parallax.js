var images = [...document.querySelectorAll(".img")];
var slider = document.querySelector(".slider");
var sliderWidth;
var imageWidth;
var current = 0;
var target = 0;
var ease = 0.05;

window.addEventListener("resize", init);

images.forEach((img, idx) => {
  img.style.backgroundImage = `url(./images/${idx + 1}.jpg)`;
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

init();
animate();

// export default images;
