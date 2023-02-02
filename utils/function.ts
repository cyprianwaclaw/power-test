export function ErrorMessage(text: string,) {
  var result = {
    plMessage: '',
    errorInput: false
  }
  if (text == "The given data was invalid.") {
    result = {
      plMessage: '',
      errorInput: true
    }
  }
  else if (text == "This User does not exist, check your details") {
    result = {
      plMessage: 'Podany użyutkownik nie istnieje, sprawdź poprawność danych',
      errorInput: true
    }
  }
  return result;
}

export function ErrorErrorsEmail0(text: string,) {
  var result = {
    plMessage: '',
    errorInput: false
  }
  if (text == "The email field is required.") {
    result = {
      plMessage: 'Prosze wpisać adres e-mail',
      errorInput: true
    }
  }
  else if (text == "The email must be a valid email address.") {
    result = {
      plMessage: 'Błędny adres e-mail',
      errorInput: true
    }
  }
  else if (text == "The email must be a valid email address.,The email field is required.") {
    result = {
      plMessage: 'Proszę wpisać adres e-mail',
      errorInput: true
    }
  }
  return result;
}

export function ErrorErrorsEmail(text: string) {
  var result = {
    plMessage: '',
    errorInput: false
  }
  if (text == "The email field is required.") {
    result = {
      plMessage: 'Prosze wpisać adres e-mail',
      errorInput: true
    }
  }
  else if (text == "The email must be a valid email address.") {
    result = {
      plMessage: 'Błędny adres e-mail',
      errorInput: true
    }
  }
  return result;
}

export function ErrorErrorsEmail1(text: string,) {
  var result = {
    plMessage: '',
    errorInput: false
  }
  if (text == "The email field is required.") {
    result = {
      plMessage: 'Prosze wpisać adres e-mail',
      errorInput: true
    }
  }
  else if (text == "The email must be a valid email address.") {
    result = {
      plMessage: 'Błędny adres e-mail',
      errorInput: true
    }
  }
  return result;
}

export function ErrorErrorsPassword(text: string,) {
  var result = {
    plMessage: '',
    errorInput: false
  }
  if (text == "The password must be at least 8 characters.") {
    result = {
      plMessage: 'Hasło musi mieć minimum 8 znaków.',
      errorInput: true
    }
  }
  else if (text == "The password field is required.") {
    result = {
      plMessage: 'Proszę uzupełnić hasło',
      errorInput: true
    }
  }
  return result;
}
