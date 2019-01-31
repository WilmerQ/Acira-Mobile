import { FormControl } from "@angular/forms";

export class validaciones {

    static buscarMayuscula(control: FormControl) {
        const value: string = control.value;
        if (value) {
            let mayuscula: boolean = false;
            for (let index = 0; index < value.length; index++) {
                let letraActual = value.charAt(index);
                if (letraActual === letraActual.toUpperCase() && !letraActual.match(/^([0-9])*$/)) {
                    //console.log("La letra " + letraActual + " es mayúscula");
                    mayuscula = true;
                }
            }
            if (!mayuscula) {
                return {
                    'mayuscula': true
                }
            }
        }
        return null;
    }

    static buscarNumeros(control: FormControl) {
        const value: string = control.value;
        if (value) {
            let numero: boolean = false;
            for (let index = 0; index < value.length; index++) {
                let letraActual = value.charAt(index);
                if (letraActual.match(/^([0-9])*$/)) {
                    //console.log("La letra " + letraActual + " es numero");
                    numero = true;
                }
            }
            if (!numero) {
                return {
                    'numero': true
                }
            }
        }
        return null;
    }


}
