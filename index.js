// type userInfoTypes = name:string, surname:string, age:number;
var userInfo = {
    name: "Onur",
    surname: "Alp",
    age: 22,
    gender: "Man"
};
var isNew = true;
var list = [1, 2, 3];
var newList = [1, 2, 3];
var user1 = ["Onur", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var basicMath = function (x, y) { return x + y; };
var result = basicMath(5, 5);
var users = [
    {
        name: "Onur",
        surname: "Alp",
        age: 22,
        address: "Address Test 1"
    },
    {
        name: "Other",
        surname: "Other Surname",
        age: 25,
        address: "Address Test 2"
    }
];
var newVariable = "alp";
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(newVariable)) {
    console.log(newVariable.name);
}
newVariable.toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(1));
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.messageFunc = function () {
        console.log("Message For " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Onur');
console.log(emp1.employeeName);
emp1.messageFunc();
