export function expirationDate(value){

    let expire = require("card-validator");
    let date = expire.expirationDate(removeAllSpaces(value));
    

    //remove all none digit except "-" or "/" or white space
    const regex = /[^(0-9|//|/\-/|\s)]/g;
    value = value.replace(regex,'')

    if(date.month && date.year){
        value = `${date.month} / ${date.year.slice(-2)}`
    }
  
    return {
        value:value,
        noneFormatted:value
    }
}

function removeAllSpaces(value){
    const regex = /[^(0-9)]/g;
    return value.replace(regex,'')
}