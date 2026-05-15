const panel = document.getElementById("settingsPanel");

function toggleSettings() {
    panel.classList.toggle("open");
}

function setColor(variable, color) {
    document.documentElement.style.setProperty(variable, color);
}
