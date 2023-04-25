const customHeader=(req,res,next)=>{//TODO: Middleware para validar el header
  try{//TODO: Intentamos ejecutar el codigo
    console.log(req.headers);//TODO: Imprimimos el header
    const apiKey= req.headers.api_Key;//TODO: Obtenemos el valor de la llave api_Key
    if(apiKey==='angel-01'){//TODO: Comparamos el valor de la llave con el valor que queremos
      next();//TODO: Si es correcto, continuamos con la ejecucion del codigo
    }else{//TODO: Si no es correcto, enviamos un error
      res.status(403);//TODO: Enviamos un codigo de error
      res.send({error:"API_KEY_INCORRECTA"})//TODO: Enviamos un mensaje de error
    }
  }catch(error){//TODO: Si ocurre un error, enviamos un error
    res.status(403);//TODO: Enviamos un codigo de error
    res.send({error:"ALGO_OCURRIO_EN_EL_HEADER"})//TODO: Enviamos un mensaje de error
  }
}
module.exports={customHeader};

