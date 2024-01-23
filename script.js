function contador(){


    alert("ERRO a página que você acessou pode conter Malwares que podem danificar deu Dispositivo. SEU IPHONE SERÁ FORMATADO EM 30 SEGUNDOS ")
  

    var res = window.document.getElementById("res")
   
    
    var ModeloCar = document.getElementById("ModelCar")
    var PrecoCombustivel = document.getElementById("txtPrec")
    var ConsumoCarro = document.getElementById("txtCons")
    var KmPercorridos = document.getElementById("txtDist")

    if (ModeloCar.value === "opcao up"){
        ConsumoCarro.value = 13.5
    }

    var ValorTotal = (KmPercorridos.value / ConsumoCarro.value) * (PrecoCombustivel.value)
    
    res.innerHTML = `Estimativa de combustivel gasto: R$ ${ValorTotal.toFixed(2)} <br>`

    if(PrecoCombustivel.value == 0 || KmPercorridos.value  == 0 || ConsumoCarro.value  == 0){
        alert("ERRO informe corretamente os valores")
        res.innerHTML = `ERRO informe corretamente os valores`
    }

    var caixa = document.getElementById("txtRES")
    
    caixa.classList.add("result")

}


