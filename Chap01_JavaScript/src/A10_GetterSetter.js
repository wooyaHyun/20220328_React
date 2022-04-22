
class Jumsu {
    
    constructor(name, kor, eng) {
        this._name = name;
        this._kor = kor;
        this._eng = eng;
    }

    // 일반 메서드 => prototype
    onTotal() {
        return this._kor + this._eng;
    }

    display() {
        console.log(`${this._name}의 총점은 ${this.onTotal()}이고 평균은 ${this.onTotal() / 2}입니다`);
    }

    getName() {
        return this._name;
    }

    // getter, setter. 정의는 함수 형태이지만 사용은 프로퍼티 형태로 사용한다.
    get kor() {
        return this._kor;
    }
    set kor(kor) {
        if(typeof(kor) !== 'number') this._kor = 0;
        else this._kor = kor;
    }

};


let nolbu = new Jumsu('Nolbu', 100, 90);
console.log(nolbu._name);                       // Nolbu
console.log(nolbu._kor);                         // 100

nolbu.kor = 70;
console.log(nolbu.kor);



