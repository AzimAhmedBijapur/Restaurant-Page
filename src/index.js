import home from "./home";

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById("content");
    const homeContent = home();
    container.appendChild(homeContent);
});

