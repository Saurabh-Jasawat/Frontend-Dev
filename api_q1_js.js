$(document).ready(function() {
  const API_PORT = 3001;
  
  $('#searchInput').on('input', function() {
    const query = $(this).val().trim();
    
    if (query === '') {
      $('#results').empty();
      $('#noResults').hide();
      return;
    }

    $('#loading').show();
    $('#results').empty();
    $('#noResults').hide();

    $.ajax({
      url: `http://localhost:${API_PORT}/products?q=${encodeURIComponent(query)}`,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        $('#loading').hide();
        
        if (data.length === 0) {
          $('#noResults').show();
          return;
        }

        data.forEach(product => {
          const productCard = `
            <div class="product">
              <div class="product-image">${product.image || '📦'}</div>
              <div class="product-name">${product.name}</div>
              <div class="product-price">$${product.price}</div>
            </div>
          `;
          $('#results').append(productCard);
        });
      },
      error: function() {
        $('#loading').hide();
        alert('Error loading products. Make sure JSON server is running on port ' + API_PORT);
      }
    });
  });
});