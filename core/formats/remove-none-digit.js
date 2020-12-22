export function removeNoneDigit(value){
   
    if(!value) return value
   
    const regex = /[^0-9]/g;
    value = String(value).replace(regex,'')

    return {
        value:value,
        noneFormatted:''
    }
}