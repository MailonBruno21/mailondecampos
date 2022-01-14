//Efeito do texto digitando na tela 
function escrevendoTexto(e, velocidade){
    const textoArray = e.innerHTML.split('');
    e.innerHTML = '';

    for(let i = 0; i < textoArray.length; i++) {
        setTimeout(() => e.innerHTML += textoArray[i], velocidade * i);
    }
    
}

const textoApresentacao = document.querySelector('#animacao-apresentacao')
escrevendoTexto(textoApresentacao, 40)
const textoBemVindo = document.querySelector('#animacao-boasvindas')
escrevendoTexto(textoBemVindo, 64)

//Menu dropdown com clique
function menuDrop() {
    document.getElementById("div-dropdown").classList.toggle("show")
    document.getElementById("id-cabecalho").classList.toggle("altura")
}

window.onclick = function (event) {
    if (!event.target.matches('.button-dropbutton')) {
        var dropdowns = document.getElementsByClassName("div-menu-p");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

