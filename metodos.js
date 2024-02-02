let pessoa = {
    nome: "Lucas ",
    sobreNome: "Matias",
    Idade: 30,
    dizerOla() {
console.log("Olá, mundo! Meu nome é " + this.nome + this.sobreNome)
    }
}

console.log(pessoa)

pessoa.dizerOla()