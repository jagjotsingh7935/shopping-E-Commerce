
    document.addEventListener('DOMContentLoaded', function () {
        // Retrieve the stored item count from localStorage, or initialize to 0 if not present
        let itemCount = parseInt(localStorage.getItem('itemCount')) || 0;

        const cartIcons = document.querySelectorAll('#cart-icon');
        const itemCountSpan = document.getElementById('item-count');
        const slidingCart = document.getElementById('sliding-cart');
        const closeCart = document.getElementById('close-cart');
        const cartToggle = document.getElementById('cart-toggle'); // Additional cart icon for toggling

        // Update the item count display on page load
        itemCountSpan.textContent = itemCount;

        // Function to open sliding cart and add product
        function addToCart(product) {
            const cartTableBody = document.querySelector('#cart-table tbody');

            // Create a new row
            const newRow = document.createElement('tr');

            // Create cells
            const removeCell = document.createElement('td');
            const imageCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const quantityCell = document.createElement('td');

            // Add content to cells
            removeCell.innerHTML = '<button class="remove-btn">Remove</button>';
            imageCell.innerHTML = `<img src="${product.imageSrc}" alt="Product Image" width="50">`;
            nameCell.textContent = product.name;
            quantityCell.innerHTML = '<input type="number" value="1" min="1">';

            // Append cells to the row
            newRow.appendChild(removeCell);
            newRow.appendChild(imageCell);
            newRow.appendChild(nameCell);
            newRow.appendChild(quantityCell);

            // Append row to table body
            cartTableBody.appendChild(newRow);

            // Show sliding cart
            slidingCart.style.display = 'block';
        }

        // Increment item count and toggle the sliding cart
        cartIcons.forEach(cartIcon => {
            cartIcon.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default link behavior
                itemCount += 1; // Increment item count
                itemCountSpan.textContent = itemCount; // Update item count display

                // Store the updated item count in localStorage
                localStorage.setItem('itemCount', itemCount);

                 document.querySelectorAll('.product').forEach(productElem => {
                    productElem.addEventListener('click', function () {
                        const productId = this.getAttribute('data-product-id');
                        const product = {
                            id: productId,
                            imageSrc: this.getAttribute('data-image-src'),
                            name: this.getAttribute('data-name')
                        };
                        addToCart(product);
                    });
                });

                slidingCart.classList.toggle('open'); // Toggle sliding cart visibility
            });
        });

        // Toggle the sliding cart visibility
        cartToggle.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            slidingCart.classList.toggle('open'); // Toggle sliding cart visibility
        });

        // Close the sliding cart
        closeCart.addEventListener('click', function () {
            slidingCart.classList.remove('open'); // Hide the sliding cart
            // itemCount = 0;
            itemCountSpan.textContent = itemCount;

            localStorage.setItem('itemCount', itemCount);
        });
    });   




// document.addEventListener('DOMContentLoaded', function() {
//     const cartElements = document.querySelectorAll("#cart");

//     cartElements.forEach(cartElement => {
//         cartElement.addEventListener('click', function() {
//             window.alert("Item is added to cart successfully");
//         });
//     });
// });


//cart items
// const cartImage = document.querySelectorAll(".cart-image");
// const cartSliding = document.querySelectorAll("cart-icon");

// cartSliding.forEach(cartSliding =>{
//     cartSliding.addEventListener('click',function(){
//         cartImage.src = this.src;
//     })
// })
