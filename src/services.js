export function somar (a, b){
    return a + b;
}

export function dobro (numero){
    return numero * 2;
}

export function temperatura (temp){
    let a = false
    if(temp > 38){
        a = true
    }

    return a;
}

export function tabuada (num) {
    let a = [11];
    for (let i = 0; i<=10; i++) {
        a[i] = num * i;
    }
    return a;
}

export function media (n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

export function corPrimaria (cor) {
    let a = false;
    let b = cor.toLowerCase();
    if (b =="amarelo" || b == "azul" || b == "vermelho") {
        a = true;
    }

    return a;
}

export function ingressoCinema (inteira,meia, diaSemana, nacionalidade) {
    if(nacionalidade.toLowerCase() == 'brasileiro'){
        return (inteira + meia) * 5;
    } else if(diaSemana.toLowerCase() == 'quarta'){
        return (inteira + meia) * 14.25;
    } else{
        return (inteira * 28.5) + (meia * 14.25);
    }

}

export function FreqCaracter (texto, caracter){    

    let a = 0;

    for(let i = 0; i < texto.length; i++){
        if (texto.charAt(i) == caracter) {
            a++
        }
    }

    return a;
}

export function maiorNumero (array){
    let a = -2;

    for(let i = 0; i < array.length; i++) {
        if (a < array[i]) 
            a = array[i]
    }

    return a;
}
