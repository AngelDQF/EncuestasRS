export class utils{
  static obtenerExtension(tipo:string){
    const extensiones=[
      { tipo:"image/jpeg",extension:".jpg" },
      { tipo:"application/pdf",extension:".pdf" }
    ]
    return extensiones.find(x=>x.tipo=tipo)?.extension;
  }
}