
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
    
    value:any
    isValid:boolean
    errors:[]
    dirty:boolean
    rules:[]
    label:string

    touch():void
    markAsDirty():void
    fill():void
    clear():void
    async validate(trigger:string)
    async setFormat(trigger:string,event:any)
}

export declare class Format {
    constructor(parameters:FormatOptions) 
}

export declare class Rule {
    constructor(parameters:RuleOptions)
}