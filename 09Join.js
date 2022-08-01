const elements = ['Tierra', 'Fuego', 'Aire', 'Agua'];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('Ciclo For',rtaFinal);

const rtaJoin = elements.join('--');
console.log('Método Join',rtaJoin);

const titulo = 'Curso de manipulación de arrays';
const url = titulo.split(' ').join('-').toLowerCase();
console.log(url);
