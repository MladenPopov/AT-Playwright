//Object types with
type Role = {
    role: "manager" | "founder";
}
type UserPermissions = {
    permissions : "admin" | "user";
} 

type User = Role & UserPermissions;

const user : User = {
    role: "manager",
    permissions: "admin"
};

console.log(user)

interface Animal {
    species : string;
    breed ? : string;
    age: number;
    weight ? : number;
    name : string;
}

const animal1 : Animal = {
    species: "dog",
    breed : "Husky",
    age: 6,
    weight: 15,
    name: "Pastet"
}


interface Cars {
    color: string,
    wheels: number,
    transmission : "manual" | "automatic",
    fuelType: "diesel" | "petrol",
    startEngine : () => string,
}

const car : Cars = {
    color: "white",
    wheels : 4,
    transmission : "manual",
    fuelType : "diesel",
    startEngine: function() {
        return 'Start the engine'
    }
}

console.log(car)

// get the keys of the properties of a an object
const keys = Object.keys(car);

//get the values of the properties of an object
const values = Object.values(car)

//assign two object in one
const colorObj = {color : "black"}
const backgroundObj = {background : 'white'}

const assignedObj = Object.assign({}, colorObj, backgroundObj)