
// type userInfoTypes = name:string, surname:string, age:number;

type ageType = number | string;

interface userInfoTypes {
    name: string,
    surname:string,
    age:ageType,
    gender?: "Man" | "Woman",
    address?: stringnode
}

let userInfo: userInfoTypes = {
    name: "Onur",
    surname: "Alp",
    age: 22,
    gender: "Man"
}

const isNew: boolean = true;

let list: number[] = [1,2,3];
let newList: Array<number> = [1,2,3];

let user1: [string, number] = ["Onur", 22];

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);


type MathTypes = (x: number, y: number) => number;

const basicMath: MathTypes = (x, y) => x + y;

const result = basicMath(5,5);


const users: userInfoTypes[] = [
    {
        name: "Onur",
        surname: "Alp",
        age: 22,
        address: "Address Test 1",
    },
    {
        name: "Other",
        surname: "Other Surname",
        age: 25,
        address: "Address Test 2"
    }
]


let newVariable: unknown = "alp";

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(newVariable)) {
    console.log(newVariable.name);
}

(newVariable as string).toUpperCase();


let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType true;
