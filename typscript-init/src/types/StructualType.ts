export{}

interface Person {
    name: string;
    age: number;
}

interface Product {
    name: string;
    age: number;
}

const person: Person = {name: 'mike', age:23};
const product: Product = person;

// 인터페이스 A가 인터페이스 B로 할당 가능하기 위한 조건
// 1. B에 있는 모든 필수 속성의 이름이 A에도 존재해야 한다.
// 2. 같은 속성의 이름에 대해, A의 속성이 B의 속성에 할당 가능해야 한다.

/*
* 함수 타입 A가 함수 타입 B로 할당 가능하기 위한 조건. 
* 1. A의 매개변수 개수가 B의 매개변수 개수보다 적어야 한다.
* 2. 같은 위치의 매개변수에 대해 B의 매개변수 개수보다 적어야 한다.
* 3. A의 반환값은 B의 반환값으로 할당 가능해야 한다.
*/