export function int(value,label){
    if(/\D/g.test(value)){
        return `${label} should be only digits`
    }
}