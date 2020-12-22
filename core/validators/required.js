export function required(value,label){

    if(typeof value === 'string')value = value.trim()
   
    if(!value){
        return `${label} is required`
    }
} 