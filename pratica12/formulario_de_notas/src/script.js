const form = document.getElementById('form-nota');
const lista = document.getElementById('lista-notas');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const aluno = document.getElementById('aluno').value;
  const nota = document.getElementById('nota').value;

  const item = document.createElement('li');
  item.textContent = `${aluno} - Nota: ${nota}`;

  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Remover';
  btnRemover.style.marginLeft = '10px';
  btnRemover.style.backgroundColor = '#e74c3c';
  btnRemover.style.color = 'white';
  btnRemover.style.border = 'none';
  btnRemover.style.padding = '5px 10px';
  btnRemover.style.borderRadius = '4px';
  btnRemover.style.cursor = 'pointer';

  btnRemover.addEventListener('click', function () {
    lista.removeChild(item);
  });

  item.appendChild(btnRemover);
  lista.appendChild(item);

  form.reset();
});