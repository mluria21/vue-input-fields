export function creditCard(value){
    let valid = require("card-validator");
    let numberValidation = valid.number(value);
  
    if(!numberValidation.isValid){
        return 'Not a valid card'
    }
}