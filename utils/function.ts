
export function ErrorInput(text: string,) {
  let result = {
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
      plMessage: 'Podany użytkownik  nie istnieje, sprawdź poprawność danych',
      errorInput: true
    }
  }
  return result;
}


export function onInvalidSubmit() {
  const submitBtn = document.querySelector("#submit");
  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 400);
}


// TODO: Dodać wszystkie linki
export function RouteChange(name: string) {
  let result = "";

  // aktywny domek - menu
  if (name == "/panel") {
    result = "home";
  }

  // aktywne osoby - menu
  else if (name == "/panel/zaproszeni") {
    result = "invite";
  }

  // aktywne konto - menu
  else if (name == "/panel/konto") {
    result = "account";
  }

  else if (name == "/panel/konto/srodki/wyplata") {
    result = "account";
  }
  else if (name == "/panel/konto/srodki") {
    result = "account";
  }
  // aktywny quiz - menu
  else if (name == "/panel/quiz") {
    result = "quiz";
  }


  return result;
}

export function AddAnswer(correct: number, incorrect: number){
  return correct + incorrect
  }

 export  function ChangePlaceholderInput(name: any, text:any){
    var results = {
      placeholder: '',
      class: ''
    }
    if(!name){
      results = {
        placeholder: text,
        class: 'input-not-data'
      }
    } 
    else {
      results = {
        placeholder: name,
        class: 'input-data'
      }
    }
    return results;
}

export function ChangeDataInput(value: any, apiData:any){
  let results = ''
  if(value){
results= value
  } else if(apiData){
    results = apiData
  }
  return results;
}


export function indexBigger (index: number){
  let results = false
  if(index > 0){
  results = true
  }
return results
}