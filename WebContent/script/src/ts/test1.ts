module test1 {
    export var Message: string;
    class Cat {              // ��������ǉ�
        age: number;
        weight: number;
    }
    var myCat = new Cat();
    myCat.age = 3;
    myCat.weight = 5.1;      // �����܂Œǉ�
    Message = "My cat is " + myCat.age + "yeas old and weight is " + myCat.weight + " kg. ";  // ���̍s��ύX
}
document.write(test1.Message);