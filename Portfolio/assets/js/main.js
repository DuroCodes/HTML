const showMenu = (e, t) => {
    const l = document.getElementById(e);
    const a = document.getElementById(t);
    l && a &&
        l.addEventListener("click", () => {
            a.classList.toggle("show");
        });
};
showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
    navLink.forEach((e) => e.classList.remove("active"))
    this.classList.add("active");
    document.getElementById("nav-menu").classList.remove("show");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2e3,
    reset: !0,
});

sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", { delay: 200 });
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 400 });
sr.reveal(".work__img", { interval: 200 });
sr.reveal(".contact__input", { interval: 200 });
