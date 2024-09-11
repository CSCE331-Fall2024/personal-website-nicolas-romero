// Function to toggle between stylesheets
function toggleStyle() {
    var darkTheme = document.getElementById('theme-dark');
    var lightTheme = document.getElementById('theme-light');
    if (darkTheme.disabled) {
        darkTheme.disabled = false;
        lightTheme.disabled = true;
        localStorage.setItem("theme", "dark");
    } else {
        darkTheme.disabled = true;
        lightTheme.disabled = false;
        localStorage.setItem("theme", "light");
    }
}

// Function to retrieve theme from local storage
function applyTheme() {
    var theme = localStorage.getItem("theme");
    var darkTheme = document.getElementById('theme-dark');
    var lightTheme = document.getElementById('theme-light');
    if (theme === "dark") {
        darkTheme.disabled = false;
        lightTheme.disabled = true;
    } else {
        darkTheme.disabled = true;
        lightTheme.disabled = false;
    }
}

// Function to toggle between resume visibility on Career page
function showResume() {
    var x = document.getElementById("resume");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}