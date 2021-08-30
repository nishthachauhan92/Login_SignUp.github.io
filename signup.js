function myFunction() {
  var name = document.getElementById('name')
  var lastname = document.getElementById('lastname')
  var password = document.getElementById('password')
  var confirm = document.getElementById('confirm')
  var email = document.getElementById('email')
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (name.value == '') {
    alert('Please enter your name.')
    name.focus()
    event.preventDefault()
  } else if (lastname.value == '') {
    alert('Please enter your lastname.')
    lastname.focus()
    event.preventDefault()
  } else if (password.value == '') {
    alert('Please enter your password')
    password.focus()
    event.preventDefault()
  } else if (confirm.value == '') {
    alert('Please confirm your password')
    confirm.focus()
    event.preventDefault()
  } else if (password.value.length < 6) {
    alert('Password length must be atleast 8 characters')
    password.focus()
    event.preventDefault()
  } else if (password.value != confirm.value) {
    alert('Passwords did not match')
    confirm.focus()
    event.preventDefault()
  } else if (email.value == '') {
    alert('Please enter a valid e-mail address.')
    email.focus()
    event.preventDefault()
  } else if (!email.value.match(mailformat)) {
    alert('You have entered an invalid email address!')
  } else {
    alert('Welcome ' + name.value + ', Account created successfully !')
  }
}
