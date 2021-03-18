//function that handle deposit of funds.

//button
var calculate =document.getElementById("calculate");

//eventListener
calculate.addEventListener('click', function calculator(e){
      
      
      //prevent default propagation of click event
      e.preventDefault();

      //variable declaration
      let customerName = document.getElementById("cname").value;
      let amount = document.getElementById("aname").value;
      let totalBalance;
      let previousBalance = 0;
      
        
      if (isNaN(amount)){
        alert("The amount must be a number");
      }

      //perform calculation on values
      totalBalance= parseFloat(previousBalance) + parseFloat(amount);

      let cusName = document.getElementById("cusName").innerHTML= customerName;
      let pBalance = document.getElementById("pBalance").innerText = totalBalance;
      let cBalance = document.getElementById("cBalance").innerText = totalBalance;
      let tBalance = document.getElementById("tBalance").innerText = totalBalance;
      alert("Amount deposited successfully");

} );

// year on footer section
let myDate = new Date();
let mydateYear = document.getElementById("varYear");
    mydateYear.innerHTML = myDate.getFullYear();


// slideshow implementation
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}