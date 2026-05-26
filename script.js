const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
const menuImg = menuToggle.querySelector('img');

menuToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('nav-open');

  // Swap icon image
  menuImg.src = isOpen 
    ? '/images/icons8-menu-50.png'   // your close icon
    : '/images/icons8-menu-50.png';   // your menu icon
    

  menuToggle.setAttribute('aria-expanded', isOpen);
});


document.getElementById('nav-close').addEventListener('click', () => {
  navList.classList.remove('nav-open');
  navOverlay.classList.remove('active');
});


let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

function addToCart(button) {
  // Grab details from the product card
  const card = button.closest('.product-card');
  const name = card.querySelector('.product-name').textContent;
  const brand = card.querySelector('.product-brand').textContent;
  const price = card.querySelector('.product-price').textContent;
  const image = card.querySelector('img').src;
  const id = image;   // image src is unique per product
  // Check if already in cart
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, name, brand, price, image, quantity: 1 });
  }

  // Save to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update badge
  updateCartCount();

  // Button feedback
  button.textContent = '✓';
  button.style.backgroundColor = 'green';
  setTimeout(() => {
    button.textContent = 'Add';
    button.style.backgroundColor = '';
  }, 1500);
}

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.getElementById('cart-count');
  if (!cartCount) return;
  cartCount.textContent = total;
  cartCount.style.display = total === 0 ? 'none' : 'flex';
}

