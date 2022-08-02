const matriz = [
    [1,2,3], //0
    [4,5,6], //1
    [7,8,9,[10,11,12]], //2
];
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element)
    }
}

console.log('Ciclo For', newArray);

const rtaFlat = matriz.flat(3);
console.log('Método Flat', rtaFlat);