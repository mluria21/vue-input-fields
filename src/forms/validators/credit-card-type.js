export function getCreditCardType(value){

    let valid = require("card-validator");
    
    //removes card placeholders for example "**** **** **** 1234"
    value = String(value).replace(/[\* ]/g,'')

    let number = valid.number(value);

    if(number.card){
        return number.card.type
    }
    return null
}