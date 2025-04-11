function colorirDia(){
    // Pegar valor de campo de dia
    let day = document.getElementById('day').value;

    // Pega valor do campo de cor
    let color= document.getElementById('color').value;

    // Pega os elementos da tabela calendário
    let calendar = document.getElementById('calendar');

    // Verificar se o campo de dia foi prenchido
    if(!day){
        alert('Favor informar um dia');
    } else if((day > 0) && (day < 31)){
        //Se o numero de dias está no intervalo aplicará a cor na célula do calendario
        let td = calendar.getElementsByTagName('td')[parseInt(day)+1];
        td.style.backgroundColor = color;
    } else {
        alert("Favor informar um dia do calendario");
    }

    // Guarda a célula da tabela
    let elementos = document.querySelectorAll('td');

    // Declara e inicializa contadores
    let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;

    // Loop para verificaar o estilo de cada célula e contar quantas tem cor e qual cor
    for (let i = 0; i < elementos.length; i++){
        var estilo = window.getComputedStyle(elementos[i]);

        // Obtém a cor de fundo atual da célula
        var corEstilo = estilo.backgroundColor;

        // Verifica a cor e incrementa contador correspodente
        if(corEstilo === "rgb(173, 216, 230)" || corEstilo === "lightBlue"){
            contadorAzul++;
        } else if(corEstilo === "rgb(152, 215, 152)" || corEstilo === "paleGreen"){
            contadorVerde++;
        } else if(corEstilo === "rgb(255, 182, 193)" || corEstilo === "lightPink"){
            contadorRosa++;
        } else if(corEstilo === "rgb(106, 90, 205)" || corEstilo === "slateBlue"){
            contadorRoxo++;
        }
    }

}