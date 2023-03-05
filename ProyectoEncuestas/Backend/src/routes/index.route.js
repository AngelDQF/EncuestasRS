const express = require("express");//TODO: Importamos express para poder usar el metodo Router
const fs = require("fs");//TODO: Importamos el módulo de file system para poder leer los archivos de las rutas
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const PATH_ROUTES= __dirname;//TODO: Obtenemos la ruta de las rutas
const removerExtension = (fileName) => {//TODO: Creamos una función para remover la extensión del archivo
  return fileName.split('.').shift();//TODO: Removemos la extensión del archivo
}
fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removerExtension(file);//TODO: Removemos la extensión del archivo
  if (name !== 'index') {//TODO: Si el nombre del archivo es diferente a index
    router.use(`/${name}`, require(`./${file}`))//TODO: Usamos el método use para crear una ruta y le pasamos el nombre del archivo (sin extensión) y el archivo (con extensión)
  }
});

module.exports = router;//TODO: Exportamos las rutas que hemos creado