function CalculaMedia(){

var resultado=document.getElementById("resultado");
  
var nota1=parseInt(document.getElementById("valor1").value);;
var nota2=parseInt(document.getElementById("valor2").value);;
var nota3=parseInt(document.getElementById("valor3").value);;

if(nota1>100 || nota1 <0 || nota2>100 || nota2 <0 || nota3>100 || nota3 <0){
      resultado.innerHTML="Você deve digitar uma nota entre 0 a 100";
}else{
  var notaFinal = (nota1 + nota2 + nota3) / 3;

var notaFixada=notaFinal.toFixed(1);
resultado.innerHTML=notaFixada;
}
}