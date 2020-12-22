import { parsePhoneNumberFromString } from 'libphonenumber-js'

export function phoneValid(value){
    const phoneNumber = parsePhoneNumberFromString(value,'US')
    
    if(phoneNumber && !phoneNumber.isValid()){
        return `Not a valid phone number`
    }
    else if(!phoneNumber){
        return `Not a valid phone number`
    }
}