// 1. Identificamos o elemento HTML onde a imagem vai aparecer
const imgElement = document.querySelector('img');

// 2. Definimos o URL da API (este vem da documentação que enviou)
const url = "https://api.thecatapi.com/v1/images/search";

// 3. Função para procurar o gatinho
function carregarGatinho() {
  fetch(url)
    .then(resposta => {
      // Converte a resposta bruta em JSON
      return resposta.json();
    })
    .then(dados => {
      // A API retorna um array: [{ "url": "...", ... }]
      // Pegamos o primeiro item [0] e a propriedade .url
      const urlDaImagem = dados[0].url;
      
      // Colocamos o link no atributo 'src' da tag <img>
      imgElement.src = urlDaImagem;
    })
    .catch(erro => {
      console.error("Erro ao carregar a imagem:", erro);
    });
}

// Executa a função quando a página carrega
carregarGatinho();