const form = document.getElementById('form-nota');
const lista = document.getElementById('lista-notas');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const aluno = document.getElementById('aluno').value;
  const nota = document.getElementById('nota').value;

  const item = document.createElement('li');
  item.textContent = `${aluno} - Nota: ${nota}`;
  lista.appendChild(item);

  form.reset();
});