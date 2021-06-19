export {};

interface Person {
    readonly name: string;
    age: string;
    [key: string] : string | number;
}

interface YearPriceMap {
    [year: number] : number;
    [yaer: string] : number | string;
} 

