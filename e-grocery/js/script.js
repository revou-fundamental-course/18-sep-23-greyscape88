document.getElementById("button").addEventListener("click", function() {
    let name = document.forms['contact-form']['your-name'].value;
    let email = document.forms['contact-form']['email'].value;
    let phone = document.forms['contact-form']['phone'].value;
    let message = document.forms['contact-form']['message'].value;

    if (!name) {
        document.getElementById("name-error").innerText = "Name must be filled out!";
    } else {
        document.getElementById("name-error").innerText = "";
    }

    if (!email) {
        document.getElementById("email-error").innerText = "Email must be filled out!";
    } else {
        document.getElementById("email-error").innerText = "";
    }

    if (!phone) {
        document.getElementById("phone-error").innerText = "Phone must be filled out!";
    } else {
        document.getElementById("phone-error").innerText = "";
    }

    if (!message) {
        document.getElementById("message-error").innerText = "Message must be filled out!";
    } else {
        document.getElementById("message-error").innerText = "";
    }
});



const carouselSlides = document.querySelectorAll(".image");
let currentIndex = 0;
let interval = 2000;

function nextSlide() {
    carouselSlides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    carouselSlides[currentIndex].classList.add('active');
}

(function() {
    setInterval(nextSlide, interval);
})();


function myFunction(){
    document.getElementById("demo").innerHTML = "Thank You For Calling Us!"
}