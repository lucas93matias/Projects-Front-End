const irmãos = [
    { nome: 'Aline', idade: 36, estadoCivil: 'casada' },
    { nome: 'Lucas', idade: 30, estadoCivil: 'solteiro' },
    { nome: 'Felipe', idade: 28, estadoCivil: 'solteiro' },
    { nome: 'Arthur', idade: 28, estadoCivil: 'casado' },
    { nome: 'Matheus', idade: 26, estadoCivil: 'juntado' }
];

const totalIdades = irmãos.reduce((acumulador, irmão) => acumulador + irmão.idade, 0);
const médiaIdades = totalIdades / irmãos.length;


console.log('A média de idade dos irmãos é:', médiaIdades.toFixed(2)); // Saída: 29.60

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
//const orcs = personagens.filter(function (personagem) {
 // return personagem.raca === "Orc"
//})
