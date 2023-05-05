export class utils {
  static obtenerExtension(tipo: string) {
    const extensiones = [
      { tipo: "application/pdf", extension: ".pdf" }, 
      { tipo: "image/jpeg", extension: ".jpg" }
    ]
    return extensiones?.find(x => x.tipo == tipo)?.extension
  }
}