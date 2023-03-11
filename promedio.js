/**
 * Retorna el promedio aritmetico de un array
 * [88.625, 92.88, 96.57, 96.29, 95.75, 93.75, 97.71]
 */

function promedio(arr_prom){

    var promedio = 0;

    for (let suma of arr_prom) {
        promedio = promedio += suma;
    }

    return promedio / arr_prom.length;
    
}