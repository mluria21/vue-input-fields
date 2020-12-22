export function usaZip(value){
    if(/\D/g.test(value) || value.length != 5){
        return `Not a valid zip code`
    }
}