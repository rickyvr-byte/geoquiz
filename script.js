const panel = document.getElementById("settingsPanel");

function toggleSettings() {
    panel.classList.toggle("open");
}

function setColor(variable, color) {
    document.documentElement.style.setProperty(variable, color);

    localStorage.setItem(variable, color);
}

window.onload = () => {

    [
        '--bg-color',
        '--accent-color',
        '--panel-color'
    ].forEach(variable => {

        const saved = localStorage.getItem(variable);

        if (saved) {
            document.documentElement.style.setProperty(variable, saved);
        }
    });
};

const themes = {
    default: ['#1f242b', '#ffb86c', '#2a3038'],
    sunset: ['#2b1f1f', '#ff7b54', '#3a2b2b'],
    ocean: ['#16222f', '#46a0ff', '#223244'],
    midnight: ['#121212', '#7777ff', '#1f1f1f'],
    forest: ['#18231c', '#4caf50', '#243228'],
    purple: ['#201828', '#bb86fc', '#2d2238'],
    lava: ['#2a1818', '#ff4d4d', '#3a2323'],
    ice: ['#dff6ff', '#4ba3ff', '#b8dff5'],
    pink: ['#2b1f28', '#ff69b4', '#3a2937'],
    gold: ['#2b2418', '#ffd166', '#3a3224'],
    retro: ['#202020', '#ff8800', '#353535'],
    neon: ['#101010', '#00ffcc', '#1d1d1d'],
    matrix: ['#050505', '#00ff00', '#121212'],
    space: ['#131524', '#7f5cff', '#1d2033'],
    sky: ['#dbefff', '#5fa8ff', '#c7def5'],
    mint: ['#e6fff7', '#44d7b6', '#c7f3e7'],
    rose: ['#2b1c23', '#ff5c8a', '#3a2831'],
    amber: ['#2c2218', '#ffb347', '#3d2f23'],
    cyber: ['#16161a', '#ff00ff', '#24242b'],
    mono: ['#1d1d1d', '#c0c0c0', '#2d2d2d']
};

function setTheme(name) {

    const theme = themes[name];

    document.documentElement.style.setProperty('--bg-color', theme[0]);
    document.documentElement.style.setProperty('--accent-color', theme[1]);
    document.documentElement.style.setProperty('--panel-color', theme[2]);

    localStorage.setItem('--bg-color', theme[0]);
    localStorage.setItem('--accent-color', theme[1]);
    localStorage.setItem('--panel-color', theme[2]);
}
