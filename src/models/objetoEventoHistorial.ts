export class objetoEventoHistorial {

    constructor(usuarioInformante: string,
        mensaje: string,
        latitud: number,
        longitud: number,
        exactitud: number,
        anonimo: Boolean,
        fechaRecolecion: Date,
        tipo: string,
        uuidImagen: string,
        uuidAudio: string,
        id: any) {
        this.usuarioInformante = usuarioInformante;
        this.mensaje = mensaje;
        this.latitud = latitud;
        this.longitud = longitud;
        this.exactitud = exactitud;
        this.anonimo = anonimo;
        this.fechaRecolecion = fechaRecolecion;
        this.tipo = tipo;
        this.id = id;
        this.uuidImagen = uuidImagen;
        this.uuidAudio = uuidAudio;
    }

    id: number;
    usuarioInformante: string;
    mensaje: string;
    latitud: number;
    longitud: number;
    exactitud: number;
    anonimo: Boolean;
    fechaRecolecion: Date;
    tipo: string;
    uuidImagen: string;
    uuidAudio: string;
}