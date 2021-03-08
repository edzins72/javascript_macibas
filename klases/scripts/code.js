const createDog = function (skirne, izmers, vecums, krasa) {
    return {
        skirne,
        izmers,
        vecums,
        krasa,
        eat() {
            console.log("Suns ēd");
        },
        bark() {
            console.log("Suns rej");
        },
        sit() {
            console.log("Suns sēž");
        }
    }
}

let suns1 = createDog("Labradors", "Vidējs", 5, "Melns");
let suns2 = createDog("Vācu aitu suns", "Liels", 3, "Melns ar rudu");

console.log(suns1);
