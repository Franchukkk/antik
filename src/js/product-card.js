// Check if we're on the product card page
// exa,ple of object: {"id":2,"name":"Product 2","description":"This is the second product.","images":["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],"category":"Electronics","price":150}
if (window.location.pathname.includes('product-card.html')) {
    // Get selected product from localStorage
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'))

    if (selectedProduct) {
      // Update main product image
      document.querySelector('.product-card-info-img img').src = selectedProduct.images[0]
    
      // Update thumbnail images
      const thumbnails = document.querySelectorAll('.next-images-line img')
      selectedProduct.images.forEach((image, index) => {
        if (thumbnails[index]) {
          thumbnails[index].src = image
        }
      })

      // Update price
      document.querySelector('.product-price').textContent = `${selectedProduct.price} грн.`

      // Update title
      document.querySelector('#heightJsBlockCard h2').textContent = selectedProduct.name

      // Update description
      const descriptionParagraphs = document.querySelectorAll('#heightJsBlockCard p')
      if (descriptionParagraphs.length > 0) {
        descriptionParagraphs[0].textContent = selectedProduct.description
      }

      // Update cart button with product ID
      const addToCartBtn = document.querySelector('.card-btns .button')
      addToCartBtn.setAttribute('data-value', selectedProduct.id)
      
      // Add click event listener to cart button
      addToCartBtn.addEventListener('click', function() {
        const productId = Number(this.getAttribute('data-value'))
        addToBasket(productId)
      })

      // Display similar products
      const similarProductsContainer = document.querySelector('#productCardsSimilar')
      if (similarProductsContainer) {
        const similarProducts = products.filter(product => 
          product.category === selectedProduct.category && product.id !== selectedProduct.id
        )

        similarProducts.forEach(product => {
          const productCard = document.createElement('figure')
          productCard.className = 'col-6 col-md-4 col-lg-3'
          productCard.innerHTML = `
            <figcaption>
              <div class="figure-image">
                <img src="${product.images[0]}" alt="">
                <a class="figure-to-card-page" href="product-card.html" onclick="localStorage.setItem('selectedProduct', JSON.stringify(${JSON.stringify(product)}))"></a>
              </div>
              <div class="card-text-block d-flex justify-content-between w-100">
                <a class="description-card" href="product-card.html" onclick="localStorage.setItem('selectedProduct', JSON.stringify(${JSON.stringify(product)}))">
                  <p>${product.name}</p>
                  <p class="price">${product.price} грн.</p>
                </a>
                <a class="card-btn al-center d-flex justify-content-center" data-value='${product.id}' href="#">
                  <img src="img/cart.svg" alt="">
                </a>
              </div>
            </figcaption>
          `
          similarProductsContainer.appendChild(productCard)
        })
      }
    }
}
