const nav = document.querySelector("nav");

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    // Look for .hamburger
    const hamburger = document.querySelector(".hamburger");

    //Toggle Nav
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.5
                }s`;
            }
        });

        //Burger Animation
        //burger.classList.toggle("toggle");

        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
    });
};

navSlide();
