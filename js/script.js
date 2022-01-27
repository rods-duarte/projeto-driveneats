var total = 0;
var pedido = []; 

const selecionarItem = (idItem, grupoItem) => {    // Envia os dados do item selecionado pelo usuario para um array
    let itens = document.getElementsByClassName(grupoItem);
    let item = document.getElementById(idItem);

    for(let i = 0; i < itens.length; i++) {    // Percore todos os itens de determinado Menu
        if (itens[i].classList.contains("selecionado")) {
            itens[i].classList.remove("selecionado");    // Remove o css de outro item previamente selecionado de um mesmo Menu
            
            total -= parseFloat(document.getElementById("valor-" + itens[i].id).textContent.replace(",", "."));    // Remove o valor do total de um possivel item do mesmo Menu previamente selecionado
        }
    }

    for(let i = 0; i < pedido.length; i++) {    
        if (pedido[i].classList.contains(grupoItem)) {    // Remove qualquer dado de outro item previamente selecionado de um mesmo Menu 
            pedido.splice(i, 1);
        }
    }

    item.classList.add("selecionado");    // Aplica o css no item selecionado 
    total += parseFloat(document.getElementById("valor-" + item.id).textContent.replace(",", "."));    // Adiciona o preço do item ao total
    pedido.push(item);    //    Armazena dados que serão utilizados posteriormente
    if (pedido.length === 3) {ativarBotao();}
      // para teste no console

};

function ativarBotao() {    // Torna o botao de finalizar pedido funcional
    let botao = document.getElementById("finalizar");
    botao.style.backgroundColor = "#32B72F";
    botao.textContent = "Fechar pedido";
    botao.setAttribute("onclick", "confirmarPedido()")
}

function confirmarPedido() {    // Faz o display da interface de confirmação do pedido
    document.getElementById("finalizar-pedido").style.display = "flex";

    for(let i = 0; i < pedido.length; i++) {    // Associa os dados relevantes da lista 'pedido' na interface de confirmação do pedido
        if (pedido[i].classList.contains("comida")) {   
            
            document.getElementById("item-comida").getElementsByTagName("p")[0].textContent = pedido[i].getElementsByTagName("strong")[0].textContent;

            document.getElementById("item-comida").getElementsByTagName("p")[1].textContent = pedido[i].getElementsByTagName("small")[0].textContent;

        } else if (pedido[i].classList.contains("bebida")) {
            
            document.getElementById("item-bebida").getElementsByTagName("p")[0].textContent = pedido[i].getElementsByTagName("strong")[0].textContent;

            document.getElementById("item-bebida").getElementsByTagName("p")[1].textContent = pedido[i].getElementsByTagName("small")[0].textContent;

        } else if (pedido[i].classList.contains("sobremesa")) {

            document.getElementById("item-sobremesa").getElementsByTagName("p")[0].textContent = pedido[i].getElementsByTagName("strong")[0].textContent;

            document.getElementById("item-sobremesa").getElementsByTagName("p")[1].textContent = pedido[i].getElementsByTagName("small")[0].textContent;
        }
    }
    document.getElementById("total").getElementsByTagName("strong")[1].textContent = "R$ " + total.toFixed(2);
}

function finalizarPedido() {    // Requisita as informações do usuario e encaminha o pedido para o whatsapp
    let nome = prompt("Insira seu nome");
    let endereco = prompt("Informe o endereço:");
    let comida = document.getElementById("item-comida").getElementsByTagName('p')[0].textContent;
    let bebida = document.getElementById("item-bebida").getElementsByTagName('p')[0].textContent;
    let sobremesa = document.getElementById("item-sobremesa").getElementsByTagName('p')[0].textContent;

    let mensagem = "Olá, gostaria de fazer o pedido:\n" +
    "- Prato: " + comida + "\n" +
    "- Bebida: " + bebida + "\n" +
    "- Sobremesa: "+ sobremesa + "\n" +
    "Total: R$ " + total.toFixed(2) + "\n" +
    " nome: " + nome + "\n" +
    " Endereço: " + endereco;

    mensagem = encodeURIComponent(mensagem);
    window.location.href="https://wa.me/5511999999999?text=" + mensagem;
}

function cancelarPedido() {    // Retorna para a seleção de itens
    document.getElementById("finalizar-pedido").style.display = "none";
}