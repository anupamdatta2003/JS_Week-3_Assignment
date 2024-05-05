let car = {
    make:"Toyota",
    model:"Prius",
    year:2016,
};

function displayCarProperties(vehicle){
    for (let keys in vehicle) {
        console.log(`${keys} : ${vehicle[keys]}`);
    }
}

displayCarProperties(car);