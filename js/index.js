

function butao(){
    

                // Obter o elemento <select> pelo ID
    var select = document.getElementById("opcaoum");
            
                // Pegar o valor selecionado
    var valorSelecionado = select.value;


                // Obter o elemento <select> pelo ID
    var select1 = document.getElementById("opcaodois");
            
                // Pegar o valor selecionado
    var valorSelecionado1 = select1.value;

    valordorealporudolar= Number(5.75);
    valordorealporumeuro= Number(6.13);
    valordodolarporumeuro= Number(0.94);


    // Real para Dolár
    if (valorSelecionado=="real" && valorSelecionado1=="dolard"){
        let n1 =document.getElementById("input").value;
        let resposta=(n1/valordorealporudolar);
        document.getElementById("resultado").innerHTML= `${n1} Real Brasileiro para Dólares Americanos: : $${resposta.toFixed(2)}`;
    }

    // Real para Euro
    else if (valorSelecionado=="real" && valorSelecionado1=="eurod"){
        let n1 =document.getElementById("input").value;
        let resposta=(n1/valordorealporumeuro);
        document.getElementById("resultado").innerHTML= `${n1} Real Brasileiro para Euro: $${resposta.toFixed(2)}`;
    }

    // Dolár para Real
    else if (valorSelecionado=="dolar" && valorSelecionado1=="reald"){
        let n1 =document.getElementById("input").value;
        let resposta=(n1*valordorealporudolar);
        document.getElementById("resultado").innerHTML= `${n1} Dólares Americanos para Real Brasileiro: $${resposta.toFixed(2)}`;
    }

    // Dolár para Euro
    else if (valorSelecionado=="dolar" && valorSelecionado1=="eurod"){
        let n1 =document.getElementById("input").value;
        let resposta=(n1*valordodolarporumeuro);
        document.getElementById("resultado").innerHTML= `${n1} Dólares Americanos para Euro: $${resposta.toFixed(2)}`;
    }

    // Euro para Real
    else if (valorSelecionado=="euro" && valorSelecionado1=="reald"){
        let n1 =document.getElementById("input").value;
        let resposta=(n1*valordorealporumeuro);
        document.getElementById("resultado").innerHTML= `${n1} Euros para Reais Brasileiros: $${resposta.toFixed(2)}`;
    }

    // Euro para Dólar
    else if (valorSelecionado=="euro" && valorSelecionado1=="dolard"){
        let n1 =document.getElementById("input").value;
        let resposta=(n1/valordodolarporumeuro);
        document.getElementById("resultado").innerHTML= `${n1} Euros para Reais Brasileiros: $${resposta.toFixed(2)}`;
    }



    

}

