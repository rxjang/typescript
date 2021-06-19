
// 맨 앞에 this 선언시 이것을 this의 타입이라고 인식
function getParam(this: string, index: number): string {
    const params = this.split(',');
    if(index < 0 || params.length <= index) {
        return '';
    }

    return this.split(',')[index];
}

interface String {
    getParam(this: string, index: number): string;
}

String.prototype.getParam = getParam;
console.log('adsf, 1234, ok'.getParam(1))