const form = document.getElementById('form-contatos');
let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputFoneContato = document.getElementById('fone-contato');
    const inputMailContato = document.getElementById('email-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputFoneContato.value}</td>`;
    linha += `<td>${inputMailContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputFoneContato.value = '';
    inputMailContato.value = '';
});