function contador(){


    var res = window.document.getElementById("res")
   
    var PrecoCombustivel = document.getElementById("txtPrec")
    var ConsumoCarro = document.getElementById("txtCons")
    var KmPercorridos = document.getElementById("txtDist")

    var ValorTotal = (KmPercorridos.value / ConsumoCarro.value) * (PrecoCombustivel.value)
    
    res.innerHTML = `Estimativa de combustivel gasto: R$ ${ValorTotal.toFixed(2)} <br>`

    if(PrecoCombustivel.value == 0 || KmPercorridos.value  == 0 || ConsumoCarro.value  == 0){
        alert("ERRO informe corretamente os valores")
        res.innerHTML = `ERRO informe corretamente os valores`
    }

    var caixa = document.getElementById("txtRES")
    
    caixa.classList.add("result")

}


