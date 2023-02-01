export function ErrorMessage(text: string,) {
  var result = {
    plMessage: '',
    errorInput: true
  }
  if (text == "The given data was invalid.") {
    result = {
      plMessage: '',
      errorInput: true
    }
  }
  // else if (text == "The given data was invalid."){
  //   plMessage = "test444"
  // }
  else if (text == "This User does not exist, check your details") {
    result = {
      plMessage: 'Podany użyutkownik nie istnieje, sprawdź poprawność danych',
      errorInput: true
    }
  }
  return result
  //  plMessage;
  //  errorInput;
}
