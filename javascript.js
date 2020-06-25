
document.getElementById('home').onclick = function() {
    let homeSection = document.getElementById("homesection");
    homeSection.style.display = "block";

    let projectsSection = document.getElementById("projectssection");
    projectsSection.style.display = "none";

    let aboutmeSection = document.getElementById("aboutmesection");
    aboutmeSection.style.display = "none";

}

document.getElementById('aboutme').onclick = function() {
    let homeSection = document.getElementById("homesection");
    homeSection.style.display = "none";

    let projectsSection = document.getElementById("projectssection");
    projectsSection.style.display = "none";

    let aboutmeSection = document.getElementById("aboutmesection");
    aboutmeSection.style.display = "block";
}

document.getElementById('projects').onclick = function() {
    let homeSection = document.getElementById("homesection");
    homeSection.style.display = "none";

    let projectsSection = document.getElementById("projectssection");
    projectsSection.style.display = "block";

    let aboutmeSection = document.getElementById("aboutmesection");
    aboutmeSection.style.display = "none";
}