const panel = document.getElementById("settingsPanel");

function toggleSettings() {
    panel.classList.toggle("open");
}

function setColor(variable, color) {
    document.documentElement.style.setProperty(variable, color);
    localStorage.setItem(variable, color);
}

window.onload = () => {
    ['--bg-color', '--accent-color', '--panel-color'].forEach(variable => {
        const saved = localStorage.getItem(variable);
        if (saved) {
            document.documentElement.style.setProperty(variable, saved);
        }
    });

    loadFlags();
};

async function loadFlags() {
    const response = await fetch("flags.json");
    flags = await response.json();
    nextQuestion();
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let flags = [];
let currentAnswer = "";
let locked = false;

function nextQuestion() {

    locked = false;

    const randomFlag = flags[Math.floor(Math.random() * flags.length)];

    currentAnswer = randomFlag.country;

    document.getElementById("flag-image").src = randomFlag.image;

    let options = [currentAnswer];

    while (options.length < 5) {
        const randomCountry = flags[Math.floor(Math.random() * flags.length)].country;
        if (!options.includes(randomCountry)) {
            options.push(randomCountry);
        }
    }

    options = shuffle(options);

    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {

        button.innerText = options[index].replace("Flag of ", "");

        button.style.background = "var(--button-color)";
        button.style.filter = "brightness(1)";

        button.onclick = () => {

            if (locked) return;

            locked = true;

            buttons.forEach(btn => {
                if (btn.innerText === currentAnswer.replace("Flag of ", "")) {
                    btn.style.background = "#42d67a";
                } else {
                    btn.style.background = "#d94b4b";
                }
            });

            button.style.filter = "brightness(1.2)";

            setTimeout(() => {
                nextQuestion();
            }, 2000);
        };
    });
}
