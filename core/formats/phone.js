import { parsePhoneNumberFromString } from 'libphonenumber-js'

export function phone(value){
    
    if(!value) return value
    value = String(value)

    const phoneNumber = parsePhoneNumberFromString(value,'US')
    
    if(phoneNumber){
        return {
            value:phoneNumber.formatNational(),
            noneFormatted:phoneNumber.number
        }
    }
}