export function formatCard(value,trigger,e){

    if(!value) return value
    
    //remove none digits except white spaces
    const regex = /[^(0-9|\s)]/g;
    value = String(value).replace(regex,'')

    let valid = require("card-validator");
    
    let number = valid.number(value); 

    if(number.card){
        
        const cardLength = Math.max(...number.card.lengths)
        const gaps = number.card.gaps

        if((trigger === 'input' && e.inputType !== 'insertText') || !e){
            return {
                value:value,
                noneFormatted:removeAllSpaces(value)
            }
        }
        
        if(removeAllSpaces(value).length > cardLength){
            value = value.slice(0,cardLength + gaps.length)
        }

        value = removeAllSpaces(value)     
        value = addSpaceing(value,gaps,trigger)
       
    }
    return {
        value:value,
        noneFormatted:removeAllSpaces(value)
    }
}

function addSpaceing(value,gaps,trigger){
    for (let i = 0; i < gaps.length; i++) {
        const gap = gaps[i] + i

        if(value.length >= gap){
            value = value.slice(0,gap) + ' ' + value.slice(gap)
        }
    }
    return value
}

function removeAllSpaces(value){
    return value.replace(/ /g,'')
}