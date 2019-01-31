import { usuarioRegistro } from './../../models/usuarioRegistro';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { conexion } from './../../models/conexion';
import { Usuario } from './../../models/usuario';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

/*
  Generated class for the OperacionesHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OperacionesHttpProvider {
  Conexion: conexion = new conexion();
  tiempoDeEspera: number = 25;

  constructor(public http: Http) {
    //console.log('Hello OperacionesHttpProvider Provider');
  }

  login(temp: Usuario) {
    //console.log("aqui en el provider de operaciones - login");
    let url: string = this.Conexion.urlWebServices + "usuario/";
    //console.log("json " + url.concat(JSON.stringify(temp)));
    return this.http.get(url.concat(JSON.stringify(temp)))
      .timeout(1000 * this.tiempoDeEspera)
      .map(res => res.json())
      .toPromise();
  }

  registro(temp: usuarioRegistro) {
    //console.log("aqui en el provider de operaciones - registro");
    let url: string = this.Conexion.urlWebServices + "usuario/registrar/" + JSON.stringify(temp);
    //console.log("url completa: " + url);
    return this.http.get(url)
      .timeout(1000 * this.tiempoDeEspera)
      .map(res => res.json())
      .toPromise();
  }

  actualizar(usuario: usuarioRegistro) {
    //console.log("aqui en el provider de operaciones - actualizar");
    let header1 = new Headers();
    header1.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.Conexion.urlWebServices + "usuario/actualizar", JSON.stringify(usuario), { headers: header1 })
      .timeout(1000 * this.tiempoDeEspera)
      .map(res => res.json())
      .toPromise();
  }

  enviarpanico(usuario: usuarioRegistro, mensaje: string, ubicacion: Coordinates, anonimato: boolean, uuid: string, uuidAudio: string) {
    //console.log("aqui en el provider de operaciones - enviarpanico");
    let url: string = this.Conexion.urlWebServices + "eventos/panico/"
      + JSON.stringify(usuario) + "/" + JSON.stringify(mensaje) + "/" + JSON.stringify(ubicacion)
      + "/" + JSON.stringify(anonimato) + "/" + JSON.stringify(uuid) + "/" + JSON.stringify(uuidAudio);
    //console.log("url completa: " + url);
    return this.http.get(url)
      .timeout(1000 * this.tiempoDeEspera)
      .map(res => res.json())
      .toPromise();
  }

  enviarSospecha(usuario: usuarioRegistro, mensaje: string, ubicacion: Coordinates, anonimato: boolean, uuid: string, uuidAudio: string) {
    //console.log("aqui en el provider de operaciones - enviarpanico");
    let url: string = this.Conexion.urlWebServices + "eventos/sospecha/"
      + JSON.stringify(usuario) + "/" + JSON.stringify(mensaje) + "/" + JSON.stringify(ubicacion)
      + "/" + JSON.stringify(anonimato) + "/" + JSON.stringify(uuid) + "/" + JSON.stringify(uuidAudio);
    //console.log("url completa: " + url);
    return this.http.get(url)
      .timeout(1000 * this.tiempoDeEspera)
      .map(res => res.json())
      .toPromise();
  }

  registrarDispositivoFCM(usuario: usuarioRegistro, token: string, idDispositivo: string) {
    //console.log("aqui en el provider de operaciones - registrarDispositivoFCM");
    let url: string = this.Conexion.urlWebServices + "dispositivos/registrardispositivo/"
      + JSON.stringify(usuario) + "/" + JSON.stringify(token) + "/" + JSON.stringify(idDispositivo);
    //console.log("url completa: " + url);
    return this.http.get(url)
      .timeout(1000 * this.tiempoDeEspera)
      .map(res => res.json())
      .toPromise();
  }

  getHistorialXtipoEvento(tipo: string, ident: number) {
    //console.log("aqui en el provider de operaciones - getHistorialXtipoEvento");
    let url: string = this.Conexion.urlWebServices + "historico/" + JSON.stringify(tipo) + "/" + JSON.stringify(ident);
    //console.log("url completa: " + url);
    return this.http.get(url)
      .timeout(1000 * this.tiempoDeEspera)
      .map(res => res.json())
      .toPromise();
  }

  validarCamposRegistro(parametro: string, dato: string) {
    let url: string = this.Conexion.urlWebServices + "validaciones/" + JSON.stringify(parametro) + "/" + JSON.stringify(dato);
    return this.http.get(url)
      .map(res => res.json())
      .first()
      .toPromise();
  }

  getCiudadesActivas() {
    //console.log("aqui en el provider de operaciones - getHistorialXtipoEvento");
    let url: string = this.Conexion.urlWebServices + "validaciones/ciudades";
    //console.log("url completa: " + url);
    return this.http.get(url)
      .timeout(1000 * this.tiempoDeEspera)
      .map(res => res.json())
      .toPromise();
  }

  getBarriosActivos(nombre: string) {
    //console.log("aqui en el provider de operaciones - getHistorialXtipoEvento");
    let url: string = this.Conexion.urlWebServices + "validaciones/barrios/" + JSON.stringify(nombre);
    //console.log("url completa: " + url);
    return this.http.get(url)
      .timeout(1000 * this.tiempoDeEspera)
      .map(res => res.json())
      .toPromise();
  }

  crearCodigoSeguridad(documento: number, nombre: string, ciudad: string, barrio: string, direccion: string) {
    let url: string = this.Conexion.urlWebServices + "CodigoFamiliar/" + documento + "/"
      + JSON.stringify(nombre) + "/"
      + JSON.stringify(ciudad) + "/"
      + JSON.stringify(barrio) + "/"
      + JSON.stringify(direccion);
    //console.log("url completa: " + url);
    return this.http.get(url)
      .timeout(1000 * this.tiempoDeEspera)
      .map(res => res.json())
      .toPromise();
  }

}
