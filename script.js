function hamburgerMenu(e) {
    var menu = document.getElementById("navClick");
    if (menu.className === "nav-menu") {
        menu.className += " resposive-menu";
    }
    else {
        menu.className = "nav-menu";
    }
    
    e.preventDefault();
}