

function obtenerTxt(){
    prompt("Hola !!!");

}

function saludo(){
    return "Hola";
}

function calculadora(n1,n2,calculo){

    let resultado = 0;
    let mensaje = "";


    if (mensaje == "suma") {
        mensaje
    }   

    if (calculo == "") {
        alert("No seleccionaste ningun calculo");
    }else{

        switch (calculo) {
            case "suma":
                    resultado = n1 + n2;
                    alert( mensaje + " : " + resultado);
                break;
            case "resta" :
                    resultado = n1 -  n2;
                    alert(resultado);
                break;
            case "factor" :
                    resultado = n1 * n2;
                    alert(resultado);
                break;
        
            default:
                    alert("Este calculo no exite");
                break;
        }

    }


 

}

