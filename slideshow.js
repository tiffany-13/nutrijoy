// Initialize the slideIndex to 1, indicating the first slide is active
let slideIndex = 1;
// Call the showSlides function to display the first slide initially
showSlides(slideIndex);

// Function to navigate to the next or previous slide
function plusSlides(n) {
  // Increment or decrement the slideIndex based on the value of n
  showSlides(slideIndex += n);
}

// Function to navigate to a specific slide when a dot is clicked
function currentSlide(n) {
  // Set the slideIndex to the specific slide number (n) and display it
  showSlides(slideIndex = n);
}

// Function to display the slide corresponding to the current slideIndex
function showSlides(n) {
  let i; // Declare a variable for loop iteration
  let slides = document.getElementsByClassName("mySlides"); // Get all slide elements
  let dots = document.getElementsByClassName("dot"); // Get all dot elements

  // If slideIndex exceeds the number of slides, loop back to the first slide
  if (n > slides.length) {slideIndex = 1}    
  // If slideIndex is less than 1, loop to the last slide
  if (n < 1) {slideIndex = slides.length}

  // Hide all slides by setting their display to "none"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the slide corresponding to the current slideIndex
  slides[slideIndex-1].style.display = "block";  
  // Add the "active" class to the dot corresponding to the current slide
  dots[slideIndex-1].className += " active";
}
