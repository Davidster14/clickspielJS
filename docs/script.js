class Game {
    constructor() {
        this.duration; // Dauer in sekunden
        this.points; // Punkte erreicht
        this.countdown; // Zeit Intervall
        this.status;
    }
    start = () => {};
    pause = () => {};
    resume = () => {};
    stop = () => {};
}
const getRandomPostion = (playarea, target) => {
    const top = Math.random() * (playarea.height - target.height);
    const left = Math.random() * (playarea.width - target.width);
};
document.addEventListener("DOMContentLoaded"),
    (event) => {
        console.log("Hello World");
    };

const e_target = document.getElementById("target");
const e_playarea = document.getElementById("playarea");

const playarea = {
    width: 800,
    height: 600
};

e_playarea.addEventListener("click"),
    (event) => {
        console.log(event, target === e_target ? "Treffer" : "Daneben");
        const top = Math.random() * (playarea.height - target.height);
        const left = Math.random() * (playarea.width - target.width);
        e_target.style.top = "$(top)px;";
        e_target.style.left = "$(left)px";
    };

let points = 0;

const position = getRandomPostion(target, playarea);
setPosition(position, e_target);

if (event.target === e_target) {
    points += 1;
}
