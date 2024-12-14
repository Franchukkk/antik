document.addEventListener('DOMContentLoaded', function() {
    const burgerSpan = document.querySelector('.burger-list')
    const burgerSpanChild = burgerSpan.querySelector('.burger span')
    const headerSmPopup = document.querySelector('.header-sm-popup')
    const headerSmPopupLinks = headerSmPopup.querySelectorAll('a')



    burgerSpan.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        burgerSpanChild.classList.toggle('active')
        headerSmPopup.classList.toggle('popup-active')

      }
    })

    headerSmPopupLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          if (window.innerWidth <= 768) {
            headerSmPopup.classList.remove('popup-active')
            burgerSpanChild.classList.remove('active')

          }
        })
    })
})


  document.addEventListener('DOMContentLoaded', function() {
  const figures = document.querySelectorAll('.products figure');
  
  figures.forEach(figure => {
      figure.addEventListener('mouseenter', function() {
          if (!this.querySelector('.card-btn:hover')) {
              this.classList.add('show-circle');
          }
      });
      
      figure.addEventListener('mouseleave', function() {
          this.classList.remove('show-circle');
      });
      
      const cardBtn = figure.querySelector('.card-btn');
      if (cardBtn) {
          cardBtn.addEventListener('mouseenter', function() {
              figure.classList.remove('show-circle');
          });
          
          cardBtn.addEventListener('mouseleave', function() {
              figure.classList.add('show-circle');
          });
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = ['search', 'categories', 'aboutus', 'form'];
  const navList = document.getElementById('nav-list');
  const navItems = navList.querySelectorAll('a[data-section]');
  
  const observerOptions = {
      threshold: 0.5
  };

  const observerCallback = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const targetId = entry.target.id;
              navItems.forEach(item => {
                  if (item.getAttribute('data-section') === targetId) {
                      item.parentElement.classList.add('active');
                  } else {
                      item.parentElement.classList.remove('active');
                  }
              });
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartOpenBtns = document.querySelectorAll('.cart-open-btn');
    const basketPopup = document.querySelector('.basket-popup');

    cartOpenBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            basketPopup.classList.toggle('basket-active');
        });
    });
});
