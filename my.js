


  /*
//(dom
// inicializamo la variable restante en cero
var restante = 0

  const guardarPresupuesto=()=>{
    
  let presupuesto = parseInt(document.getElementById("ingresos_mensual").value);
  if (presupuesto<1 || isNaN(presupuesto)){
    console.log("invalido")
    mostrarError("msj-err" , "presupuesto invalido");
    return;
  }
  // se guarda los datos de presupuesto y gastos 
  localStorage.setItem("presupuesto", presupuesto);
  localStorage.setItem("gastos",JSON.stringify([]));
  actualizar();
} 

//la funcion actualizar optenemos nuevamente un presupuesto que se abia enbiado con local set
actualizar=()=>{
  
  let presupuesto = localStorage.getItem("presupuesto");
  
  let divpregunta = document.getElementById("pregunta");
  let divformGastos = document.getElementById("formGastos");
  let divdeudasform = document.getElementById("deudas-form");
  document.getElementById("Presupuesto").innerHTML = presupuesto;
  divpregunta.style.display = "none";
  divformGastos.style.display ="none";
  divdeudasform.style.display = "none";
 //contador para asignar id al boton que borrara la fila let i = 1; 
     // el restante llevara lo que se lleva del presupuestolet fila =`'<tr id="row' + i + '"><td>' ${ producto} '</td><td>'  ${costo}'</td><td>'  ${restante} '</td><td><button onclick="deleted()"  type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila`
  
     
     // Adding the entire table to the body tag
     
   
 
   restante = presupuesto;
  if(!presupuesto){
     divpregunta.style.display = "block";
    console.log("no hay presupuesto");
    mostrarError("msj-err" , "crea tu presupuesto"); 
   
    
  }
  else{ 
     divpregunta.style.display = "none";
     divformGastos.style.display = "block";
      divdeudasform.style.display = "block";
      
      //
    console.log(`presupuesto total: ${presupuesto}`);
    
  nuevalista();
 

  }
  }
 const nuevalista =()=>{
  let presupuesto = localStorage.getItem("presupuesto");
// optenemos gastos 
  let gastos = JSON.parse(localStorage.getItem("gastos"));
// iniviamos total gastos en cero  


  let totalGstos=0;
  gastos.map(gastos=>{
  totalGstos+=parseInt(gastos.costo);// se suma total gastos y gastos totales
 
  console.log("Total de gastos "+totalGstos);
   // la operacion del restante
  restante= presupuesto-totalGstos
  console.log("restante: "+restante);
  });
 



$('#adicionar').click(function() {
  
  let producto = document.getElementById("producto").value;
  let costo = parseInt(document.getElementById("costo").value);

  if(costo<1|| isNaN(costo)|| producto.trim()===''){
    alert("solo se pone numeros");
   
return;
  }
  if(costo>restante){
    alert("cantidad mayor al restante");
    return;

  }

  let nuevoGasto={
    producto,
    costo
  }
  let gastos = JSON.parse(localStorage.getItem("gastos"));
  gastos.push(nuevoGasto);
  localStorage.setItem("gastos",JSON.stringify(gastos));
    
  document.getElementById("formGastos").reset();
  console.log(nuevoGasto)
nuevalista();



    let i = 1; //contador para asignar id al boton que borrara la fila
    let fila ='<tr id="row' + i + '"><td>' + producto + '</td><td>'  + costo+ '</td><td>'  + restante+ '</td><td><button onclick="deleted()"  type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila`
    i++;
    

    $('#mytable tr:first').after(fila);
    $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
    let nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
    //le resto 1 para no contar la fila del header
    
    
    document.getElementById("costo").value = "";
    document.getElementById("producto").value = "";
   

});

};
   
 $(document).on('click', '.btn_remove', function() {
  var button_id = $(this).attr("id");
    //cuando da click obtenemos el id del boton
       $('#row' + button_id + '').remove(); 
     //borra la fila
    //limpia el para que vuelva a contar las filas de la tabla
    $("#adicionados").text("");
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
  });
 
 
const resetear = () =>{
  localStorage.clear();
  location.reload(true);
}

const mostrarError=(elemento, mensaje)=>{
  divError=document.getElementById(elemento);
  divError.innerHTML= `<P class="alertError">${mensaje}</p>`;
  setTimeout(()=>{ divError.innerHTML='';},2000);
}


*/



  







var restante = 0

  const guardarPresupuesto=()=>{
  let presupuesto = parseInt(document.getElementById("ingresos_mensual").value);
  if (presupuesto<1 || isNaN(presupuesto)){
    
    mostrarError("msj-err" , "presupuesto invalido");
    return;

  }
  localStorage.setItem("presupuesto", presupuesto);
  localStorage.setItem("gastos",JSON.stringify([]));
  actualizar();
} 
actualizar=()=>{
  let presupuesto = localStorage.getItem("presupuesto");
  let divpregunta = document.getElementById("pregunta");
  let divformGastos = document.getElementById("formGastos");
  let divdeudasform = document.getElementById("deudas-form");

 
  divpregunta.style.display = "none";
  divformGastos.style.display ="none";
  divdeudasform.style.display = "none";

  restante = presupuesto;

  if(!presupuesto){
    divpregunta.style.display = "block";
   console.log("no hay presupuesto");
   mostrarError2("msj-err" , "crea tu presupuesto");
   return;
  
   
 }
 else{ 
    divpregunta.style.display = "none";
    divformGastos.style.display = "block";
     divdeudasform.style.display = "block";
    
    nuevalista();
  }
  }
  const nuevalista =()=>{
    let presupuesto = localStorage.getItem("presupuesto");
  let gastos = JSON.parse(localStorage.getItem("gastos"));

  totalGstos=0;
  gastos.map(gastos=>{
  totalGstos+=parseInt(gastos.costo);
  });
 
  //document.getElementById("Presupuesto").innerHTML = totalGstos;
  restante= presupuesto-totalGstos

 document.getElementById("totalGastos").innerHTML = "total de gastos es $ " + totalGstos; 
  document.getElementById("Presupuesto").innerHTML = "total de presupuesto es de $ " + presupuesto;
}



 
   $('#adicionar').click(function() {
  let producto = document.getElementById("producto").value;
  let costo = parseInt(document.getElementById("costo").value);

  if(costo<1|| isNaN(costo)|| producto.trim()===''){
   
   
    mostrarError2("alert alert-primary" , "datos incorrectos");
  return;

  }
   if(costo>restante){ 
  
   
   mostrarError("alert alert-primary" , "cantidad mayor a restante");
    return;
 
  }
  

  let nuevoGasto={
    producto,
    costo
  }
  let gastos = JSON.parse(localStorage.getItem("gastos"));
  gastos.push(nuevoGasto);
  localStorage.setItem("gastos",JSON.stringify(gastos));
    nuevalista();
  document.getElementById("formGastos").reset();
  console.log(nuevoGasto)
   
 
   
  
  
 
    let i = 1; //contador para asignar id al boton que borrara la fila
    let fila =`<tr id="row' ${i}  '"><td> ${producto}  </td><td> ${costo} </td><td>${restante} </td></tr>`;
    i++;

    let presupuesto = localStorage.getItem("presupuesto");
  if((presupuesto/4)>restante){
    document.getElementById('color').style.backgroundColor = "red";
  } else if((presupuesto/2>restante)){
    document.getElementById('color').style.backgroundColor = "blue";
  }else{
    document.getElementById('color').style.backgroundColor = "green";
  }

    $('#mytable tr:first').after(fila);
    $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
    let nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
    //le resto 1 para no contar la fila del header
    
    document.getElementById("costo").value = "";
    document.getElementById("producto").value = "";
  

  
});


 
 
 

  const resetear = () =>{
    localStorage.clear();
    location.reload(true);
  }
  

  const mostrarError=(elemento, mensaje)=>{
    divError=document.getElementById(elemento);
    divError.innerHTML= `<P class="alert alert-danger d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>${mensaje}</p>`;
    setTimeout(()=>{ divError.innerHTML='';},2000);
  }


  const mostrarError2=(elemento, mensaje)=>{
    divError=document.getElementById(elemento);
    divError.innerHTML= `<P class="alert alert-primary d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>${mensaje}</p>`;
    setTimeout(()=>{ divError.innerHTML='';},2000);
  }





