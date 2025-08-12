// script.js
 
//Seleciona os elementos do HTML com os quais vamos interagir
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
 
//Tenta carregar as tarefas do localStorage. Se não houver nada, começa um array vazio.
//JSON.parse() transforma o texto guardado de volta em um objeto/array JavaScript.
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
 
// Função para salvar as tarefas no localStorage.
//JSON.stringfy() transforma nosso array de tarefas em uma string para poder ser guardado.
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
 
//Função para renderizar (desenhar) a lista de tarefas na tela
function renderTasks(){
    // Limpa a lista atual para não duplicar itens
    taskList.innerHTML = '';
 
//Para cada tarefa no nosso array, cria um elemento <li> e o adiciona na lista <ul>
tasks.forEach((taskText, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
 
    //O texto da tarefa
    const span = document.createElement('span');
    span.textContent = taskTest;
 
    //Área para os botões de ação
    const actionsDiv= document.createElement('div');
    actionsDiv.className = 'actions';
 
    //Botão de Editar
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '✏'; //ícone de lápis
    editBtn.oncick = () => editTask(index);
})
 
 
}
 