 
function calcularHipoteca(prestamo, tasaInteres, plazo) {
    // Convertir tasa de interés a decimal
    tasaInteres = tasaInteres / 100;
  
    // Calcular la tasa de interés mensual
    let tasaInteresMensual = tasaInteres / 12;
    
    // Calcular el número de pagos mensuales
    let numPagos = plazo * 12;
  
    // Calcular la cantidad de cada pago mensual
    let pagoMensual = (prestamo * tasaInteresMensual) / (1 - (1 + tasaInteresMensual) ** (-numPagos));
  
    // Redondear el pago mensual a dos decimales
    pagoMensual = Math.round(pagoMensual * 100) / 100;
  
    // Retornar la cantidad del pago mensual
    return pagoMensual;
  }
  
  // Pedir al usuario los datos necesarios para el cálculo de la hipoteca
  let prestamo = parseFloat(prompt("Cantidad del préstamo:"));
  let tasaInteres = parseFloat(prompt("Tasa de interés anual (%):"));
  let plazo = parseFloat(prompt("Plazo del préstamo (años):"));
  
   // Calcular el pago mensual de la hipoteca
  let pagoMensual = calcularHipoteca(prestamo, tasaInteres, plazo);
  
  // Mostrar el resultado en un alert
  
  alert(`El pago mensual de la hipoteca es de: €${pagoMensual}`);
  
  
  // Para imprimir la amortización de la hipoteca
  let saldoPendiente = prestamo;
  let mes = 1;
  numPagos = plazo * 12;
  tasaInteresMensual = tasaInteres / 12;
  
  alert("Tabla de Amortización");
  alert("---------------------");
  alert("Mes\tPago\tInterés\tPrincipal\tSaldo");
  
  while (mes <= numPagos) {
    // Calcular el interés del mes
    let interesMensual = (saldoPendiente * tasaInteresMensual) / 100;
  
    // Calcular el principal del mes
    let principalMensual = pagoMensual - interesMensual;
  
    // Actualizar el saldo pendiente
    saldoPendiente -= principalMensual;
  
    // Redondear los valores a dos decimales
    interesMensual = Math.round(interesMensual * 100) / 100;
    principalMensual = Math.round(principalMensual * 100) / 100;
    saldoPendiente = Math.round(saldoPendiente * 100) / 100;
  
    // Imprimir la información del mes en la tabla de amortización
    alert(`Mes:${mes}\tPago Mensual:€${pagoMensual}\tInteres mensual:€${interesMensual}\tPrincipal:€${principalMensual}\tSaldo Pendiente:€${saldoPendiente}`);
  
    // Incrementar el contador del mes
    mes++;
  }
  
  // Utilizando ciclo if para mostrar un mensaje al usuario dependiendo del resultado del cálculo
  if (pagoMensual < prestamo * 0.3) {
    alert("El pago mensual de la hipoteca es asequible para su presupuesto.");
  } else {
    alert("El pago mensual de la hipoteca es alto para su presupuesto. Considere buscar una casa más económica o esperar a ahorrar más dinero.");
  }