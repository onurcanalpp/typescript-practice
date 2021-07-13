
// type userInfoTypes = name:string, surname:string, age:number;

type ageType = number | string;

interface userInfoTypes {
    name: string,
    surname:string,
    age:ageType,
    gender?: "Man" | "Woman",
    address?: string
}

let userInfo: userInfoTypes = {
    name: "Onur",
    surname: "Alp",
    age: 22,
    gender: "Man"
}


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
