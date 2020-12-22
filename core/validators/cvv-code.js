export function cvvCode(value,card){
    
    let valid = require("card-validator");

    let maxLength = 3
    if(card){
        let type = valid.number(card).card.type
        if(type == 'american-express')maxLength = 4
    }
    
    let date = valid.cvv(value,maxLength);

    if(!date.isValid){
        return 'Not a valid code'
    }
}