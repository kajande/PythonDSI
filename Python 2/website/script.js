// Function to fetch product data from the JSON file
async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error("Erreur lors du chargement des produits:", error);
    }
}

// Function to render products dynamically
function renderProducts(products) {
    const container = document.getElementById('product-container');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <p class="reviews">Avis (${product.reviews})</p>
            <p class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</p>
            <a href="${product.detailsUrl}">Voir les détails</a>
        `;
        container.appendChild(productElement);
    });
}

// Call fetchProducts to load the product data and render the products
fetchProducts();

