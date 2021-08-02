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
