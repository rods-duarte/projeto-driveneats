const selecionarItem = (idItem, grupoItem) => {
    var itens = document.getElementsByClassName(grupoItem);
    var item = document.getElementById(idItem);

    for(let i = 0; i < itens.length; i++) {    // Percore todos os itens de determinado Menu
        itens[i].classList.remove("selecionado");    // Remove o css de outro item selecionado no mesmo Menu
    }

    item.classList.add("selecionado");  
};