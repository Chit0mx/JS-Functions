/**
 * Retorna la sumatoria del numero introducido
 * Ejemplo: 365 = 66795
 * Forma sin saber la fórmula usando for 
 */
function sumatoria(numero){

    var suma = 0;

    for(var i = 1; i <= numero; i++){

        suma = suma + i;

    }

    return suma;

}

/**
 * Retorna la sumatoria del numero introducido
 * Ejemplo: 365 = 66795
 * Formula usada: suma = [(n-1) * n]/2 
 */
function sumatoriaPro(numero){

    var suma = ((numero + 1) * numero)/2;

    return suma;

}