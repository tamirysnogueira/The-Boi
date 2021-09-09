// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

function calcular(){
    let adultos = document.getElementById('adultos').value 
    let crianças =document.getElementById('crianças').value
    let duração = document.getElementById('duração').value

    if((adultos == '') || (crianças == '') || (duração == '')) {
        alert('Insira todas as informações')
    }
    
    if(adultos && crianças && duração != ' '){
        //abrir modal
        let modal = document.getElementById('modal')

        modal.style.display = 'flex'

        let carne = 0
        let cerveja = 0
        let refrigerante = 0

        adultos = parseInt(adultos)
        crianças = parseInt(crianças)
        
        if(duração > 6){
            carne = (650 * (adultos + (crianças * 0.5)))/1000
            cerveja = (2000 * (adultos + (crianças * 0.5)))/330 // 330 ml == 1 lata
            refrigerante = (1500 * (adultos + (crianças * 0.5)))/350 // 350 ml == 1 lata
        }
        if (duração <= 6) {
            carne = (400 * (adultos + (crianças * 0.5)))/1000
            cerveja = (1200 * (adultos + (crianças * 0.5)))/330
            refrigerante = (1000 * (adultos + (crianças * 0.5)))/350
        }

        mostrar(carne,cerveja,refrigerante)
    }
}

function mostrar(carne,cerveja,refrigerante){
    document.getElementById('carne').innerHTML = `${carne.toFixed(1)} Kg`
    document.getElementById('cerveja').innerHTML = `${parseInt(cerveja)} Latas`
    document.getElementById('refrigerante').innerHTML = `${parseInt(refrigerante)} Latas`

}

//fechar modal
function fechar(){
    let modal = document.getElementById('modal')

    modal.style.display = 'none'
}