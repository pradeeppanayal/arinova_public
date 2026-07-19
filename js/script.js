/*
==========================================================
Arinova Industries
script.js
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    ==========================================================
    Mobile Navigation
    ==========================================================
    */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });

    }

    /*
    ==========================================================
    Sticky Header
    ==========================================================
    */

    const header = document.querySelector(".header");

    function updateHeader() {

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    updateHeader();

    /*
    ==========================================================
    Scroll To Top Button
    ==========================================================
    */

    const scrollTop = document.createElement("div");

    scrollTop.className = "scroll-top";

    scrollTop.innerHTML = "↑";

    document.body.appendChild(scrollTop);

    scrollTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    /*
    ==========================================================
    Fade In Sections
    ==========================================================
    */

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        observer.observe(section);

    });

    /*
    ==========================================================
    Scroll Events
    ==========================================================
    */

    window.addEventListener("scroll", () => {

        updateHeader();

        if (window.scrollY > 400) {
            scrollTop.classList.add("show");
        } else {
            scrollTop.classList.remove("show");
        }

    });

    /*
    ==========================================================
    Active Navigation Highlight
    ==========================================================
    */

    const navItems = document.querySelectorAll(".nav-links a");

    const pageSections = document.querySelectorAll("section[id]");

    function highlightMenu() {

        const scroll = window.scrollY + 120;

        pageSections.forEach(section => {

            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scroll >= top && scroll < top + height) {

                navItems.forEach(item => {

                    item.classList.remove("active");

                    if (item.getAttribute("href") === "#" + id) {

                        item.classList.add("active");

                    }

                });

            }

        });

    }

    window.addEventListener("scroll", highlightMenu);

    highlightMenu();

    /*
    ==========================================================
    Product Card Hover Enhancement
    ==========================================================
    */

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /*
    ==========================================================
    Current Year
    ==========================================================
    */

    const year = new Date().getFullYear();

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        copyright.innerHTML =
            `© ${year} Arinova Industries. All Rights Reserved.`;

    }

});