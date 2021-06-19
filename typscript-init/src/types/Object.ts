interface Object {
    getShortKeys(this: object): string[];
}

Object.prototype.getShortKeys = function() {
    return Object.keys(this).filter(key => key.length <=3 );
}

const obj = {
    a: 1,
    bb: 2, 
    ccc: 3,
    dddd: 4,
}

console.log(obj.getShortKeys());

//함수 오버로드를 통해 해결
function add(x: number, y: number): number;
function add(x: string, y:string): string;
function add(x: number | string, y: number|string): number|string {
    if(typeof x === 'number' && typeof y ==='number') {
        return x + y;
    } else{
        const result = Number(x) + Number(y);
        return result.toString();
    }
}

const v1: number = add(1,2);
console.log(add('1', '2'));


function getText({name, age = 15, language,
    }: {name: string; age?:number; language?: string;
    }): string {
        const nameText = name.substr(0,10);
        const ageText = age >=35 ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}, language: ${language}`
}

getText({name: 'aaa'});