import React from 'react'
import './Carousel.scss'

export default function Carousel() {
  var slideIndex = 1; //selected item
  function plusSlides(n) { showSlides(slideIndex += n); } //for arrows
  function currentSlide(n) { showSlides(slideIndex = n); } //for dots

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 } //sets first item
    if (n < 1) { slideIndex = slides.length } //sets last item

    for (i = 0; i < slides.length; i++) { //hides all items
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { //deactivates all dots
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block"; //shows selected item
    dots[slideIndex - 1].className += " active"; //activates selected dot
  }
  
  React.useEffect(() => { showSlides(slideIndex); }, []); //sets first item onmount
  
  var isPaused = false; //flag, pauses setInterval
  function mouseover() { isPaused=true; }
  function mouseleave() { isPaused=false; }

  React.useEffect(() => {
    const interval = setInterval(() => {
      isPaused || plusSlides(1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="сarousel" onMouseOver={mouseover} onMouseLeave={mouseleave}>
      <div className="сarousel-container">
        <div className="carousel-item fade">
          <img src="https://via.placeholder.com/1200x400/a6c5ad/ffffff?text=First+item" alt="" />
        </div>

        <div className="carousel-item fade">
          <img src="https://via.placeholder.com/1200x400/c1dfbe/ffffff?text=Second+item" alt="" />
        </div>

        <div className="carousel-item fade">
          <img src="https://via.placeholder.com/1200x400/eddacc/ffffff?text=Third+item" alt="" />
        </div>

        <div className="carousel-item fade">
          <img src="https://via.placeholder.com/1200x400/61a4b2/ffffff?text=Fourth+item" alt="" />
        </div>
      </div>

      <div className="carousel-indicators">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
      </div>

      <div className="carousel-control prev" onClick={() => plusSlides(-1)}>
        <span>&#10094;</span>
      </div>

      <div className="carousel-control next" onClick={() => plusSlides(1)}>
        <span>&#10095;</span>
      </div>
    </section>
  )
}