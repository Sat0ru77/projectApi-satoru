const div = document.getElementById('gallery')

async function getApi() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        allProducts = await response.json()
        console.log(allProducts);
        displayProducts(allProducts)
    } catch (error) {
        console.log(error);
        div.innerHTML = "<p>Erreur de chargement</p>"
    }
}

function displayProducts(products) {
    div.innerHTML = products.map(product => `
        <div class= "card">
        <img src = "${product.image}" alt = "${product.title}">
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        </div>
        `).join('')
}

function filterProducts(category) {
    if (category === 'all') {
        displayProducts(allProducts);
    } else {
        const filteredProducts = allProducts.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}


const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        console.log('Catégorie sélectionnée :', category);
        filterProducts(category);
    });
});

getApi()


