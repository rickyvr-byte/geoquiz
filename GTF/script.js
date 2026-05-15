let flags = [];
let currentAnswer = "";
let locked = false;

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
        const label = options[index].replace("Flag of ", "");
        button.innerText = label;
        button.style.background = "";
        button.style.borderColor = "";
        button.style.filter = "";

        button.onclick = () => {
            if (locked) return;
            locked = true;

            buttons.forEach(btn => {
                const btnLabel = btn.innerText;
                const correctLabel = currentAnswer.replace("Flag of ", "");
                if (btnLabel === correctLabel) {
                    btn.style.background = "rgba(66,214,122,0.25)";
                    btn.style.borderColor = "#42d67a";
                } else {
                    btn.style.background = "rgba(217,75,75,0.2)";
                    btn.style.borderColor = "#d94b4b";
                }
            });

            button.style.filter = "brightness(1.15)";

            setTimeout(() => {
                nextQuestion();
            }, 2000);
        };
    });
}
