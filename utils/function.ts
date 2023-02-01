 export function Error(text: string, red:string) {
    var text = "null"
    var red = "null"
  if((text = "This User does not exist, check your detail", red = "This User does not exist, check your detail")) {
        text = "Użytkownik nie istanieje",
        red = "false"
      }  if((text = "The given data was invalid", red = "The given data was invalid")) {
        text = "Wprowadzono błedne dane",
        red = "false"
      }
    return{
      text, red
    } 
  }


  // export function InputError(text: string, red:string) {
  //   var text = "null"
  //   var red = "null"
  // if((text = "This User does not exist, check your detail", red = "This User does not exist, check your detail")) {
  //       text = "Użytkownik nie istanieje",
  //       red = "false"
  //     }  if((text = "", red = "This User does not exist, check your detail")) {
  //       text = "Użytkownik",
  //       red = "false"
  //     }
  //   return{
  //     text, red
  //   } 
  // }