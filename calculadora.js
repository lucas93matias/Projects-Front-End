function calculadoraAreaTriangulo() {
    const base = parseFloat(prompt("Informe a base do triângulo:"));
    const altura = parseFloat(prompt("Informe a altura do triângulo:"));
    return (base * altura) / 2;
}

function calculadoraAreaRetangulo() {
    const base = parseFloat(prompt("Informe a base do retângulo:"));
    const altura = parseFloat(prompt("Informe a altura do retângulo:"));
    return base * altura;
}

function calculadoraAreaQuadrado() {
    const lado = parseFloat(prompt("Informe o lado do quadrado:"));
    return lado * lado;
}

function calculadoraAreaTrapezio() {
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
    const altura = parseFloat(prompt("Informe a altura do trapézio:"));
    return ((baseMaior + baseMenor) * altura) / 2;
}

function calculadoraAreaCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo:"));
    return 3.14 * raio * raio;
}

function exibirMenu() {
    return prompt(
        "Calculadora geométrica\n" +
        "1. Calcular área do triângulo\n" +
        "2. Calcular área do retângulo\n" +
        "3. Calcular área do quadrado\n" +
        "4. Calcular área do trapézio\n" +
        "5. Calcular área do círculo\n" +
        "6. Sair\n"
    );
}

function executar() {
    let opcao = "";

    do {
        opcao = exibirMenu();
        let resultado;

        switch (opcao) {
            case "1":
                resultado = calculadoraAreaTriangulo();
                break;
            case "2":
                resultado = calculadoraAreaRetangulo();
                break;
            case "3":
                resultado = calculadoraAreaQuadrado();
                break;
            case "4":
                resultado = calculadoraAreaTrapezio();
                break;
            case "5":
                resultado = calculadoraAreaCirculo();
                break;
            case "6":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida!");
                break;
        }

        if (resultado !== undefined) {
            alert("Resultado: " + resultado);
        }

    } while (opcao !== "6");
}

executar();
