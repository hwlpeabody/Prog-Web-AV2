const form = document.getElementById('form-cadastro');
const tabela = document.getElementById('tabela-tarefas');
const tbody = document.getElementById('tbody-tarefas');

let tarefas = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;
  const data = document.getElementById('data').value;

  const tarefa = {
    titulo,
    descricao,
    data
  };

  tarefas.push(tarefa);

  criarTabela();

  // Limpar os campos do formulário
  document.getElementById('titulo').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('data').value = '';
});

function criarTabela() {
  tbody.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const row = document.createElement('tr');

    const tituloCell = document.createElement('td');
    tituloCell.textContent = tarefa.titulo;

    const descricaoCell = document.createElement('td');
    descricaoCell.textContent = tarefa.descricao;

    const dataCell = document.createElement('td');
    dataCell.textContent = tarefa.data;

    const acoesCell = document.createElement('td');
    const excluirButton = document.createElement('button');
    excluirButton.textContent = 'Excluir';
    excluirButton.addEventListener('click', () => {
      tarefas.splice(index, 1);
      criarTabela();
    });
    acoesCell.appendChild(excluirButton);

    row.appendChild(tituloCell);
    row.appendChild(descricaoCell);
    row.appendChild(dataCell);
    row.appendChild(acoesCell);

    tbody.appendChild(row);
  });
}

