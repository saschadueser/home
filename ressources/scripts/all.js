
// TypeofEvents for navigating through the page
 
const eventsForNavigating = ["click", "keydown"];
 
// General Observer Options
let observerOptions = {
    threshold: 0.5,
    rootMargin: "10px"
};
 
if(window.innerWidth < 1028) {
    observerOptions.threshold = 0.3;
}
 
// Handling header navigation
const navTrigger = document.querySelector("header .nav-trigger"); const nav = document.querySelector("header nav");
const navItems = document.querySelectorAll("header nav a");
const serviceItem = document.querySelectorAll(".service-item");
 
eventsForNavigating.forEach( event =>
    navTrigger.addEventListener(event, (e) => {
        if(navTrigger.classList.contains("fa-bars")) {
            navTrigger.classList.remove("fa-bars");
            navTrigger.classList.add("fa-xmark");
        } else {
            navTrigger.classList.remove("fa-xmark");
            navTrigger.classList.add("fa-bars");
        }
        nav.classList.toggle("show");
    })
)
 
// Intro section
const introSection = document.querySelector("section#intro")
 
// Handling expanding button in Service area
serviceItem.forEach( el => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("fa", "fa-circle-plus")
    el.appendChild(newDiv);
    el.title="Mehr anzeigen";
});
 
const serviceShowMoreButton = document.querySelectorAll("#service .fa-circle-plus");
 
eventsForNavigating.forEach( event => {
    serviceShowMoreButton.forEach( (el,index) => {
        el.addEventListener(event, (e) => {
            serviceItem[index].classList.toggle("show");
            e.target.classList.toggle("fa-circle-minus")
        })
    })
})
 
// Animating service Kacheln
 
serviceItem.forEach( item => {
    item.style.opacity="0";
})
 
const serviceSection = document.querySelector("#service");
 
const serviceObserver = new IntersectionObserver( (entries) => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            serviceItem.forEach( (item, index) => {
                setTimeout(() => {
                    item.style.opacity = "1"
                }, index * 150);
            })
        }
    })
}, observerOptions )
 
serviceObserver.observe(serviceSection)
 
 
// Handling project logo clicks
const projektLogos = document.querySelectorAll(".projekt-logo");
const projektBeschreibung = document.querySelector(".projekt-beschreibung-wrapper");
 
eventsForNavigating.forEach( event => {
    projektLogos.forEach( (el, index) => {
        el.addEventListener(event, (e) => {
            projektBeschreibung.style.transform = `translateX(-${index*100}%)`;
            el.classList.add("show")
        })
    })
 
})
 
// Handling validity of form
const formInputElements = document.querySelectorAll("form .datainput");
 
formInputElements.forEach( el => {
    el.addEventListener("input", (e) => {
        if(el.validity.valid) {
            e.target.classList.remove("invalid")
            console.log("its valid");
        } else {
            e.target.classList.add("invalid")
            console.log(el.validity);
        }
    })
})
 
// Animating for hero section
 
const heroHeadline = document.querySelector("#hero h1");
const heroText = document.querySelector("#hero p");
const heroButton = document.querySelector("#hero .button");
 
document.addEventListener("scroll", (e) => {
    heroHeadline.style.transform = `translateX(${window.scrollY/8}%) translateY(${window.scrollY/3}%)`;
 
    heroText.style.opacity = `${1-window.scrollY/300}`;
    heroText.style.transform = `translateY(${window.scrollY/2}%)`;
 
    heroButton.style.transform = `scale(${1+window.scrollY/400})`;
    if(window.scrollY > 275) {
        heroButton.style.opacity = "0";
        heroButton.style.pointerEvents = "none"
    } else {
        heroButton.style.opacity = "1";
        heroButton.style.pointerEvents = "initial"
    }
})
 
// Projekte Observer
 
const projekteSection = document.querySelector("#projekte");
const projektVorschau = document.querySelector(".projekt-vorschau");
 
const projektObserver = new IntersectionObserver( (entries) => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            projektLogos.forEach( el => {
                setTimeout(() => {
                    el.style.opacity = "1"
                }, 1000);
            })
            projektVorschau.style.transform = "translateX(0)";
            projektVorschau.style.opacity = "1";
            setTimeout(() => {
                projektBeschreibung.style.opacity="1";
            }, 600);
        }
    })
}, observerOptions )
 
projektObserver.observe(projekteSection)
 
// About
 
const aboutSection = document.querySelector("#about")
 
// Kontakt Observer
 
const kontaktSection = document.querySelector("#kontakt");
const contactOptions = document.querySelector(".contact-options");
const formElements = document.querySelectorAll(".form-element");
contactOptions.style.transform="translateX(100%)";
contactOptions.style.opacity="0";
 
const kontaktObserver = new IntersectionObserver( (entries) => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            setTimeout(() => {
                contactOptions.style.transform="translateX(0)";
                contactOptions.style.opacity="1";
            }, 500);
        }
    })
}, observerOptions )
 
kontaktObserver.observe(kontaktSection)
 
// Footer
const footerLinks = document.querySelectorAll("footer a");
 
 
// making tabindexes
 
const tabIndexElements = [navTrigger, navItems, heroButton, introSection, serviceSection, serviceShowMoreButton, projekteSection, projektLogos, aboutSection, kontaktSection, formElements, footerLinks];
let lastTabIndex = 1;
 
tabIndexElements.forEach( (el) => {
    if(el.length > 1) {
        el.forEach( (listEl) => {
            listEl.setAttribute("tabindex", lastTabIndex++)
        } )
    } else {
        el.setAttribute("tabindex", lastTabIndex++)
    }              
})