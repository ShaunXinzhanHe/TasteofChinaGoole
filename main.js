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
    const contactStatus = contactSection.querySelector("#contact-status");
    const submitButton = contactForm.querySelector("button[type=submit]");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = contactForm.querySelector("#name").value.trim();
        const email = contactForm.querySelector("#email").value.trim();
        const message = contactForm.querySelector("#message").value.trim();

        // Simple email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            contactStatus.textContent = "Please fill in all fields.";
            contactStatus.style.color = "#d00";
            return;
        }
        if (!emailRegex.test(email)) {
            contactStatus.textContent = "Please enter a valid email address.";
            contactStatus.style.color = "#d00";
            return;
        }

        submitButton.disabled = true;
        contactStatus.textContent = "Sending your message...";
        contactStatus.style.color = "#000";

        fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: {
                Accept: "application/json"
            }
        })
            .then(function (response) {
                if (response.ok) {
                    contactForm.reset();
                    contactStatus.textContent = "Thank you! Your message has been sent.";
                    contactStatus.style.color = "#007700";
                } else {
                    return response.json().then(function (data) {
                        throw new Error(data.error || "There was a problem sending your message.");
                    });
                }
            })
            .catch(function (error) {
                contactStatus.textContent = error.message || "Unable to send your message right now. Please try again later.";
                contactStatus.style.color = "#d00";
            })
            .finally(function () {
                submitButton.disabled = false;
            });
    });
});