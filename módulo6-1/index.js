const nomesCurtiram = [];
const input = document.getElementById('nome');
const botao = document.getElementById('curtirBtn');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
  const nome = input.value.trim();

  if (nome && !nomesCurtiram.includes(nome)) {
    nomesCurtiram.push(nome);
  }

  atualizarTexto();
  input.value = '';
});

function atualizarTexto() {
  const qtd = nomesCurtiram.length;

  if (qtd === 0) {
    resultado.textContent = 'Ninguém curtiu';
  } else if (qtd === 1) {
    resultado.textContent = `${nomesCurtiram[0]} curtiu`;
  } else if (qtd === 2) {
    resultado.textContent = `${nomesCurtiram[0]} e ${nomesCurtiram[1]} curtiram`;
  } else {
    resultado.textContent = `${nomesCurtiram[0]}, ${nomesCurtiram[1]} e mais ${qtd - 2} pessoas curtiram`;
  }
}
