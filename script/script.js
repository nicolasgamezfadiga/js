
$(document).on('keypress',function(e) {
  if(e.which == 13) { //13 = codigo del enter
      alert('Apretaste enter');
  }
});


 var dl20 = '{"Nombre":"DL20", "Precio":"500", "MemoriaMaxima": "64", "ProcesadorStandard":"4", "DiscosGrandesMaximo":"2"    }'
 var dl20c = '{"Nombre":"DL20", "Precio":"550", "MemoriaMaxima": "64", "ProcesadorStandard":"4", "DiscosChicosMaximo":"4"    }'
 var dl160 = '{"Nombre":"DL160", "Precio":"700", "MemoriaMaxima": "512", "ProcesadorStandard":"6", "DiscosGrandesMaximo":"4"    }'
 var dl160c = '{"Nombre":"DL160", "Precio":"750", "MemoriaMaxima": "512", "ProcesadorStandard":"6", "DiscosChicosMaximo":"8"    }'
 var dl180 = '{"Nombre":"DL180", "Precio":"900", "MemoriaMaxima": "1024", "ProcesadorStandard":"8", "DiscosGrandesMaximo":"8"    }'
 var dl360c = '{"Nombre":"DL360", "Precio":"1100", "MemoriaMaxima": "2048", "ProcesadorStandard":"8", "DiscosChicosMaximo":"8"    }'
 var dl360 = '{"Nombre":"DL360", "Precio":"1200", "MemoriaMaxima": "2048", "ProcesadorStandard":"10", "DiscosChicosMaximo":"8"    }'
 var dl380 = '{"Nombre":"DL380", "Precio":"1500", "MemoriaMaxima": "3072", "ProcesadorStandard":"12", "DiscosChicosMaximo":"12"    }'   
 

 
var memos = '{"memoria16":"2", "precioMemo32":"480"}'
var memoStock = JSON.parse(memos) 


var discosChicos = '{"precio240":"90", "precio480":"200", "precio960":"400", "precio1.2":"300", "precio1.8":"500" }'
var discosChicosStock = JSON.parse(discosChicos) 

var discosGrandes = '{"precio480":"200", "precio960":"400", "precio2":"300", "precio4":"500", "precio8":"700"}'
var discosGrandesStock = JSON.parse(discosGrandes) 

var procesadores = '{"4cores":"250", "6cores":"480" , "8cores":"600", "8cores":"720", "10cores":"900", "12cores":"1100" }'
var procesadoresStock = JSON.parse(procesadores) 

 /* function agregarMemorias(){


localStorage.setItem(memoStock.memoria16, memoStock.memoria16);
var memoriaIngresada = document.getElementById("ingresarMemo").value  

memoStock.memoria16 = Number(memoStock.memoria16) + Number(memoriaIngresada)
  
document.getElementById("mostrarMemos").innerHTML =  memoStock.memoria16

alert("memorias en stock: " + memoStock.memoria16)


}*/





 function myFunction() {

  

   var cores = $("#mySelect").val();
    
    var mem16 = $("#memoria16").val();
    
    

    if(mem16 > memoStock.memoria16){

      alert("Tenemos " + memoStock.memoria16 + " memorias de 16gb en stock")
        
    }

    var mem32 = $("#memoria32").val();


    var disco480 = $("#480gb").val();
    var disco960 = $("#960gb").val(); 
    var disco12 = $("#12tb").val();
    var disco2 = $("#2tb").val();

    

    pedidoStock.Memoria = mem16

    pedidoStock.Precio = cores + meme16

    var pedido = '{"Precio":"", "Memoria": "", "Procesador":"", "Discos":""}'
    var pedidoStock = JSON.parse(pedido) 

    console.log(pedidoStock.Memoria)
    

    
    //$("#mostrarProcesador").text(cores);
    $("#demo").text(cores + mem16 + mem32 + disco480 + disco960 + disco12 + disco2)
    //document.getElementById("demo").innerHTML = cores + mem16 + mem32 + disco480 + disco960 + disco12 + disco2;
  }