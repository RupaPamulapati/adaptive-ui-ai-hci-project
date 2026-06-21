function savePreferences() {

    let theme = document.getElementById("themeSelect").value;
    let font = document.getElementById("fontSelect").value;

    localStorage.setItem("theme", theme);
    localStorage.setItem("font", font);

    applyPreferences();

    document.getElementById("recommendation").innerHTML =
        "Personalized recommendation: Continue studying Human-Computer Interaction and AI concepts based on your selected preferences.";
}

function applyPreferences() {

    document.body.classList.remove("dark-mode");
    document.body.classList.remove("large-font");

    let theme = localStorage.getItem("theme");
    let font = localStorage.getItem("font");

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (font === "large") {
        document.body.classList.add("large-font");
    }
}

window.onload = applyPreferences;
