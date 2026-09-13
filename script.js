 function openBouquet() {

    const message =
        document.getElementById("message");

    const button =
        document.querySelector("button");


    /* Show message card */

    message.classList.add("show");


    /* Change message */

    message.innerHTML = `

        <div class="card-heart">
            💕
        </div>

        <p>
            You deserve
            all the pretty flowers!
        </p>

        <small>
            Stay happy & keep blooming 🌸
        </small>

    `;


    /* Change button */

    button.innerHTML =
        "🌷 Bouquet for You 🌷";


    /* Create floating hearts */

    createHearts();

}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 15; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            ["💗", "💖", "💕", "💓", "🌸"][
                Math.floor(
                    Math.random() * 5
                )
            ];


        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-30px";

        heart.style.fontSize =
            Math.random() * 15 + 15 + "px";

        heart.style.zIndex = "100";

        heart.style.pointerEvents =
            "none";


        document.body.appendChild(heart);


        /* Animation */

        const animation =
            heart.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(-100vh)
                             rotate(${Math.random() * 360}deg)`,
                        opacity: 0
                    }
                ],

                {
                    duration:
                        Math.random() * 2000 + 2500,

                    easing:
                        "ease-out"
                }

            );


        animation.onfinish = () => {

            heart.remove();

        };

    }

}