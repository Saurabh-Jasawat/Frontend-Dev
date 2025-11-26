$(document).ready(function() {
  const API_PORT = 3004;
  
  const usersPromise = fetch(`http://localhost:${API_PORT}/users`).then(res => res.json());
  const ordersPromise = fetch(`http://localhost:${API_PORT}/orders`).then(res => res.json());
  const productsPromise = fetch(`http://localhost:${API_PORT}/products`).then(res => res.json());

  Promise.all([usersPromise, ordersPromise, productsPromise])
    .then(([users, orders, products]) => {
      $('#loading').hide();
      $('#dashboard').show();
      
      $('#totalUsers').text(users.length);
      $('#totalOrders').text(orders.length);
      $('#totalProducts').text(products.length);
    })
    .catch(error => {
      $('#loading').hide();
      $('#error').text('Some data could not be loaded. Make sure JSON server is running on port ' + API_PORT).show();
      console.error('Error:', error);
    });
});