$(document).ready(function() {
  const API_PORT = 3006;
  
  $('#registrationForm').submit(function(e) {
    e.preventDefault();
    
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val();
    
    $('.error-message').hide();
    $('input').removeClass('error');
    
    let hasError = false;
    
    if (name === '') {
      $('#name').addClass('error');
      $('#nameError').show();
      hasError = true;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $('#email').addClass('error');
      $('#emailError').show();
      hasError = true;
    }
    
    if (password.length < 8) {
      $('#password').addClass('error');
      $('#passwordError').show();
      hasError = true;
    }
    
    if (hasError) {
      return;
    }
    
    $('#submitBtn').prop('disabled', true).text('Checking...');
    
    axios.get(`http://localhost:${API_PORT}/users?email=${encodeURIComponent(email)}`)
      .then(response => {
        if (response.data.length > 0) {
          $('#email').addClass('error');
          $('#emailError').text('Email already registered.').show();
          $('#submitBtn').prop('disabled', false).text('Register');
        } else {
          return axios.post(`http://localhost:${API_PORT}/users`, {
            name: name,
            email: email,
            password: password
          });
        }
      })
      .then(response => {
        if (response) {
          $('#messageBox').removeClass('error').addClass('success');
          $('#messageBox').text('✅ Registration successful! Welcome aboard!').show();
          
          $('#registrationForm')[0].reset();
          $('#submitBtn').prop('disabled', false).text('Register');
          
          setTimeout(() => {
            $('#messageBox').fadeOut();
          }, 3000);
        }
      })
      .catch(error => {
        $('#messageBox').removeClass('success').addClass('error');
        $('#messageBox').text('❌ Error during registration. Make sure JSON server is running on port ' + API_PORT).show();
        $('#submitBtn').prop('disabled', false).text('Register');
        console.error('Error:', error);
      });
  });
});