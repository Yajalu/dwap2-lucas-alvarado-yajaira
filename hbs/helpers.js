const hbs = require('hbs');
const fs =require('fs');

//Helpers
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
  });

hbs.registerHelper('inventario', ()=>{
    var jsonString= fs.readFileSync("./data/inventario.json");
    var data= JSON.parse(jsonString);
    var inventario="";
    
    for (x of data) {
      inventario +=
          '<div class="img-port">'+
              '<img id="producto" src="' + x.img +'">'+
              '<h2>' + x.nombre + '</h2>' +
              '<h3>' + x.precio + '</h3>' +
          '</div>'
      ; 
    }
    return new hbs.SafeString(inventario);        
});