let studentData = {
    name:"Rahul Biswas",
    age:21,
    grade:"A",
};

console.log(studentData);

function updateGrade(newGrade){
    studentData.grade = newGrade;
};

updateGrade("B");
console.log(studentData);