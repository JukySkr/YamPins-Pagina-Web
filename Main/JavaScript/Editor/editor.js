// Creo el objeto Canvas en el elemento <canvas> de id #canvas-imagen
var canvas = new fabric.Canvas("canvas-image", 
    // Agrego lo siguiente para darle tamaño por defecto 
    //  a la imagen y que no se rompa
    {
    width: 300,
    height: 300
});

// Guardo el elemento input de id #input-imagen en una constante
const inputImagen = document.getElementById("input-imagen");
// escucho el evento change en inputImagen 
// y hago la funcion para el elemento (input)
inputImagen.addEventListener("change", function (elemento) {
//  guardo en una constante el primer archivo del elemento input
    const archivo = elemento.target.files[0]; 
  
    if (!archivo) return; // si no se seleccionó ninguna imagen, no hay primer elemento [0] --> entonces cierro el programa

  // Si hay elemento -> leo el archivo como URL para usarlo en una etiqueta <img>
  const lector = new FileReader();

// Hago un evento de descarga para guardar la imagen que tengo como URL con fabric js
  lector.onload = function (event) {
//  Uso la funcion que tiene fabric .Imagen.fromURL y al elemento que llamó el evento, entro a su target.result 
//  En el console.log se vio que ahí está la URL
fabric.Image.fromURL(event.target.result, function (img) {
    // Les doy su tamaño original (que les di cuando creé el objeto)
    img.scaleToWidth(canvas.width); 
    img.scaleToHeight(canvas.height);
    // limpio el canvas anterior
      canvas.clear(); 
    //añado al canvas la imagen subida
      canvas.add(img);
      canvas.centerObject(img);
      canvas.renderAll();
    });
  };
  // esta linea imprime la imagen en pantalla leyendo el DATAURL y codificandolo a base64
  lector.readAsDataURL(archivo); 
});