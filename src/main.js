import {InputField} from './forms/core/input-field'

let input = new InputField({
    property:{name:'hello'}
})

console.log(input.value);