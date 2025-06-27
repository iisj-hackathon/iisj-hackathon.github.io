gsap.defaults({
    ease: "power2.out"
});  // Sets the default easing to be quadratic.

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