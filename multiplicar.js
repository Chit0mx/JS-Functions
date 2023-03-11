/**
 * Retorna la multiplicación de los números introducidos sin usar el operador de multiplicación
 * Ejemplo: 3 * 5 = 15
 * Forma sin saber la fórmula usando for
 */
function multiplica(a,b){

    var resultado = 0;

    for(var i = 1; i<=b ; i++){

        resultado = resultado+a;

    }

    return resultado;
    
}

/**
 * Retorna la multiplicación de los números introducidos sin usar el operador de multiplicación
 * Ejemplo: 3 * 5 = 15
 * Formula usada: n1/(1/n2) (Parecido a  la regla de la tortilla)
 */
function multiplicaPro(n1,n2){

    return n1/(1/n2);

}