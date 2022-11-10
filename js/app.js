/** 
 * 1. Diseña una función que reciba como argumento un arreglo de valores 
 * enteros de 20 posiciones , regrese el valor promedio de los elementos del arreglo
 * 
 * 2. Diseñe una función que reciba como argumento un arreglo de 20 valores
 * numéricos enteros, y me regrese la cantidad de valores pares que existe en el
 * arreglo
 * 
 * 3. Diseñe una función que reciba como argumento un arreglo de 20 valores
 * numéricos enteros, ordene los valores del arreglo de mayor a menor.
 * 
**/


function calcular(){

    const generarArreglo = [];
        for (let i = 0; i < 20; i++) {
            generarArreglo.push(Math.floor(Math.random() * (100 - 1) + 1));    
        }

    imprimirArreglos(generarArreglo,document.getElementById("normal"));
    promedio(generarArreglo);
    pares(generarArreglo);
    let arregloOrdenado = ordenar(generarArreglo)
    imprimirArreglos(arregloOrdenado,document.getElementById("ordenado"));

    function promedio(arreglo){
        let suma = 0;
        let promedio = 0;

        for(let i=0; i<arreglo.length; i++){
            suma = suma + arreglo[i];
        }
        promedio = suma / arreglo.length;
        document.getElementById("promedio").value = promedio;    
    }

    function pares(arreglo){
        let pares = 0;
        let impares = 0;
        for(let i=0; i<arreglo.length; i++){
            if(arreglo[i] %2 == 0){
                pares++;
            }else{
                impares++
            }
        }
        document.getElementById("pares").value = pares;
        document.getElementById("impares").value = impares;

        let ppar = pares / 20 * 100
        let pimpar = impares / 20 * 100
        document.getElementById("pares1").innerHTML = ppar.toFixed(2) + "%";
        document.getElementById("impares1").innerHTML = pimpar.toFixed(2) + "%"

    if(ppar>=pimpar){
        if((ppar-pimpar) > 25){
            document.getElementById("simetrico").innerHTML = "No es simetrico";
        }
        else{
            document.getElementById("simetrico").innerHTML = "Es simetrico";
        }
    }
    if(pimpar>=ppar){
        if((pimpar-ppar) > 25){
            document.getElementById("simetrico").innerHTML = "No es simetrico";
        }
        else{
            document.getElementById("simetrico").innerHTML = "Es simetrico";
        }
    }

    }

    function ordenar(arreglo){
        let ordenado = arreglo.slice();
        return ordenado.sort((a, b) => b - a);
    }

    function imprimirArreglos(arreglo,etiqueta){
        let lista="";

        for(let i=0; i<arreglo.length; i++){
            lista += "<li>" + arreglo[i] + "</li>";
        }
        etiqueta.innerHTML = lista;
    
    }



}
