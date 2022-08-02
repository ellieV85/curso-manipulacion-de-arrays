const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}
console.log('Ciclo For', newArray);

const rtaConcat = elements.concat(otherElements);
console.log('Concat',rtaConcat);

const rtaSprin = [...elements, ...otherElements];
console.log('...', rtaSprin);

const rtaString = [...elements, 'random'];
console.log('string', rtaString);

const rtaString2 = [...elements, ...'random'];
console.log('string2', rtaString2);

// elements.push(otherElements);
// console.log('array original', elements);

elements.push(...otherElements);
console.log('array original', elements);