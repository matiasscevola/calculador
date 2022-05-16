// calculador de indemnizacion por despido.
let aniosTrabajados= prompt ("cuantos años trabajo en la empresa?");
let ultimoSueldo= parseFloat(prompt("cuanto fue el monto de su ultimo sueldo?"));
undefined
function liquidacionFinal (aniosTrabajados,ultimoSueldo){
    return aniosTrabajados*ultimoSueldo;
}
if(aniosTrabajados<1){
    alert("le corresponde solamente proporcional de aguinaldo y vacaciones");

}else if(ultimoSueldo== " "){
    alert("ingrese un dato valido");
}else{
alert("a usted le corresponde $ "
+ liquidacionFinal(aniosTrabajados,ultimoSueldo) +" + un mes de preaviso");

}