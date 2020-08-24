var rentaImponible;
var salBase;
var afpCalc;
var isssCalc;
function renta() {
    var salarioPersona = Number(document.getElementById("salario").value);
    salBase = salarioPersona;
    var salario = document.getElementById("salario");
    var AFP = document.getElementById("AFPCalculado");
    var ISSS = document.getElementById("ISSSCalculado");
    var total = document.getElementById("TotalCalculado");
    var rentaCalculado = document.getElementById("RentaCalculado");
    var afp = parseFloat(salarioPersona) * 0.0725;
    afp = parseFloat(afp.toFixed(2));
    afpCalc = afp;
    var isss;
    var rentaC;
    // calculo del isss
    isss= (salarioPersona >=1000) ? 30 : parseFloat(salarioPersona) * 0.03;    
    isss.toFixed(2);
    isssCalc = isss;
    //total
    var totalCalculado = afp + isss;
    totalCalculado.toFixed(2)
    rentaC = salarioPersona - totalCalculado;
    rentaImponible = rentaC;
    rentaImponible = parseFloat(rentaImponible);
    salario.innerHTML = `$ ${salarioPersona}`;    
    AFP.innerHTML = `$ ${afp}`;    
    ISSS.innerHTML = `$ ${isss}`;    
    total.innerHTML = `$ ${totalCalculado}`;       
    rentaCalculado.innerHTML = `$ ${rentaC}`;    
}

var ISR;

function Remuneracion() {
    var aguinaldo;
    var enero = document.getElementById("enero").innerHTML = `$ ${rentaImponible}`;
    var febrero = document.getElementById("febrero").innerHTML = `$ ${rentaImponible}`;
    var marzo = document.getElementById("marzo").innerHTML = `$ ${rentaImponible}`;
    var abril = document.getElementById("abril").innerHTML = `$ ${rentaImponible}`;
    var mayo = document.getElementById("mayo").innerHTML = `$ ${rentaImponible}`;
    var junio = document.getElementById("junio").innerHTML = `$ ${rentaImponible}`;
    var julio = document.getElementById("julio").innerHTML = `$ ${rentaImponible}`;
    var agosto = document.getElementById("agosto").innerHTML = `$ ${rentaImponible}`;
    var septiembre = document.getElementById("setpiembre").innerHTML = `$ ${rentaImponible}`;
    var octubre = document.getElementById("octubre").innerHTML = `$ ${rentaImponible}`;
    var noviembre = document.getElementById("noviembre").innerHTML = `$ ${rentaImponible}`;
    var years = document.getElementById("years");
    // var options = document.getElementsByClassName("option_value");
    var opcion = years.options[years.selectedIndex].innerText;
    // alert(opcion);
    var vacaciones = (rentaImponible)/2;
    vacaciones = rentaImponible + vacaciones;
    var afpC = vacaciones*0.0725;
    var ISSSC = (vacaciones >=1000) ? 30 : parseFloat(rentaImponible) * 0.03; ;
    var newR = vacaciones-(parseFloat(afpC)+ISSSC);
    console.log(newR);
    newR = newR.toFixed(2);
    aguinaldo = (opcion == "1 año a 3 años") ? (newR/30)*15 : (opcion == "3 años a 10 años") ? (newR/30)*19 : (newR/30)*21;
    var dias;
    if(aguinaldo > 600){
        aguinaldo-=600;
        console.log(aguinaldo);
        agunialdo = parseFloat(aguinaldo) + (newR);
        aguinaldo = aguinaldo.toFixed(2);
    }else{
        agunialdo = parseFloat(aguinaldo) + (newR);
        aguinaldo = aguinaldo.toFixed(2);
    }
    var total = ((parseFloat(rentaImponible)*11) + parseFloat(newR));
    // total = total.toFixed(2);
    var diciembre = document.getElementById("diciembre").innerHTML = `$ ${newR}`;
    var total = document.getElementById("total").innerHTML = `$ ${total}`;
}


function calculos() {
    var salario = document.getElementById("salarioBase").innerHTML =`$ ${salBase}`;
    var rentaimponible = document.getElementById("RentaImponible").innerHTML =`$ ${rentaImponible}`;
    var AFPTotal = document.getElementById("AFPTotal").innerHTML =`$ ${afpCalc}`;
    var ISSSTotal = document.getElementById("ISSSTotal").innerHTML =`$ ${isssCalc}`;
    if(rentaImponible >= 0.01 && rentaImponible < 472.01){
        ISR = 0.00;
    }else if(rentaImponible >= 472.01 && rentaImponible < 895.25){
        ISR = ((rentaImponible - 472.01)*0.10) + 17.67;
    }else if(rentaImponible >= 895.25 && rentaImponible < 2038.11){
        ISR = ((rentaImponible - 895.25)*0.20) + 60.00;
    }else if(rentaImponible > 2038.11){
        ISR = ((rentaImponible - 2038.11)*0.30) + 288.57;
    }
    var Impuesto = document.getElementById("Impuesto").innerHTML =`$ ${ISR}`;
    // var descuento = document.getElementById("descuento").innerHTML =`$ ${descuento}`;
    // var pago = document.getElementById("pago").innerHTML =`$ ${pago}`;
    var salarioLiquido = document.getElementById("salarioLiquido").innerHTML =`$ ${rentaImponible - ISR}`;
}