function jugar(){
    let numeroSecreto=7;
    let intento=prompt("adivina el número secreto (entre 1 y 10):");
    intento=Number(intento);
    if(!isNaN(intento)){
    if(intento===numeroSecreto){
    alert("adivinaste el número secreto");
    }else{
    alert("ese no es el número, el número secreto era "+numeroSecreto+".");
    }
    }else{
    alert("intenta de nuevo.");
    }
    }
    