export {};

// 함수의 반환타입

// 반환 값이 없고 종료되는 함수 : void
function f1() :void {
    console.log('hello')
}


// 예외가 있거나 무한루프일 시 : never => 거의 사용 할 일 없음 
function f2(): never {
    throw new Error('some error')
}

function getText(name: string, ...rest: number []): string {
    return '';
}

//...rest : 나머지는 number[] 타입에 포함된다는 의미

console.log(getText('mike', 1, 2, 3))
