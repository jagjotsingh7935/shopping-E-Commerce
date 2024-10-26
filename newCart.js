document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
  });
  