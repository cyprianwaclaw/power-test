export function ErrorMessage(text: string,) {
  var result = {
    plMessage: '',
    errorInput: false
  }
  if (text == "The given data was invalid.") {
    result = {
      plMessage: 'Wprowadzono błęne dane',
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

export function ErrorErrorsEmail(text: string,) {
  var result = {
    plMessage: '',
    errorInput: false
  }
  if (text == "The email must be a valid email address.") {
    result = {
      plMessage: 'Niepoprawny email',
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


export function ErrorErrorsPassword(text: string,) {
  var result = {
    plMessage: '',
    errorInput: false
  }
  if (text == "The email must be a valid email address.") {
    result = {
      plMessage: 'Niepoprawny email',
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
