const navLinks = document.querySelectorAll('.navbar-toggler')
const menuToggle = document.getElementById('navbarToggleExternalContent')
const bsCollapse = bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})