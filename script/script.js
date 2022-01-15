//Efeito do texto digitando na tela 

function escrevendoTexto(e, velocidade){
    for(let z = 0; z < e.length; z++){
        const textoArray = e[z].innerHTML.split('');
        textoArray[z].innerHTML;

        e[z].innerHTML = '';

        for(let i = 0; i < textoArray.length; i++){
            
            setTimeout(function(){
                
                e[z].innerHTML += textoArray[i]
                
            }, velocidade * i)
        }
    }
    
}

const textoApresentacao = document.querySelectorAll(".animacao-texto-digitando")
escrevendoTexto(textoApresentacao, 50)

//--------------------------------------------
//animacao icons tecnologia

function animandoIcons(e){
    for(let i = 0; i < e.length; i++){

        e[i].style.marginBottom = "-150px"
        console.log(e[i])
        let aux = 0;
        for(let z = -80; z < 60; z++){
            aux++
            setTimeout(function(){
                e[i].style.marginBottom = z +"px"
            },10*aux)
        }
    }
}

function iconsTecnologiaDesce(e){
    e.style.marginBottom = "60px"
}

function iconsTecnologiaSobe(e){
    e.style.marginBottom = "64px"
}



const animacaoIcons = document.querySelectorAll(".img-icons-tecnologias img")

animandoIcons(animacaoIcons)

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

