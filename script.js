const panel = document.getElementById("settingsPanel");

function toggleSettings() {
    panel.classList.toggle("open");
}

function setColor(variable, color) {
    document.documentElement.style.setProperty(variable, color);
    localStorage.setItem(variable, color);
}

const themes = {
    default:   { '--bg': '#1e1e1e', '--accent': '#e87d3e', '--surface': '#2a2a2a', '--surface2': '#333333', '--border': '#3d3d3d', '--text': '#f0f0f0' },
    sunset:    { '--bg': '#1a1010', '--accent': '#ff6b35', '--surface': '#251818', '--surface2': '#2e2020', '--border': '#3d2a2a', '--text': '#f5e8e0' },
    ocean:     { '--bg': '#0d1520', '--accent': '#3a9dd4', '--surface': '#131e2b', '--surface2': '#192636', '--border': '#243344', '--text': '#ddeeff' },
    midnight:  { '--bg': '#080808', '--accent': '#6060ff', '--surface': '#111111', '--surface2': '#1a1a1a', '--border': '#282828', '--text': '#e0e0ff' },
    forest:    { '--bg': '#0e1510', '--accent': '#4caf50', '--surface': '#141d16', '--surface2': '#1b261d', '--border': '#263829', '--text': '#d8f0da' },
    purple:    { '--bg': '#110e18', '--accent': '#9b59b6', '--surface': '#181322', '--surface2': '#1f182b', '--border': '#2e2040', '--text': '#ecdeff' },
    lava:      { '--bg': '#180a0a', '--accent': '#e84040', '--surface': '#220e0e', '--surface2': '#2c1212', '--border': '#3d1c1c', '--text': '#ffe0e0' },
    ice:       { '--bg': '#e8f4ff', '--accent': '#3a8fd4', '--surface': '#d8ecf8', '--surface2': '#cce4f4', '--border': '#b8d4e8', '--text': '#1a2a3a' },
    pink:      { '--bg': '#160e12', '--accent': '#e85890', '--surface': '#1e1218', '--surface2': '#271620', '--border': '#3a2030', '--text': '#ffe0ee' },
    gold:      { '--bg': '#141008', '--accent': '#d4a020', '--surface': '#1c1610', '--surface2': '#241c14', '--border': '#382a18', '--text': '#fff0cc' },
    retro:     { '--bg': '#0c0c0c', '--accent': '#ff8800', '--surface': '#141414', '--surface2': '#1c1c1c', '--border': '#2c2c2c', '--text': '#ffe8c0' },
    neon:      { '--bg': '#050505', '--accent': '#00ffcc', '--surface': '#0d0d0d', '--surface2': '#151515', '--border': '#1c1c1c', '--text': '#ccfff5' },
    matrix:    { '--bg': '#020802', '--accent': '#00cc00', '--surface': '#081008', '--surface2': '#0d180d', '--border': '#142414', '--text': '#a0ffa0' },
    space:     { '--bg': '#080c18', '--accent': '#7060e0', '--surface': '#0e1220', '--surface2': '#141828', '--border': '#202840', '--text': '#d8d0ff' },
    sky:       { '--bg': '#c8e8ff', '--accent': '#2080d0', '--surface': '#b8dcf8', '--surface2': '#a8d0f0', '--border': '#90c0e8', '--text': '#0a1a2a' },
    mint:      { '--bg': '#d0fff2', '--accent': '#20a890', '--surface': '#c0f5e8', '--surface2': '#b0ecde', '--border': '#90ddd0', '--text': '#062820' },
    rose:      { '--bg': '#140a0e', '--accent': '#e04870', '--surface': '#1c0e14', '--surface2': '#25121c', '--border': '#38202c', '--text': '#ffdde8' },
    amber:     { '--bg': '#130e04', '--accent': '#e8a030', '--surface': '#1c1408', '--surface2': '#261c0c', '--border': '#382c14', '--text': '#fff0cc' },
    cyber:     { '--bg': '#06060c', '--accent': '#ff00cc', '--surface': '#0e0e18', '--surface2': '#161620', '--border': '#242430', '--text': '#ffd0ff' },
    mono:      { '--bg': '#111111', '--accent': '#aaaaaa', '--surface': '#1a1a1a', '--surface2': '#222222', '--border': '#303030', '--text': '#e0e0e0' },
};

function setTheme(name) {
    const theme = themes[name];
    Object.entries(theme).forEach(([variable, value]) => {
        document.documentElement.style.setProperty(variable, value);
        localStorage.setItem(variable, value);
    });
}

window.onload = () => {
    ['--bg', '--accent', '--surface', '--surface2', '--border', '--text'].forEach(v => {
        const saved = localStorage.getItem(v);
        if (saved) document.documentElement.style.setProperty(v, saved);
    });
};
