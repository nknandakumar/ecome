
function toggle() {

    const menuIcon = document.getElementById("menu");
    const navItems = document.getElementById("nav-links");

    if (menuIcon.innerHTML=='<i class="fa-solid fa-bars"></i>') {
        navItems.style.display ='flex';
        navItems.classList.add("active");
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // Change to close icon
    } else {
        navItems.style.display ='none';
        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Change back to burger icon
    }
}
