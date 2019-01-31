export class conexion {

    constructor() {

    }
    // ------------------configuracion local
    //ip: string = "181.143.200.174";
    //port: string = "9393";

    //ip: string = "186.1.186.158";
    //port: string = "8080"

    //------------configuracion casa
    //ip: string = "10.10.10.103"
    //port: string = "9393"

    //-----------------configuracion global
    ip: string = "acira.ddns.net";
    port: string = "80"

    urlWebServices: string = "http://" + this.ip + ":" + this.port + "/Acira/webresources/";

    urlServletImagen: string = "http://" + this.ip + ":" + this.port + "/Acira/ImagenEventos?id=";

    urlServletAudio: string = "http://" + this.ip + ":" + this.port + "/Acira/AudioEventos?id=";
}