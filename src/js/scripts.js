
document.addEventListener('DOMContentLoaded', () => {
  const selectedCategory = localStorage.getItem('selectedCategory');
  const productsCategoryContainer = document.querySelector('#productsCategory');

  if (window.location.pathname.includes('category.html') && productsCategoryContainer && selectedCategory) {
    const categoriesUkr = {
      'Electronics': 'Електроніка',
      'Clocks': 'Годинники',
      'Dishes': 'Посуд',
      'Models': 'Статуетки, моделі',
      'Art': 'Мистецтво',
      'Other': 'Інше',
    }
    document.querySelector(".categories-main h1").innerHTML = categoriesUkr[selectedCategory]
    const filteredProducts = products.filter(product => product.category === selectedCategory);
    console.log(productsCategoryContainer);
    filteredProducts.forEach(product => {
      const productCard = `
        <figure class="col-6 col-md-4 col-lg-3">
          <figcaption>
            <div class="figure-image">
              <img src="${product.images[0]}" alt="${product.name}">
              <a href="product-card.html" class="figure-to-card-page" data-product-id="${product.id}"></a>
            </div>
            <div class="card-text-block d-flex justify-content-between w-100">
              <a href="product-card.html" class="description-card" data-product-id="${product.id}">
                <p>${product.name}</p>
                <p class="price">${product.price} грн.</p>
              </a>
              <a href="#" data-value="${product.id}" class="${JSON.parse(localStorage.getItem('basketProducts') || '[]').includes(product.id) ? "cart-open-btn" : ""} card-btn al-center d-flex justify-content-center">
                <img src="${JSON.parse(localStorage.getItem('basketProducts') || '[]').includes(product.id) ? "img/tick.svg" : "img/cart.svg"}" alt="cart">
              </a>
            </div>
          </figcaption>
        </figure>
      `;

      const cartOpenBtns = document.querySelectorAll('.cart-open-btn');
      const basketPopup = document.querySelector('.basket-popup-js');

      // cartOpenBtns.forEach(btn => {
      //     btn.addEventListener('click', () => {
      //         basketPopup.classList.toggle('basket-active');
      //     });
      // });
      productsCategoryContainer.insertAdjacentHTML('beforeend', productCard);
    });
  }

})

      


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
    const basketPopup = document.querySelector('.basket-popup-js');

    cartOpenBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            basketPopup.classList.toggle('basket-active');
        });
    });

    const checkoutOpenBtns = document.querySelectorAll('.checkout-btn');
    const checkoutPopup = document.querySelector('.check-out-popup-js');

    checkoutOpenBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            event.preventDefault();
            const basketProducts = JSON.parse(localStorage.getItem('basketProducts')) || [];
            if (basketProducts.length !== 0) {

              basketPopup.classList.toggle('basket-active');
              checkoutPopup.classList.toggle('basket-active');

            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heightJsBlockCard = document.querySelector('#heightJsBlockCard');
    const takeJsHeight = document.querySelector('#takeJsHeight');
    if (heightJsBlockCard) {
      heightJsBlockCard.style.height = takeJsHeight.getBoundingClientRect().height + "px";

    }
});




document.addEventListener('DOMContentLoaded', () => {
    const nextImagesContainer = document.querySelector('.next-images-line')
    const mainImage = document.querySelector('.product-card-info-img .bgwhite > img')
    if (nextImagesContainer) {
      nextImagesContainer.addEventListener('click', (e) => {
          if (e.target.tagName === 'IMG') {
              const newSrc = e.target.getAttribute('src')
              mainImage.setAttribute('src', newSrc)
          }
      })

    }
})
  
    document.addEventListener('DOMContentLoaded', () => {
        const checkOutOpenReadyPopup = document.querySelector('.check-out-open-ready-popup')
        const succsessfulOrder = document.querySelector('.succsessful-order')

        checkOutOpenReadyPopup.addEventListener('click', (e) => {
        
            const form = document.getElementById('checkOutForm')
            const inputs = form.querySelectorAll('input:not([name="userPromo"])')
            let isValid = true
  
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false
                }
            })
  
            if (!isValid) {
                return
            } else {
                e.preventDefault()
                document.querySelector('.check-out-popup-js').classList.toggle('basket-active');
        
                const formData = {
                    name: form.querySelector('input[name="userName"]').value,
                    phone: form.querySelector('#phoneInput').value,
                    promo: form.querySelector('input[type="text"][name="userPromo"]').value,
                    deliveryType: form.querySelector('input[name="deliveryType"]:checked').nextElementSibling.textContent,
                    city: form.querySelector('input[name="city"]').value,
                    department: form.querySelector('input[name="department"]').value
                }

                const basketProducts = JSON.parse(localStorage.getItem('basketProducts')) || [];
                const orderedProducts = basketProducts.map(id => {
                    const product = products.find(p => p.id === id);
                    return {
                        name: product.name,
                        price: product.price,
                        photo: product.images[0]
                    };
                });

                let totalPrice = orderedProducts.reduce((sum, product) => sum + product.price, 0);
                let discountedPrice = totalPrice;
            
                if (formData.promo) {
                    const foundPromo = promos.find(p => p.promo === formData.promo);
                    if (foundPromo) {
                        discountedPrice = totalPrice - (totalPrice * foundPromo.discount / 100);
                    }
                }

                const productsMessage = orderedProducts.map(product => 
                    `${product.name} - ${product.price} грн`
                ).join('\n');

                const imgUrl = orderedProducts.map(product => 
                  `${product.photo}`
              )

              console.log(imgUrl);
              


                const message = `
    <b>Нове замовлення!</b>
    <b>Ім'я:</b> ${formData.name}
    <b>Телефон:</b> ${formData.phone}
    <b>Промокод:</b> ${formData.promo || 'Не вказано'}
    <b>Спосіб доставки:</b> ${formData.deliveryType}
    <b>Місто:</b> ${formData.city}
    <b>Відділення:</b> ${formData.department}
    


    <b>Замовлені товари:</b>
    
    ${productsMessage}

    <b>Загальна сума без знижки:</b> ${totalPrice} грн
    <b>Загальна сума до сплати:</b> ${discountedPrice} <i>грн ${formData.promo ? '(з урахуванням промокоду)' : ''}</i>
    `;

                const BOT_TOKEN = '7936445587:AAHV5lZ4RV6fW2w5vE75qfMRg27VUtuDDo0';
                const CHAT_ID = '-1002442277202';
                fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      chat_id: CHAT_ID,
                      text: message,
                      parse_mode: 'HTML'
                  })
              });
                

                setTimeout(function() {
                  imgUrl.forEach(function (url) {
                    let imageUrl = 'https://raw.githubusercontent.com/Franchukkk/antik/refs/heads/master/docs/' +  url;
  
  
                    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        chat_id: CHAT_ID,
                        photo: imageUrl,
                      })
                    })
                    .then(response => response.json())
                    
                    .catch(error => {
                      console.error('Помилка:', error);
  
                    });
                  })
                }, 1000)

                


                
                


                succsessfulOrder.classList.toggle('d-none');

                localStorage.clear();

            }
        })
        // const feedbackOutOpenReadyPopup = document.querySelectorAll('.feedback-popup-open')
        // const succsessfulFeedback = document.querySelector('.succsessful-feedback')

        // feedbackOutOpenReadyPopup.forEach(btn => {
        //     btn.addEventListener('click', (e) => {
        //         e.preventDefault()
        //         succsessfulFeedback.classList.toggle('d-none')
        //     })
        // })
    })
  
    const productsContainer = document.querySelector('#products');
    const basketContainer = document.querySelector('#productsInBasket');
    const totalPriceContainer = document.querySelector('#totalPrice');
    const checkoutBtn = document.querySelector('#checkoutBtn');




    const productsByCategory = {};
    products.forEach(product => {
        if (!productsByCategory[product.category]) {
            productsByCategory[product.category] = [];
        }
        if (productsByCategory[product.category].length < 2) {
            productsByCategory[product.category].push(product);
        }
    });









    function updateProducts () {
      const sortedProducts = [];

      
      // First add products with rating 1
      Object.values(productsByCategory).flat().forEach(product => {
          if (product.rating === 1) {
              sortedProducts.push(product);
          }
      });
      
      // Then add remaining products
      Object.values(productsByCategory).flat().forEach(product => {
          if (product.rating !== 1) {
              sortedProducts.push(product);
          }
      });
      
      sortedProducts.forEach(product => {
          const productCard = `
              <figure class="col-6 col-md-4 col-lg-3">
                  <figcaption>
                      <div class="figure-image">
                          <img src="${product.images[0]}" alt="${product.name}">
                          <a href="product-card.html" class="figure-to-card-page" data-product-id="${product.id}"></a>
                      </div>
                      <div class="card-text-block d-flex justify-content-between w-100">
                          <a href="product-card.html" class="description-card" data-product-id="${product.id}">
                              <p>${product.name}</p>
                              <p class="price">${product.price} грн.</p>
                          </a>
                          <a href="#" data-value="${product.id}" class="${JSON.parse(localStorage.getItem('basketProducts') || '[]').includes(product.id) ? "cart-open-btn" : ""} card-btn al-center d-flex justify-content-center">
                              <img src="${JSON.parse(localStorage.getItem('basketProducts') || '[]').includes(product.id) ? "img/tick.svg" : "img/cart.svg"}" alt="cart">
                          </a>
                      </div>
                  </figcaption>
              </figure>
          `;

          const cartOpenBtns = document.querySelectorAll('.cart-open-btn');
          const basketPopup = document.querySelector('.basket-popup-js');


          if (productsContainer) {
            productsContainer.insertAdjacentHTML('beforeend', productCard);
          }
      });

    }

    updateProducts()





















    function addToBasket(productId) {
        let basketProducts = JSON.parse(localStorage.getItem('basketProducts')) || [];
        if (!basketProducts.includes(productId)) {
            basketProducts.push(productId);
            localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
        }
        updateBasket();
    }


    function removeFromBasket(productId) {
        let basketProducts = JSON.parse(localStorage.getItem('basketProducts')) || [];
        basketProducts = basketProducts.filter(id => id !== productId);
        localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
        updateBasket();
    }



















    function updateBasket() {
        let basketProducts = JSON.parse(localStorage.getItem('basketProducts')) || [];
        basketProducts = basketProducts.filter(id => id !== null);
        localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
        basketContainer.innerHTML = '';
    





        if (basketProducts.length === 0) {
            basketContainer.innerHTML = '<h2>Кошик пустий</h2>';
            totalPriceContainer.textContent = 'Кошик пустий';
            checkoutBtn.disabled = true;
            return;
        }
    































        let totalPrice = 0;
        basketProducts.forEach(productId => {
            const product = products.find(p => p.id === productId);
            if (product) {
                totalPrice += product.price;
                const basketCard = `
                    <div class="col-6 col-md-4 col-lg-3">
                        <figure class="figure-basket">
                            <figcaption>
                                <div class="figure-image">
                                    <img src="${product.images[0]}" alt="${product.name}">
                                    <a href="product-card.html" class="figure-to-card-page" data-product-id="${product.id}"></a>
                                </div>
                                <div class="card-text-block d-flex justify-content-between w-100">
                                    <a href="product-card.html" class="description-card" data-product-id="${product.id}">
                                        <p>${product.name}</p>
                                        <p class="price">${product.price} грн.</p>
                                    </a>
                                    <a href="#" onclick="removeFromBasket(${product.id})" class="card-btn al-center d-flex justify-content-center align-items-center">
                                        <img src="img/cross.svg" alt="remove">
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                `;
                basketContainer.insertAdjacentHTML('beforeend', basketCard);
            }
        });
        totalPriceContainer.textContent = `${totalPrice != 0 ? totalPrice + "грн." : 'Кошик пустий'}`;
        document.querySelector("#allPriceWithPromo").textContent = `${totalPrice != 0 ? totalPrice + "грн." : 'Кошик пустий'}`;
        checkoutBtn.disabled = false;
    }






    document.addEventListener('click', (e) => {

                if (e.target.closest('.card-btn')) {
                    e.preventDefault();

                    e.target.closest('.card-btn').classList.add("cart-open-btn");

                    e.target.closest('.card-btn').querySelector("img").src = "img/tick.svg"
                    e.target.closest('.card-btn').addEventListener('click', () => {
                        basketPopup.classList.toggle('basket-active');
                    });
                    const productId = parseInt(e.target.closest('.card-btn').dataset.value);
                    const cartOpenBtns = document.querySelectorAll('.cart-open-btn');
                    const basketPopup = document.querySelector('.basket-popup-js');

                    // cartOpenBtns.forEach(btn => {
                        // btn.addEventListener('click', () => {
                        //     basketPopup.classList.toggle('basket-active');
                        // });
                    // });
                    addToBasket(productId);
                    // basketPopup.classList.toggle('basket-active');
                }
    








        if (e.target.closest('a[href="product-card.html"]')) {
            const productId = parseInt(e.target.closest('a').dataset.productId);
            const product = products.find(p => p.id === productId);
            if (product) {
                localStorage.setItem('selectedProduct', JSON.stringify(product));
            }
        }
    });




    document.querySelector('#cartUpdate').addEventListener('click', () => {
        updateBasket();
    });



//   const promos = [
//   {
//         promo: "123456",
//         discount: 10
//     },
//     {
//         promo: "654321",
//         discount: 20
//     },
//     {
//         promo: "987654",
//         discount: 30
//     }
// ];
const promoInput = document.querySelector('input[name="userPromo"]');


  promoInput.addEventListener('input', (e) => {
      const enteredPromo = e.target.value;
      const foundPromo = promos.find(p => p.promo === enteredPromo);
      const priceElement = document.querySelector('#allPriceWithPromo');
      const currentPrice = parseInt(priceElement.textContent);
    
      if (foundPromo && currentPrice) {
          const discountAmount = currentPrice * (foundPromo.discount / 100);
          const newPrice = currentPrice - discountAmount;
          priceElement.textContent = `${Math.round(newPrice)}грн.`;
          document.querySelector("#isPromoUsed").textContent = "Промокод (застосовано)"
          localStorage.setItem('promo', enteredPromo);
      } else {
          priceElement.textContent = document.querySelector('#totalPrice').textContent;
          document.querySelector("#isPromoUsed").textContent = "Промокод"
      }
  });



document.addEventListener('DOMContentLoaded', () => {

if (document.querySelector('.contact-form#form')) {



document.querySelector('.contact-form#form').addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const inputs = e.target.querySelectorAll('input')
    const name = inputs[0].value
    const phone = inputs[1].value
    const messenger = inputs[2].value
    const message = inputs[3].value

    const botToken = '7936445587:AAHV5lZ4RV6fW2w5vE75qfMRg27VUtuDDo0'
    const chatId = '-1002442277202'
;
    
    const text = `
Нове звернення:
Ім'я: ${name}
Телефон: ${phone}
Месенджер: ${messenger}
Повідомлення: ${message}
    `

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text
            })
        })

        if (response.ok) {
            e.target.reset()
        } else {
            throw new Error('Помилка при відправці')
        }
    } catch (error) {
        console.error(error)
    }


    const succsessfulFeedback = document.querySelector('.succsessful-feedback')

    succsessfulFeedback.classList.toggle('d-none')
})
}
})

const feedbackOutOpenReadyPopup = document.querySelectorAll('.feedback-popup-open')
const succsessfulFeedback = document.querySelector('.succsessful-feedback')

feedbackOutOpenReadyPopup.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        succsessfulFeedback.classList.toggle('d-none')
    })
})


  const categoryLinks = document.querySelectorAll('.category-link')

  categoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          const categoryValue = e.currentTarget.dataset.value
          localStorage.setItem('selectedCategory', categoryValue)
      })
  })



  




  
    const readMoreBtns = document.querySelectorAll('.read-more-btn')
    const mobileHiddenContents = document.querySelectorAll('.mobile-hidden')

    readMoreBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            mobileHiddenContents[index].classList.toggle('mobile-hidden')
            btn.textContent = mobileHiddenContents[index].classList.contains('mobile-hidden') ? 'Читати далі' : 'Згорнути'
        })
    })