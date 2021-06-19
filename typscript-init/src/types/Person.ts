export{};

class Person {
    name: string;
    #private: string;
    // 앞에 #을 붙이면 private 과 같은 의미
    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

class Programmer extends Person {

    constructor(name: string) {
        super(name);
    }

    sayHello() {
        super.sayHello();
        console.log(`I'm a programmer`)
    }
}

const programmer = new Programmer('Felix');
programmer.sayHello();