import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the OperacionesLocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OperacionesLocalStorageProvider {

  constructor() { }

  guardar(key: string, content: string) {
    window.localStorage.setItem(key, content);
  }

  getObject(key: string) {
    return window.localStorage.getItem(key);
  }

  guardarObjeto(key: string, object: any) {
    let temp: string = JSON.stringify(object);
    window.localStorage.setItem(key, temp);
  }

  delete(key: string) {
    window.localStorage.removeItem(key);
  }

}
