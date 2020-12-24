
type property = {
    name:string,
    value:any
}

type FieldOptions = {
    name:string,
    property:property
    label:string,
    rules:[],
    format:Format,
    attr:property,
    component:string
    options:[]
}

type FormatOptions = {
    trigger:string | string[],
    callback:any
}

type RuleOptions = {
    trigger:string | string[],
    callback:any
}

export declare class InputField {
    constructor(parameters:FieldOptions) 
}

export declare class Format {
    constructor(parameters:FormatOptions) 
}

export declare class Rule {
    constructor(parameters:RuleOptions)
}