document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("home-link");
    const menuLink = document.getElementById("menu-link");
    const noticeLink = document.getElementById("notice-link");
    const contactLink = document.getElementById("contact-link");

    const homeSection = document.getElementById("home-section");
    const menuSection = document.getElementById("menu-section");
    const noticeSection = document.getElementById("notice-section");
    const contactSection = document.getElementById("contact-section");

    function showSection(section) {
        homeSection.style.display = "none";
        menuSection.style.display = "none";
        noticeSection.style.display = "none";
        contactSection.style.display = "none";
        section.style.display = "block";
    }

    homeLink.addEventListener("click", function (e) {
        e.preventDefault();
        showSection(homeSection);
    });

    menuLink.addEventListener("click", function (e) {
        e.preventDefault();
        showSection(menuSection);
    });

    noticeLink.addEventListener("click", function (e) {
        e.preventDefault();
        showSection(noticeSection);
    });

    contactLink.addEventListener("click", function (e) {
        e.preventDefault();
        showSection(contactSection);
    });

    // Show home section by default
    showSection(homeSection);

    // Contact form validation and submission
    const contactForm = contactSection.querySelector("form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = contactForm.querySelector("#name").value.trim();
        const email = contactForm.querySelector("#email").value.trim();
        const message = contactForm.querySelector("#message").value.trim();

        // Simple email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;     
        }
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Send email using mailto (opens user's email client)
        window.location.href = `mailto:tasteofchinagooleofficial@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">")}`;
    });
});