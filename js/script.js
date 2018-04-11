var slide1 = document.querySelector(".slider__item--first"),
  slide2 = document.querySelector(".slider__item--second"),
  slide3 = document.querySelector(".slider__item--third"),
  slideControl1 = document.querySelector(".slider__control-item--first"),
  slideControl2 = document.querySelector(".slider__control-item--second"),
  slideControl3 = document.querySelector(".slider__control-item--third");

slideControl1.addEventListener("click", function(evt) {
  evt.preventDefault();
  if  (!slide1.classList.contains("slider__item--active")) {
    slide2.classList.remove("slider__item--active");
    slide3.classList.remove("slider__item--active");
    slide1.classList.add("slider__item--active");
    slideControl2.classList.remove("slider__control-item--active");
    slideControl3.classList.remove("slider__control-item--active");
    slideControl1.classList.add("slider__control-item--active");
  }
})

slideControl2.addEventListener("click", function(evt) {
  evt.preventDefault();
  if  (!slide2.classList.contains("slider__item--active")) {
    slide1.classList.remove("slider__item--active");
    slide3.classList.remove("slider__item--active");
    slide2.classList.add("slider__item--active");
    slideControl1.classList.remove("slider__control-item--active");
    slideControl3.classList.remove("slider__control-item--active");
    slideControl2.classList.add("slider__control-item--active");
  }
})

slideControl3.addEventListener("click", function(evt) {
  evt.preventDefault();
  if  (!slide3.classList.contains("slider__item--active")) {
    slide1.classList.remove("slider__item--active");
    slide2.classList.remove("slider__item--active");
    slide3.classList.add("slider__item--active");
    slideControl1.classList.remove("slider__control-item--active");
    slideControl2.classList.remove("slider__control-item--active");
    slideControl3.classList.add("slider__control-item--active");
  }
})
