interface Person {
  name: string;
  lastName: string;
  age: number;
  phoneNumber: number;
  email: string;
}

interface PersonInfo extends Person {
  country?: string;
  greeting?: () => string;
}

let person1 : Person = {
    name: "Grigor",
    lastName: "Petkov",
    age: 32,
    phoneNumber: 87632445,
    email: "grigor.p@gmail.com"
}


let person2 : PersonInfo = {
    name: "Ivan",
    lastName: "Ivanov",
    age: 54,
    phoneNumber: 24311524,
    email: "iivanov@gmail.com",
    country: "Bulgaria",
    greeting: function() {
        return "hello Ivane"
    },
}