export function minLength(length,value,label){
    let typeOfValue = typeof value

    if(String(value).trim().length < length){
        return `The ${label} must be at least ${length} characters`
    }
}