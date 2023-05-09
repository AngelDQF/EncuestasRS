export class utils {
  static obtenerExtension(tipo: string) {
    const extensiones = [
      { tipo: "application/pdf", extension: ".pdf" }, 
      { tipo: "image/jpeg", extension: ".jpg" }
    ]
    return extensiones?.find(x => x.tipo == tipo)?.extension
  }
  static obtenerTipo(extension: string) {
    const extensiones = [
      { tipo: "application/pdf", extension: ".pdf" }, 
      { tipo: "image/jpeg", extension: ".jpg" }
    ]
    return extensiones?.find(x => x.extension == extension)?.tipo
  }
  static Base64toBlob(Base64:string):Blob {
    const byteString = window.atob(Base64);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'application/pdf' });
    return blob;
  }
}