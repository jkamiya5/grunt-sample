module TEST {
    export var Message: string;
    class Cat {              // ここから追加
        age: number;
        weight: number;
        constructor(age: number, weight: number) {
            this.age = age;
            this.weight = weight;
        }
    }
    var myCat = new Cat();
    myCat.age = 3;
    myCat.weight = 5.1;      // ここまで追加
    Message = "My cat is " + myCat.age + "yeas old and weight is " + myCat.weight + " kg. ";  // この行を変更
}
document.write(TEST.Message);

function test1() {
    document.write(TEST.Message);
}