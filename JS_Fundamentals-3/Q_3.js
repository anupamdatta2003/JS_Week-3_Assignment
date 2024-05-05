let data = {
    name:"Rahul Biswas",
    age:21,
    grade:"A",
};

function count(obj){
    return Object.keys(obj).length;
}

console.log(count(data));