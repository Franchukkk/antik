fetch('../json/products.json')
    .then(response => response.json())
    .then(productsData => {
        const products = productsData.map(product => {
            const priceDifference = ((product.price - product.initiallPrice) / product.initiallPrice) * 100;
            return { ...product, priceDifference };
        }).sort((a, b) => b.priceDifference - a.priceDifference);

            
        // Функція для виконання пошуку
        function searchProducts(searchInput) {
            
          const searchedProductsContainer = document.querySelector('#searchedProducts');
          // Очищення контейнера перед додаванням результатів
          searchedProductsContainer.innerHTML = '';
          if (searchInput == "") {
            searchedProductsContainer.innerHTML = '<h1>Нічого не знайдено.</h1>';
          }

          // Перетворення введеного тексту в нижній регістр для нечутливого до регістру пошуку
          const searchQuery = searchInput.trim().toLowerCase();

          // Фільтрування продуктів за ім'ям, описом або категорією
          const filteredProducts = products.filter(product => {
            return (
              product.name.toLowerCase().includes(searchQuery) ||
              product.description.toLowerCase().includes(searchQuery) ||
              product.category.toLowerCase().includes(searchQuery)
            );
          });

          // Додавання знайдених продуктів у контейнер
          if (filteredProducts.length > 0) {
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
                      <a href="#" data-value="${product.id}" class="card-btn al-center d-flex justify-content-center">
                        <img src="${JSON.parse(localStorage.getItem('basketProducts') || '[]').includes(product.id) ? "img/tick.svg" : "img/cart.svg"}" alt="cart">
                      </a>
                    </div>
                  </figcaption>
                </figure>
              `;
              searchedProductsContainer.innerHTML += productCard;
            });
          } else {
            // Якщо результатів немає, вивести повідомлення
            searchedProductsContainer.innerHTML = '<h1>Нічого не знайдено.</h1>';
            searchProducts("");
          }
        }

        console.log(localStorage.getItem("searchedProduct"));

        if (document.querySelector('#searchedProducts')) {
            searchProducts(localStorage.getItem("searchedProduct"));
            
        }

});