/*
• Cree un algoritmo que visualice los
números que son múltiplos de 2 o
de 3 que hay entre 1 y 100

• Tener en cuenta que hay números
que son múltiplos de 2 y de 3 al
mismo tiempo

• En dichos casos, solamente
indique el número una vez]*/

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
