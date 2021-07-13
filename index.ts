
// type userInfoTypes = name:string, surname:string, age:number;

interface userInfoTypes {
    name: string,
    surname:string,
    age:number
}

let userInfo: userInfoTypes = {
    name: "Onur",
    surname: "Alp",
    age: 15
}


type MathTypes = (x: number, y: number) => number;

const basicMath: MathTypes = (x, y) => x + y;

const result = basicMath(5,5);
