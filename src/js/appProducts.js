// fetch('../json/products.json')
//     .then(response => response.json())
//     .then(productsData => {
//         const products = productsData.map(product => {
//             const priceDifference = ((product.price - product.initiallPrice) / product.initiallPrice) * 100;
//             return { ...product, priceDifference };
//         }).sort((a, b) => b.priceDifference - a.priceDifference);

//         console.log(products);
//     });