/* --- Data --- */
const categories = [
    "Household Essentials", "Electronics", "Grocery", "Fruit & Vegetables", 
    "Meats & Seafood", "Dairy Products", "Pharmacy", "Cleaning & Laundry", 
    "Cosmetics", "Snacks", "Stationeries", "Clothing & Accessories"
];

// Mock Product Data
const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 9999.99, img: "https://i.pinimg.com/736x/62/08/8c/62088c025befc3e2c0b68a7e7d6ae770.jpg" },
    { id: 2, name: "Smart Watch", category: "Electronics", price: 14950.50, img: "https://i.pinimg.com/736x/89/b1/26/89b126e63581c376709935ee1b00b2be.jpg" },
    { id: 3, name: "Organic Apples", category: "Fruit & Vegetables", price: 499.99, img: "https://i.pinimg.com/1200x/cf/39/c9/cf39c9a9789abc51124191dcea5d700f.jpg" },
    { id: 4, name: "Fresh Milk", category: "Dairy Products", price: 250.50, img: "https://i.pinimg.com/736x/cb/42/0a/cb420aca1fe7dfd53d6bea9f816a3f8b.jpg" },
    { id: 5, name: "Laundry Detergent", category: "Cleaning & Laundry", price: 1200.00, img: "https://i.pinimg.com/736x/36/54/37/365437d21b559b265e427a3af0a28994.jpg" },
    { id: 6, name: "Mens T-Shirt", category: "Clothing & Accessories", price: 2200.00, img: "https://i.pinimg.com/736x/e0/55/e7/e055e7c3cde15294e420c6bca753ab06.jpg" },
    { id: 7, name: "Face Cream", category: "Cosmetics", price: 2200.00, img: "https://i.pinimg.com/736x/07/1e/74/071e740782bdcb8aafa481624dff5ef7.jpg" },
    { id: 8, name: "Notebook Set", category: "Stationeries", price: 899.00, img: "https://i.pinimg.com/736x/57/f1/eb/57f1ebac711b2dca01bba02eff5f5cc7.jpg" },
    { id: 9, name: "Potato Chips", category: "Snacks", price: 350.00, img: "https://i.pinimg.com/736x/3e/87/55/3e875504e5ca214d70ca4ef7342c1b09.jpg" },
    { id: 10, name: "Chicken Breast", category: "Meats & Seafood", price: 1899.00, img: "https://i.pinimg.com/1200x/a7/46/77/a74677a481cee2163ca06d2a5bba7a9c.jpg" },
    { id: 11, name: "All-Purpose Cleaner", category: "Household Essentials", price: 599.00, img: "https://i.pinimg.com/1200x/48/95/ea/4895ea2328d37b80515f04d8df6307d0.jpg" },
    { id: 12, name: "Pain Relief Tablets", category: "Pharmacy", price: 750.00, img: "https://i.pinimg.com/736x/0b/86/49/0b86494ef607f120597cd2d35cf467d8.jpg" },
    { id: 13, name: "Brown Rice", category: "Grocery", price: 600.00, img: "https://i.pinimg.com/736x/b8/fd/a9/b8fda9e0c095c7ede283de970cade816.jpg" },
    { id: 14, name: "Cheddar Cheese", category: "Dairy Products", price: 600.00, img: "https://i.pinimg.com/1200x/c1/0a/d8/c10ad88ccf8c6bffb5873034de3da295.jpg" },
    { id: 15, name: "Shampoo", category: "Cosmetics", price: 350.00, img: "https://i.pinimg.com/1200x/11/16/90/111690dee3dca8a60f1dd0bb02c58892.jpg" },
    { id: 16, name: "Cute Pen", category: "Stationeries", price: 150.00, img: "https://i.pinimg.com/736x/ba/a9/aa/baa9aa16bb7c545b9587c394d5b2fc62.jpg" },
    { id: 17, name: "Chocolate Bar", category: "Snacks", price: 200.00, img: "https://i.pinimg.com/736x/6c/7a/d8/6c7ad8c6b76a27e6c1242c41bc74af78.jpg" },
    { id: 18, name: "Frozen Fish", category: "Meats & Seafood", price: 1200.00, img: "https://i.pinimg.com/1200x/74/02/d1/7402d1c8237a58ea0cacd55bc1b36bbf.jpg" },
    { id: 19, name: "Dish Soap", category: "Household Essentials", price: 250.00, img: "https://i.pinimg.com/736x/5b/f5/bc/5bf5bc95e6de6e1fec36146e440550ea.jpg" },
    { id: 20, name: "Cough Syrup", category: "Pharmacy", price: 500.00, img: "https://i.pinimg.com/736x/1c/d4/52/1cd452f126d60dea99b97a3063d92790.jpg" },
    { id: 21, name: "Chickpeas", category: "Grocery", price: 400.00, img: "https://i.pinimg.com/1200x/dc/7d/4c/dc7d4ccbeb9d74d8d9a6983b12053fcc.jpg" },
    { id: 22, name: "Strawberries", category: "Fruit & Vegetables", price: 600.00, img: "https://i.pinimg.com/1200x/26/59/9b/26599bb86bbd605c5a3f0f00e9c9860c.jpg" },
    { id: 23, name: "Organic Eggs", category: "Dairy Products", price: 300.00, img: "https://i.pinimg.com/1200x/37/19/cc/3719ccbee5f4fd00df53f4579414fb91.jpg" },
    { id: 24, name: "Eyeshadow Palette", category: "Cosmetics", price: 400.00, img: "https://i.pinimg.com/736x/b3/66/c6/b366c6833bfa6789427be7db647c0ecf.jpg" },
    { id: 25, name: "Cute Sticky Notes", category: "Stationeries", price: 100.00, img: "https://i.pinimg.com/1200x/ba/72/5d/ba725d8caf874f63312c25232620d476.jpg" },
    { id: 26, name: "Popcorn", category: "Snacks", price: 250.00, img: "https://i.pinimg.com/736x/99/75/56/997556de431dd8cba3376784870c0599.jpg" },
    { id: 27, name: "Fresh Beef", category: "Meats & Seafood", price: 1500.00, img: "https://i.pinimg.com/736x/ac/68/5d/ac685d4240e52240a6f3c177bf286a05.jpg" },
    { id: 28, name: "Toilet Paper", category: "Household Essentials", price: 300.00, img: "https://i.pinimg.com/736x/c3/b6/12/c3b6127c4d5076710fae2cfbeaf1337e.jpg" },
    { id: 29, name: "Vitamin C Tablets", category: "Pharmacy", price: 800.00, img: "https://i.pinimg.com/1200x/16/0e/6e/160e6eec54a3a0d86ca2e2162bfb7a7b.jpg" },
    { id: 30, name: "Pasta", category: "Grocery", price: 350.00, img: "https://i.pinimg.com/236x/32/b5/47/32b547fbef4d1dc20531b338ea0e5ae3.jpg" },
    { id: 31, name: "Earbuds", category: "Electronics", price: 200.00, img: "https://i.pinimg.com/736x/ef/ea/ed/efeaed7345c6c7732d76839925d47eb7.jpg" },
    { id: 32, name: "Fresh Carrots", category: "Fruit & Vegetables", price: 250.00, img: "https://i.pinimg.com/1200x/44/41/84/44418400087a034c3d3f8cd9be61ea3f.jpg" },
    { id: 33, name: "Fresh Cream", category: "Dairy Products", price: 150.00, img: "https://i.pinimg.com/736x/70/b1/c5/70b1c5d8eec74720ab18894aeaedae8e.jpg" },
    { id: 34, name: "Face Wash", category: "Cosmetics", price: 300.00, img: "https://i.pinimg.com/736x/fa/e7/0e/fae70e3f19c47aa8ea9240cd4fde1361.jpg" },
    { id: 35, name: "School Backpack", category: "Stationeries", price: 200.00, img: "https://i.pinimg.com/736x/21/2b/cd/212bcd189527f4681ad1b3eeedee2284.jpg" },
    { id: 36, name: "Coconut biscuits", category: "Snacks", price: 400.00, img: "https://i.pinimg.com/736x/27/09/ae/2709aef094884bd4abc11ede9a0a7196.jpg" },
    { id: 37, name: "Fingers Fish", category: "Meats & Seafood", price: 1800.00, img: "https://i.pinimg.com/736x/9e/80/b6/9e80b6219c4c07e30709a07eb7652648.jpg" },
    { id: 38, name: "Kitchen Racks", category: "Household Essentials", price: 500.00, img: "https://i.pinimg.com/736x/1e/94/71/1e947163859807dc5c847bbcfb99e596.jpg" },
    { id: 39, name: "Allergy Relief", category: "Pharmacy", price: 600.00, img: "https://i.pinimg.com/1200x/18/9d/da/189dda2725f33cc4fbab1ab46cc78487.jpg" },
    { id: 40, name: "Brown Sugar", category: "Grocery", price: 300.00, img: "https://i.pinimg.com/736x/a8/2a/e0/a82ae00f043001d97ca2a3bca40b00b4.jpg" },
    { id: 41, name: "Iphone 18 Pro Max", category: "Electronics", price: 580.499, img: "https://i.pinimg.com/736x/55/28/e3/5528e3f456e3087dee1f31a21692048c.jpg" },
    { id: 42, name: "Fresh Bell Pepper", category: "Fruit & Vegetables", price: 200.00, img: "https://i.pinimg.com/736x/92/a4/95/92a4959e75028fe64e95ef4185527d56.jpg" },
    { id: 43, name: "Ladies bags", category: "Clothing & Accessories", price: 350.00, img: "https://i.pinimg.com/736x/18/10/01/1810018b4b7d5a761e6d5e2421d2667f.jpg" },
    { id: 44, name: "Mens Watch", category: "Clothing & Accessories", price: 450.00, img: "Nova.jpg" },
    { id: 45, name: "Girls Maxi Dress", category: "Clothing & Accessories", price: 120.00, img: "https://i.pinimg.com/736x/23/15/f0/2315f063be6745b69c266f6e2b192ef5.jpg" },
    { id: 46, name: "Surf Excel", category: "Cleaning & Laundry", price: 250.00, img: "https://i.pinimg.com/736x/3e/f2/25/3ef2252c0e4a6383455f71aaa5615e37.jpg" },
    { id: 47, name: "Cleaning Mop", category: "Cleaning & Laundry", price: 3000.00, img: "https://i.pinimg.com/736x/b4/f7/13/b4f71348f659bdbdf6acf7f11b8a0960.jpg" },
    { id: 48, name: "Wall Cleaner", category: "Cleaning & Laundry", price: 600.00, img: "https://i.pinimg.com/736x/44/96/22/4496226c4f73d1649e8b5290b33b2618.jpg" }
];

/* --- State --- */
let cart = JSON.parse(localStorage.getItem('neeqaCart')) || [];
let filteredProducts = [...products];

/* --- DOM Elements --- */
const productContainer = document.getElementById('productContainer');
const categoryContainer = document.getElementById('categoryContainer');
const filterCategorySelect = document.getElementById('filterCategory');
const sortPriceSelect = document.getElementById('sortPrice');
const searchInput = document.getElementById('searchInput');
const cartCountBadge = document.getElementById('cartCount');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotalElement = document.getElementById('cartTotal');
const emptyCartMessage = document.getElementById('emptyCartMessage');

/* --- Initialization --- */
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts(products);
    populateFilterDropdown();
    updateCartUI();
});

/* --- Render Functions --- */

// 1. Render Categories
function renderCategories() {
    categoryContainer.innerHTML = categories.map(cat => `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="category-card" onclick="filterByCategory('${cat}')">
                <h6>${cat}</h6>
            </div>
        </div>
    `).join('');
}

// 2. Render Products
function renderProducts(items) {
    if (items.length === 0) {
        productContainer.innerHTML = `<div class="col-12 text-center py-5"><h4>No products found.</h4></div>`;
        return;
    }

    productContainer.innerHTML = items.map(product => `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="product-card">
                <div class="product-img-wrapper">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="product-body">
                    <div>
                        <div class="text-muted small mb-1">${product.category}</div>
                        <h5 class="product-title">${product.name}</h5>
                    </div>
                    <div>
                        <div class="product-price">${product.price.toFixed(2)}</div>
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// 3. Populate Filter Dropdown
function populateFilterDropdown() {
    filterCategorySelect.innerHTML = `<option value="all">All Categories</option>` + 
        categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
}

/* --- Logic Functions --- */

// Filter by Category Card Click
function filterByCategory(category) {
    filterCategorySelect.value = category;
    applyFilters();
}

// Global Filter Logic
function applyFilters() {
    const category = filterCategorySelect.value;
    const searchTerm = searchInput.value.toLowerCase();
    const sortOrder = sortPriceSelect.value;

    // 1. Filter
    filteredProducts = products.filter(p => {
        const matchesCategory = category === 'all' || p.category === category;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    // 2. Sort
    if (sortOrder === 'low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // 3. Render
    renderProducts(filteredProducts);
}

/* --- Event Listeners --- */
filterCategorySelect.addEventListener('change', applyFilters);
sortPriceSelect.addEventListener('change', applyFilters);
// Fixed Search Logic: Listen for 'input' event to trigger applyFilters
searchInput.addEventListener('input', applyFilters);

/* --- Cart Logic (Local Storage) --- */

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
}

// New Function: Increase Quantity
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        saveCart();
        updateCartUI();
    }
}

// New Function: Decrease Quantity
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('neeqaCart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadge.textContent = totalItems;

    // Update Modal Content
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        cartTotalElement.textContent = '0.00';
    } else {
        emptyCartMessage.style.display = 'none';
        let total = 0;

        cartItemsContainer.innerHTML = cart.map(item => {
            total += item.price * item.quantity;
            return `
                <div class="col-12 border-bottom pb-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <img src="${item.img}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 10px;" class="me-3 shadow-sm">
                            <div>
                                <h6 class="mb-1 fw-bold">${item.name}</h6>
                                <small class="text-muted d-block mb-2">RS ${item.price.toFixed(2)}</small>
                                <!-- Plus and Minus Controls -->
                                <div class="quantity-controls">
                                    <button class="qty-btn" onclick="decreaseQuantity(${item.id})"><i class="fas fa-minus"></i></button>
                                    <span class="fw-bold px-2">${item.quantity}</span>
                                    <button class="qty-btn" onclick="increaseQuantity(${item.id})"><i class="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <div class="fw-bold text-bondi-blue mb-2">RS ${(item.price * item.quantity).toFixed(2)}</div>
                            <button class="btn btn-sm btn-outline-danger border-0" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        cartTotalElement.textContent = total.toFixed(2);
    }
}