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
escrevendoTexto(textoApresentacao, 30)

//--------------------------------------------
//animacao icons tecnologia

function animacaoIconsTecnologia(e){
    // console.log(e)
    for(let i = 0; i < e.length; i++){

        // e[i].style.marginBottom = "-150px"
        var teste
        let aux = 0;
        for(let z = 30; z > 0; z--){
            aux++
            setTimeout(function(){
                e[i].style.marginTop = z +"%"
                // console.log(e[i])
                // console.log(e[i].style.marginTop + "aqui" )
                // console.log(e[i])
            }, 50 * aux)
            teste = z
            
        }

    }
}



const animacaoIcons = document.querySelectorAll(".icons-tecnologias")

animacaoIconsTecnologia(animacaoIcons)

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

