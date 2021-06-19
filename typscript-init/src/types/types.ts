export {};

const size: number = 123;
const isBig: boolean = size >=100;
const msg: string = isBig ? '크다' : '작다';

const values: number[] = [1, 2, 3];
const values2: Array<number> = [1, 2, 3];

const data : [string, number] = [msg, size];

console.log('typeof 123 => ', typeof 123);
console.log('typeof "abc" => ', typeof 'abc');
console.log('typeof [1, 2, 3] => ', typeof [1, 2, 3]);
// 자바스크립트는 array 가 없고 object로 정의 됨 => typescipt는 여러 타입 사용 가능 

let v1: undefined = undefined;
let v2: null = null;

let v3: number | undefined = undefined;
v3 = 123;

console.log('typeof undefined =>', typeof undefined);
console.log('typeof undefined =>', typeof null);
// null 은 자바스크립트에서 object 로 표현됨
