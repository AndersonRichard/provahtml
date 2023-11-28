let listaTarefas = document.getElementById('listaTarefas');
let input1 = document.getElementById('input1');
let tarefaEditando = null;

function addTarefa() {
    const texto = input1.value;
    if (tarefaEditando) {
      
        tarefaEditando.querySelector('p').innerText = texto;
        tarefaEditando = null; 
    } else {
        let novoElemento = document.createElement("li");
        novoElemento.innerHTML = `<p>${texto}</p> 
                                    <button onclick='excluirTarefa(this)'><i class="bi bi-trash-fill apagar" id="lixo" onclick="excluirTarefa()"></i></button>
                                    <button onclick='editarTarefa(this)'><i class="bi bi-pencil-square editar"></i></button>
                                    <button onclick='concluirTarefa(this)'><i class="bi bi-check-lg concluir"></i></button>`;
        listaTarefas.appendChild(novoElemento);
    }
    input1.value = "";
}

function excluirTarefa(button) {
    alert("Item apagado com Sucesso");
    listaTarefas.removeChild(button.parentElement);
}

function editarTarefa(button) {
    tarefaEditando = button.parentElement;
    input1.value = tarefaEditando.querySelector('p').innerText;
}

function concluirTarefa(button) {
    let paragrafo = button.parentElement.querySelector('p');
    paragrafo.style.color = 'green';
}