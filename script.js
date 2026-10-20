```javascript
/* =========================
   WEBORA K
   INTERACTIVE DEMOS
========================= */


/* GET ELEMENTS */

const demoOverlay =
    document.getElementById("demoOverlay");

const demoWindow =
    document.querySelector(".demo-window");

const demoClose =
    document.getElementById("demoClose");

const demoButtons =
    document.querySelectorAll(".demo-button");


const demos = {

    salon:
        document.getElementById("salonDemo"),

    doctor:
        document.getElementById("doctorDemo"),

    restaurant:
        document.getElementById("restaurantDemo")

};


/* =========================
   OPEN DEMO
========================= */

function openDemo(type) {

    /* Hide every demo */

    Object.values(demos).forEach(
        demo => {

            demo.classList.remove("active");

        }
    );


    /* Show selected demo */

    if (demos[type]) {

        demos[type].classList.add("active");

    }


    /* Open overlay */

    demoOverlay.classList.add("active");


    /* Prevent background scrolling */

    document.body.style.overflow =
        "hidden";


    /* Scroll demo to top */

    demoWindow.scrollTop = 0;

}


/* =========================
   CLOSE DEMO
========================= */

function closeDemo() {

    demoOverlay.classList.remove("active");


    document.body.style.overflow =
        "";

}


/* =========================
   DEMO BUTTONS
========================= */

demoButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const type =
                this.getAttribute("data-demo");

            openDemo(type);

        }
    );

});


/* =========================
   CLOSE BUTTON
========================= */

demoClose.addEventListener(
    "click",
    closeDemo
);


/* =========================
   CLICK OUTSIDE
========================= */

demoOverlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target === demoOverlay
        ) {

            closeDemo();

        }

    }
);


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeDemo();

        }

    }
);


/* =========================
   CLIENT CTA BUTTONS
========================= */

const clientButtons =
    document.querySelectorAll(
        ".client-demo-button"
    );


clientButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            closeDemo();


            setTimeout(() => {

                const contact =
                    document.getElementById(
                        "contact"
                    );


                if (contact) {

                    contact.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }, 350);

        }
    );

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .work-card, .price-card, .process-item, .why-grid > div"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(
            element
        );

    }
);


/* =========================
   REVEAL STYLE
========================= */

const revealStyle =
    document.createElement("style");


revealStyle.textContent = `

    .service-card.visible,
    .work-card.visible,
    .price-card.visible,
    .process-item.visible,
    .why-grid > div.visible {

        opacity: 1 !important;

        transform:
            translateY(0) !important;

    }

`;


document.head.appendChild(
    revealStyle
);
```
