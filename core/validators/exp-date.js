export function expirationDate(value){
    let valid = require("card-validator");
    let date = valid.expirationDate(value);

    if(!date.isValid){
        return 'Not a valid expiration date'
    }
}