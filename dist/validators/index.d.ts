
import {InputField} from '../core/index'

export declare function creditCard(value:string):string
export declare function cvvCode(value:string,card:string):string
export declare function email(value:string):string
export declare function expirationDate(value:string):string
export declare function getCreditCardType(value:string):string
export declare function int(value:string | number,label:string):string
export declare function minLength(length:number,value:string,label:string):string
export declare function phoneValid(value:string):string
export declare function required(value:string,label:string):string
export declare function sameAs(value:string,compare:string | number,label:string):string
export declare function usaZip(value:string):string
export declare function creditCardLength(value:string,label:string,self:InputField):number