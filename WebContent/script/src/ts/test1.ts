module test1 {
    export var Message: string;
    class Cat {              // ‚±‚±‚©‚ç’Ç‰Á
        age: number;
        weight: number;
    }
    var myCat = new Cat();
    myCat.age = 3;
    myCat.weight = 5.1;      // ‚±‚±‚Ü‚Å’Ç‰Á
    Message = "My cat is " + myCat.age + "yeas old and weight is " + myCat.weight + " kg. ";  // ‚±‚Ìs‚ğ•ÏX
}
document.write(test1.Message);