"use strict";

//(dom
var restante = 0;

var guardarPresupuesto = function guardarPresupuesto() {
  var presupuesto = parseInt(document.getElementById("ingresos_mensual").value);

  if (presupuesto < 1 || isNaN(presupuesto)) {
    console.log("error presupuesto no valido");
    return;
  }

  localStorage.setItem("presupuesto", presupuesto);
  localStorage.setItem("gastos", JSON.stringify([]));
  actualizar();
};

actualizar = function actualizar() {
  var presupuesto = localStorage.getItem("presupuesto");
  restante = presupuesto;

  if (!presupuesto) {
    console.log("no hay presupuesto");
  } else {
    console.log("presupuesto total: ".concat(presupuesto));
    nuevalista();
  }
};

var nuevalista = function nuevalista() {
  var gastos = JSON.parse(localStorage.getItem("gastos"));
  totalGstos = 0;
  gastos.map(function (gastos) {
    totalGstos += parseInt(gastos.costo);
  });
  console.log("Total de gastos " + totalGstos);
  var myform = restante - totalGstos;
  console.log("restante: " + myform);
  alert("restante: " + myform);
};

$('#adicionar').click(function () {
  var producto = document.getElementById("producto").value;
  var costo = parseInt(document.getElementById("costo").value);

  if (costo < 1 || isNaN(costo) || producto.trim() === '') {
    alert("error en el form");
    return;
  }

  if (costo > restante) {
    alert("cantidad mayor a restante");
    return;
  }

  var nuevoGasto = {
    producto: producto,
    costo: costo
  };
  var gastos = JSON.parse(localStorage.getItem("gastos"));
  gastos.push(nuevoGasto);
  localStorage.setItem("gastos", JSON.stringify(gastos));
  nuevalista();
  document.getElementById("formGastos").reset();
  console.log(nuevoGasto);
  var i = 1; //contador para asignar id al boton que borrara la fila

  var fila = '<tr id="row' + i + '"><td>' + producto + '</td><td>' + costo + '</td><td><button onclick="deleted()"  type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila

  i++;
  $('#mytable tr:first').after(fila);
  $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando

  var nFilas = $("#mytable tr").length;
  $("#adicionados").append(nFilas - 1); //le resto 1 para no contar la fila del header

  document.getElementById("costo").value = "";
  document.getElementById("producto").value = "";
});
$(document).on('click', '.btn_remove', function () {
  var button_id = $(this).attr("id"); //cuando da click obtenemos el id del boton

  $('#row' + button_id + '').remove(); //borra la fila
  //limpia el para que vuelva a contar las filas de la tabla

  $("#adicionados").text("");
  var nFilas = $("#mytable tr").length;
  $("#adicionados").append(nFilas - 1);
});
/*

  let costotodo = 0
function calcular(){
let sumatodo = total + costotodo

  console.log(sumatodo)
}
    
  
 for (var i = 1; i < document.getElementById("mytable").rows.length; i++) {
  var TarjetaId = document.getElementById("mytable").rows[i].cells[0].innerText;
    var varr = document.getElementById("mytable").rows[i].cells[1].innerText;
}

console.log(TarjetaId);
console.log(varr);
}
*/