( () => {

const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui());

    tarefa.appendChild(BotaoDeleta());

    lista.appendChild(tarefa)
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', criarTarefa)


// Concluir tarefa

const BotaoConclui = () => {
    let botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = "Concluir";

    document.addEventListener('click', concluirTarefa)
    return botaoConclui
}


const concluirTarefa = (evento) => {
    
    let botaoConclui = evento.target;

    let paiBotaoConclui = botaoConclui.parentElement;    
    paiBotaoConclui.classList.toggle('done');
}

// Deletar tarefa

const BotaoDeleta = () => {
    
    botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = "Deletar";
    botaoDeleta.addEventListener('click', deletarTarefa)
    return botaoDeleta;
}

const deletarTarefa = (evento) =>{
    botaoDeleta = evento.target;
    
    let paiDeleta = botaoDeleta.parentElement;
    paiDeleta.remove();

}

})()



