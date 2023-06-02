import anime from "animejs";

export function errorShakeAnimation(target) {
    // in animeJS you can pass in an object with the properties you want to animate given a target
    // where we're animating the translateX property from 0.75em to 0 with the default easing and duration
    anime({
        targets: target,
        translateX: ["0.75em", 0],
    });
}