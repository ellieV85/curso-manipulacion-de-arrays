const pets = ['Dog', 'Cat', 'Golden Fish','Hamster'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'Dog') {
        includeInArray = true;
        break;
    }
}
console.log('Ciclo For', includeInArray);


const rtaIncludes = pets.includes('Dog')
console.log('Método Includes', rtaIncludes);
