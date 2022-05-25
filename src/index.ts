/*
- Cree un método esMultiplo con 2 parámetros que devuelva el valor
lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo 
- Recuerde que un numero es múltiplo de otro si al
dividirlo su resto es cero
- Recuerde que la operación mod permite saber
si el resto de una división es cero
*/

let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");
let btnSend = document.getElementById("send");

btnSend?.addEventListener("click", () => {
  let numero1: number = Number(date1.value);
  let numero2: number = Number(date2.value);

  function esMultiplo(numero1: number, numero2: number): boolean {
    return numero1 % numero2 === 0;
  }

  if (esMultiplo(numero1, numero2)) {
    console.log(numero1 + " es multiplo de " + numero2);
  } else {
    console.log(numero1 + " no es multiplo de " + numero2);
  }
});
