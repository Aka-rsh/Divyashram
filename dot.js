function validateDivyashramForm() {
  const name = document.getElementById('divyashram-name').value.trim();
  const phone = document.getElementById('divyashram-phone').value.trim();
  const email = document.getElementById('divyashram-email').value.trim();
  const message = document.getElementById('divyashram-message').value.trim();

  if (name === '') {
    alert('Please enter your name');
    return false;
  }

  if (phone === '') {
    alert('Please enter your phone number');
    return false;
  }

  if (email === '') {
    alert('Please enter your email');
    return false;
  }

  if (message === '') {
    alert('Please enter your message');
    return false;
  }

  // You can add more validation for phone/email formats if needed

  return true; // Form can submit
}
