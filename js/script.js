var total = 0   // valor total a pagar

const selecionarItem = (idItem, grupoItem) => {
    var itens = document.getElementsByClassName(grupoItem);
    var item = document.getElementById(idItem);

    for(let i = 0; i < itens.length; i++) {    // Percore todos os itens de determinado Menu
        if (itens[i].classList.contains("selecionado")) {
            itens[i].classList.remove("selecionado");    // Remove o css de outro item selecionado no mesmo Menu
            
            total -= parseFloat(document.getElementById("valor-" + itens[i].id).textContent.replace(",", "."));    // Remove o valor do total de um possivel item do mesmo Menu previamente selecionado
        }
    }

    item.classList.add("selecionado");    // Aplica o css no item selecionado 
    total += parseFloat(document.getElementById("valor-" + item.id).textContent.replace(",", "."));    // Adiciona o preço do item ao total
    console.log(total);   // para teste no console

};