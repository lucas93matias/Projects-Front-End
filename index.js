function addInput() {
    // Seleciona a lista onde os novos inputs serão adicionados
    const ul = document.getElementById('input-list');

    // Cria um novo item de lista (li)
    const newLi = document.createElement('li');
    newLi.className = 'list-item'; // Corrigido para 'className' em vez de 'ClassName'
    newLi.innerText = 'Novo Input:';

    // Cria um novo elemento de input
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'input';

    // Adiciona o novo input como filho do novo item de lista
    newLi.appendChild(newInput);

    // Adiciona o novo item de lista à lista existente no DOM
    ul.appendChild(newLi);
}
