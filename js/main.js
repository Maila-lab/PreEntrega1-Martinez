//El cajero automático
//Primer menu:
/*
1 - Ingresar usuario 
(nombre + pin) que ya este guardado en el sistema
  1.a Nombre: daniel
  1.b Pin: 1234
2 - Crear un usuario nuevo (nombre + pin)
  2.a Ingrese su Nombre:
  2.b Ingrese un Pin {xxxx}:
Presiona X para Salir
*/
/*
SEGUNDO MENU DEL CAJERO, PARA UN CLIENTE YA REGISTRADO

Que operacion desea realizar?
1 - Saldo.
2 - Retiro de dinero.
  2.a Ingresa el monto a retirar
3 - Deposito
  3.a Ingresa el monto a depositar
Presiona X para Salir
*/


let pinGuardado = "1234";
let nombreGuardado = "daniel";

alert("Bienvenido al cajero automatico");

//PRIMER MENU DEL CAJERO
let opcion = prompt(
  "Elegí una opción: \n1 - Ingresar usuario \n2 - Crear un usuario Nuevo. \nPresioná X para Salir."
);

let nombreNuevo="";
let pinNuevo="";
while(opcion != "x"){
  if (opcion == "1") {
    nombreNuevo = prompt("Nombre: ");
    pinNuevo = prompt("Pin: ");
    //VERIFICA QUE SEA VALIDO EL NOMBRE Y PIN DEL USUARIO QUE ESTA GUARDADO EN EL SISTEMA
    if(nombreNuevo == nombreGuardado && pinNuevo == pinGuardado){
      alert("El usuario es correcto.");
      break;
    }else{
      alert("Error el nombre/pin no es valido!");
    }
  }
  if (opcion == "2") {
      nombreNuevo = prompt("Ingrese su Nombre: ");
      pinNuevo = prompt("Ingrese un Pin {xxxx}: ");
      //VERIFICA QUE NO SE DUPLIQUEN LOS CLIENTES CON EL MISMO NOMBRE Y PIN EN EL SISTEMA
      if(nombreNuevo == nombreGuardado && pinNuevo == pinGuardado){
        alert("Error! el usuario con ese nombre y pin ya existe.");
      }else{
        alert("Excelente! El usuario se registro sin problema, Bienvenido/a: " + nombreNuevo);
        break;
  } 
}else{
      // CONDICION DE ELEGIR UNA OPCION INVALIDA
      alert("opcion no valida");
  }
  // VUELVE A MOSTRAR EL MENU INICIAL, SI ES QUE NO PUDO INGRESAR AL SISTEMA CON SU RESPECTIVO NOMBRE Y PIN
  opcion = prompt(
      "Elegí una opción: \n1 - Ingresar usuario \n2 - Crear un usuario Nuevo. \nPresioná X para Salir."
  );
  
}

// MENU PARA LOS CLIENTES QUE INGRESARON AL SISTEMA CON NOMBRE Y PIN CORRECTO
alert("Bienvenido Cliente "+nombreNuevo+". Ya podes empezar a operar");
let saldoInicial=40000;
let opcionMenu="";

opcionMenu = prompt(
   "Que operacion desea realizar? : \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
);
  while (opcionMenu != "x") {
    if (opcionMenu == "1") {
      alert("Tu saldo es: $" + saldoInicial);
    } else if (opcionMenu == "2") {
      let retiro = parseInt(prompt("Ingresa el monto a retirar"));
      //VERIFICA SI ES POSIBLE LA OPERACION DE RETIRAR DINERO
      if(retiro < saldoInicial ){
        saldoInicial = saldoInicial - retiro;
        alert("Retiro exitoso, tu saldo es: $" + saldoInicial);
        
      }else{
        alert("Error, tu saldo es menor a la cantidad que desea retirar:  "); 
      }
    }else if (opcionMenu == "3") {
      let deposito = parseInt(prompt("Ingresa el monto a depositar"));
      //VERIFICA SI EXCEDE EL MONTO PERMITIDO POR EL CAJERO
      if(deposito< 30000){
        saldoInicial = saldoInicial + deposito;
        alert("Deposito exitoso, tu saldo es: $" + saldoInicial);
      }
      else{
        alert("Error, Este cajero no puede depositar mas de 30000. Disculpe la molestias"); 
      }
      
    }else{
      alert("opcion no valida")
    }

    // VUELVE A MOSTRAR EL MENU INICIAL, SI ES QUE QUIERE HACER OTRA OPERACION
    opcionMenu = prompt(
      "Que operacion desea realizar? : \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
    );
  }

