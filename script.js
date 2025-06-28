gsap.defaults({
    ease: "power2.out",
    duration: 0.3
});  /* Sets the default easing to be quadratic,
        and sets the default duration to 0.3s. */

/* Runs an animation on an element when the
   element is hovered over. This function
   automatically handles animation problems. */
function addHoverAnimation(timeline, timelineExitTime, element) {
    element.addEventListener("mouseenter", () => {
        if (timeline.time() < timelineExitTime) {
            timeline.play();
        } else {
            timeline.restart();
        }
    });
    element.addEventListener("mouseleave", () => {
        if (timeline.time() < timelineExitTime) {
            timeline.reverse();
        } else {
            timeline.play();
        }
    });
}

// Title hover effect
const title = document.querySelector("#slide-1 h1");
let titleHoverAnim = gsap.timeline({ paused: true });
titleHoverAnim.to(title, {
    background: "linear-gradient(to right, #8ce8f87f 100%, #0000 100%, #0000 100%)",
    duration: 0.3
})
.addPause()
.to(title, {
    background: "linear-gradient(to right, #8ce8f87f 0%, #0000 0%, #0000 100%)",
    duration: 0.2
});

addHoverAnimation(titleHoverAnim, 0.3, title);

// Image carousel animations
const hCarouselImgs = document.querySelectorAll("#horizontal-carousel > img");

for (let image of hCarouselImgs) {
    gsap.set(image, {
        scale: 0.7,
        filter: "brightness(0.5)"
    });

    let tl = gsap.timeline({ paused: true });
    tl.to(image, {
        scale: 1,
        filter: "brightness(1)"
    })
    .addPause()
    .to(image, {
        scale: 0.7,
        filter: "brightness(0.5)"
    });

    addHoverAnimation(tl, 0.3, image);
}

// Animations for slide 2 cards
const cards = document.querySelectorAll(".slide-2-card");

for (let card of cards) {
    let tl = gsap.timeline({ paused: true });
    tl.to(card, {
        transform: "scaleX(1.1)"
    })
    .addPause()
    .to(card, {
        transform: "scaleX(1)"
    });

    addHoverAnimation(tl, 0.3, card);
}
