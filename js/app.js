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

    // Genera un arreglo de 20 posiciones con valores del 1 al 100
    const generarArreglo = [];
        for (let i = 0; i < 20; i++) {
            generarArreglo.push(Math.floor(Math.random() * (100 - 1) + 1));    
        }

    // Mando a llamar la funcion de promedio
    promedio(generarArreglo);


    // Mando a llamar la funcion para imprimir la lista normal
    imprimirArreglos(generarArreglo,document.getElementById("normal"));

    // Mando a llamar la funcion para contrar el numero de pares en el arreglo
    pares(generarArreglo);

    // Creo un arreglo y lo ordeno para mandarlo a imprimir
    let arregloOrdenado = ordenar(generarArreglo)
    imprimirArreglos(arregloOrdenado,document.getElementById("ordenado"));

    // Calcula el promedio del arreglo que reciba
    function promedio(arreglo){
        let suma = 0;
        let promedio = 0;

        for(let i=0; i<arreglo.length; i++){
            suma = suma + arreglo[i];
        }
        promedio = suma / arreglo.length;
        document.getElementById("promedio").value = promedio;    
    }

    // Funcion para imprimir el arreglo en forma de lista
    function imprimirArreglos(arreglo,etiqueta){
        let lista="";

        for(let i=0; i<arreglo.length; i++){
            lista += "<li>" + arreglo[i] + "</li>";
        }
        etiqueta.innerHTML = lista;
    
    }

    // Funcion para contar el numero de pares en el arreglo
    function pares(arreglo){
        let pares = 0;
        for(let i=0; i<arreglo.length; i++){
            if(arreglo[i] %2 == 0){
                pares++;
            } 
        }
        document.getElementById("pares").value = pares;
    }

    // Funcion para ordenar los numeros de mayor a menor
    function ordenar(arreglo){
        let ordenado = arreglo.slice();
        return ordenado.sort((a, b) => b - a);
    }


}
