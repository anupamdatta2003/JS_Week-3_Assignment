function checkProperty(obj, property){
    return obj.hasOwnProperty(property);
}

let studentData = {
    name:"Rahul Biswas",
    age:21,
    grade:"A",
};

console.log(checkProperty(studentData,"age"));
console.log(checkProperty(studentData,"city"));