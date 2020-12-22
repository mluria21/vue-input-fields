import {getCreditCardType} from '../validators/credit-card-type'

export function cardPlaceholder(value){
    
    if(!value) return value
    value = String(value)

    let placeholder =''
    let type = getCreditCardType(value)
    if(!type)return

    switch(type){
        case 'american-express':
        placeholder = '**** ****** *'
        break;
        case 'diners-club':
        placeholder = '**** ****** '
        break;
        default:
        placeholder = '**** **** ****'
    }

    return {
        value:placeholder + ' ' + value,
        noneFormatted:''
    }
}