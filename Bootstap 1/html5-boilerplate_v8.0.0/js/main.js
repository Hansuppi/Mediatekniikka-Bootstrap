let slideIndex = 0;
showSlides();

function showSlides(){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
}

let modal = document.getElementById("myModal");
let img = document.getElementById("img1, img2, img3");
let modalImg = document.getElementById("image");
let btn = document.getElementsByClassName("btn");

btn.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function(){
  modal.style.display = "none";
}
