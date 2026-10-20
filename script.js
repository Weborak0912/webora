/* WEBORA K */

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
