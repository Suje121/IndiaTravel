document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("formMessage").style.display = "block";
  setTimeout(() => {
    document.getElementById("formMessage").style.display = "none";
    document.getElementById("contactForm").reset();
  }, 3000);
});
document.getElementById("carForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Car booked successfully!");
  this.reset();
});
document.getElementById("hotelForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Hotel booked successfully!");
  this.reset();
});
