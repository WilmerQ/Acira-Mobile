export class usuarioRegistro {

    constructor(nombrecompleto: string,
        identificacion: number,
        celular: number,
        email: string,
        nombreusuario: string,
        contrasena: string,
        codigofamiliar: string,
        idSesion: number,
        uuidDoc: string) {
        this.nombrecompleto = nombrecompleto;
        this.identificacion = identificacion;
        this.celular = celular;
        this.email = email;
        this.nombreusuario = nombreusuario;
        this.contrasena = contrasena;
        this.codigofamiliar = codigofamiliar;
        this.idSesion = idSesion;
        this.uuidDocumento = uuidDoc;

    }

    nombrecompleto: string;
    identificacion: number;
    celular: number;
    email: string;
    nombreusuario: string;
    contrasena: string;
    codigofamiliar: string;
    idSesion: number;
    uuidDocumento: string;
}