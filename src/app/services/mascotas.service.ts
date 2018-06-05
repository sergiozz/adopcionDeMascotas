import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';

import { Dog } from '../grilla/dog';

@Injectable()
export class MascotasService {

    private path = 'http://localhost/mascotas/';

    private headers = new Headers({'Content-Type': 'application/json'});
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }

    mascotas(tipo:any): Promise<Dog> {
        let recurso = this.path +"api/mascotas";

        return this.http.get(recurso)
            .toPromise()
            .then(response => response.json() as any[])
            .catch(this.handleError);
    }

    getMascotasNombre(nombre:any): Promise<Dog> {
        let recurso = this.path +"GetMascotasNombre";

        return this.http
            .get(recurso, {params: {nombre: nombre}})
            .toPromise()
            .then(response => response.json() as any[])
            .catch(this.handleError);
    }

}
