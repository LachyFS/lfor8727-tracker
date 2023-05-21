import anime from "animejs";

export function errorShakeAnimation(target) {
    anime({
        targets: target,
        translateX: ["0.75em", 0],
    });
}