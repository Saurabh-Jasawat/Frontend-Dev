$(document).ready(function() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emails = [];

  function validateName() {
    const name = $('#name').val().trim();
    const error = $('#nameError');
    const success = $('#nameSuccess');

    if (name === '') {
      $('#name').removeClass('valid').addClass('invalid');
      error.show();
      success.hide();
      return false;
    } else {
      $('#name').removeClass('invalid').addClass('valid');
      error.hide();
      success.show();
      return true;
    }
  }

  function validateEmail() {
    const email = $('#email').val().trim();
    const error = $('#emailError');
    const success = $('#emailSuccess');

    if (!emailRegex.test(email)) {
      $('#email').removeClass('valid').addClass('invalid');
      error.text('Invalid email format');
      error.show();
      success.hide();
      return false;
    } else if (emails.includes(email)) {
      $('#email').removeClass('valid').addClass('invalid');
      error.text('Email already registered');
      error.show();
      success.hide();
      return false;
    } else {
      $('#email').removeClass('invalid').addClass('valid');
      error.hide();
      success.show();
      return true;
    }
  }

  function validatePassword() {
    const password = $('#password').val();
    const error = $('#passwordError');
    const success = $('#passwordSuccess');

    if (password.length < 8) {
      $('#password').removeClass('valid').addClass('invalid');
      error.show();
      success.hide();
      return false;
    } else {
      $('#password').removeClass('invalid').addClass('valid');
      error.hide();
      success.show();
      return true;
    }
  }

  $('#name').on('input', validateName);
  $('#email').on('input', validateEmail);
  $('#password').on('input', validatePassword);

  $('#submitBtn').click(function() {
    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    const messageBox = $('#messageBox');
    messageBox.show();

    if (nameValid && emailValid && passwordValid) {
      const email = $('#email').val().trim();
      emails.push(email);

      messageBox.removeClass('error').addClass('success');
      messageBox.text('✅ Registration Successful! Welcome aboard!');

      setTimeout(function() {
        $('#name').val('').removeClass('valid invalid');
        $('#email').val('').removeClass('valid invalid');
        $('#password').val('').removeClass('valid invalid');
        $('.error-message, .success-message').hide();
        messageBox.fadeOut();
      }, 3000);
    } else {
      messageBox.removeClass('success').addClass('error');
      
      let errors = [];
      if (!nameValid) errors.push('name');
      if (!emailValid) errors.push('email');
      if (!passwordValid) errors.push('password');
      
      messageBox.text('❌ Please fix errors in: ' + errors.join(', '));
    }
  });
});