
type formatting = {
    value:string,
    noneFormatted:string
}


export declare function phone(value:string) :formatting
export declare function formatCard(value:string,trigger:string,event:any) :formatting
export declare function expirationDate(value:string) :formatting
export declare function removeNoneDigit(value:string) :formatting
export declare function cardPlaceholder(value:string) :formatting
