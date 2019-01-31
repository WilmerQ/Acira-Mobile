import { OperacionesHttpProvider } from './../providers/operaciones-http/operaciones-http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as Raven from 'raven-js';

@Injectable()
export class validacionesAsincronas {

    constructor(public operacionesHttp: OperacionesHttpProvider) { }

    validarNombreUsuario(control: FormControl): any {
        console.log("aqui validando usuario");
        return this.operacionesHttp.validarCamposRegistro("nombreUsuario", control.value)
            .then(res => {
                if (res.ok) {
                    return null;
                }
            })
            .catch(error => {
                if (error._body == "existe") {
                    return { 'nombreUsuarioInUse': true };
                } else {
                    Raven.captureException(error);
                    return null;
                }
            });
    }

    /*validarNombreUsuario(control: FormControl): any {
        clearTimeout(this.timeoutNombreUsuario);
        return new Promise(resolve => {
            this.timeoutNombreUsuario = setTimeout(() => {
                this.operacionesHttp.validarCamposRegistro("nombreUsuario", control.value).subscribe((res) => {
                    if (res.ok) {
                        resolve(null);
                    }
                }, (err) => {
                    if (err._body == "existe") {
                        console.log();
                        resolve({ 'nombreUsuarioInUse': true });
                    } else {
                        resolve(null);
                    }
                });
            }, 3000);
        });
    }*/

    validarNumeroIdentificacion(control: FormControl): any {
        return this.operacionesHttp.validarCamposRegistro("numeroIdentificacion", control.value)
            .then(res => {
                if (res.ok) {
                    return null;
                }
            })
            .catch(error => {
                if (error._body == "existe") {
                    console.log();
                    return { 'identificacionInUse': true };
                } else {
                    Raven.captureException(error);
                    return null;
                }
            });
    }

    validarTelefono(control: FormControl): any {
        return this.operacionesHttp.validarCamposRegistro("telefono", control.value)
            .then(res => {
                if (res.ok) {
                    return null;
                }
            })
            .catch(error => {
                if (error._body == "existe") {
                    console.log();
                    return { 'telefonoInUse': true };
                } else {
                    Raven.captureException(error);
                    return null;
                }
            });
    }
}