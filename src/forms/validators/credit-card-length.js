export function creditCardLength(value,label,self){

    if(!value) return

    let card = require("card-validator");
    
    let number = card.number(value); 

    if(number.card){
        self.attr.maxlength = Math.max(...number.card.lengths) + number.card.gaps.length
    } 
}