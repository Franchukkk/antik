document.addEventListener('DOMContentLoaded', function() {
    const burgerSpan = document.querySelector('.burger span')
    const headerSmPopup = document.querySelector('.header-sm-popup')
    const headerSmPopupLinks = headerSmPopup.querySelectorAll('a')

    burgerSpan.addEventListener('click', function() {
        this.classList.toggle('active')
        headerSmPopup.classList.toggle('popup-active')
    })

    headerSmPopupLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            headerSmPopup.classList.remove('popup-active')
            burgerSpan.classList.remove('active')
        })
    })
})
