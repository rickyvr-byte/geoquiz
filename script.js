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
};

const themes = {
    default: ['#0d1b2e', '#4fc3f7', 'rgba(255,255,255,0.07)'],
    sunset: ['#1e0f0f', '#ff7b54', 'rgba(255,255,255,0.07)'],
    ocean: ['#061622', '#46a0ff', 'rgba(255,255,255,0.07)'],
    midnight: ['#080808', '#7777ff', 'rgba(255,255,255,0.06)'],
    forest: ['#0a160d', '#4caf50', 'rgba(255,255,255,0.07)'],
    purple: ['#120c1e', '#bb86fc', 'rgba(255,255,255,0.07)'],
    lava: ['#160a0a', '#ff4d4d', 'rgba(255,255,255,0.07)'],
    ice: ['#d0ecff', '#4ba3ff', 'rgba(255,255,255,0.5)'],
    pink: ['#180d14', '#ff69b4', 'rgba(255,255,255,0.07)'],
    gold: ['#160f04', '#ffd166', 'rgba(255,255,255,0.07)'],
    retro: ['#0f0f0f', '#ff8800', 'rgba(255,255,255,0.06)'],
    neon: ['#060606', '#00ffcc', 'rgba(255,255,255,0.05)'],
    matrix: ['#030303', '#00ff00', 'rgba(255,255,255,0.04)'],
    space: ['#090c18', '#7f5cff', 'rgba(255,255,255,0.07)'],
    sky: ['#c4e4ff', '#5fa8ff', 'rgba(255,255,255,0.5)'],
    mint: ['#d4fff3', '#44d7b6', 'rgba(255,255,255,0.5)'],
    rose: ['#160a10', '#ff5c8a', 'rgba(255,255,255,0.07)'],
    amber: ['#150d02', '#ffb347', 'rgba(255,255,255,0.07)'],
    cyber: ['#08080e', '#ff00ff', 'rgba(255,255,255,0.06)'],
    mono: ['#0e0e0e', '#c0c0c0', 'rgba(255,255,255,0.06)']
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
