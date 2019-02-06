import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { Edificio } from '../models/edificio';
import { stringify } from 'querystring';

@Injectable({
    providedIn: 'root'
})
export class ServiciosService {
    i: number = 0;
    resultado: any;

    constructor() { }

    async obtenenerDatos(reference: any): Promise<any> {
        return new Promise((resolve, reject) => {
            firebase.database().ref(reference)
                .once('value')
                .then((querySnapshot) => {
                    let arr = [];
                    //console.log(querySnapshot.val());
                    querySnapshot.forEach(function (doc) {
                        // console.log(doc.val());
                        var obj = JSON.parse(JSON.stringify(doc.val()));
                        arr.push(obj);
                    });
                    if (arr.length > 0) {
                        resolve(arr);

                    } else {
                        resolve(null);
                    }
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }

    async nombreEdificios() {
        var o = 0;
        await this.obtenenerDatos("edificiosRegistrados").then((e) => {
            console.log(e);
            this.resultado = e;
        });
    }

    async getEdidicios() {
        /* ***var res = [];
         var catidadedificio = null;
         await this.obtenenerDatos("edificio/1").then((data) => {
             catidadedificio = data;
         });*/
        /*
        await firebase.database().ref('/edificio/1/').once('value').then((data) => {
             this.resultado = data.val();
             console.log("DOS:  ", this.resultado);
         });*/
        /* var aux = this.resultado.filter(datos => datos.nombre[this.i])[this.i].nombre
         console.log("Comment    ", aux);*/
        //**** */console.log("cantidad: ", catidadedificio.length);

        /**** for (let i = 1; i <= catidadedificio.length; i++) {
             await firebase.database().ref('/edificio/1/' + i).once('value').then((data) => {
                 res.push(data.val());
                 console.log(data.val());
             });
         } */

        /*  await firebase.database().ref('/edificio/1/1').once('value').then((data) => {
              res = data.val();
          });*/

        // console.log("DOS:  ", res);


        // POR MEDIO DE ID
        let nombres: String;
        let id: String;
        let listKeys;

        await firebase.database().ref('/edificio/1/').once('value').then((data) => {
            listKeys = data.toJSON();
        });

        console.log("listKey: ", listKeys);

  /*      var datos = { _id: id, contenido: nombres }
        let res = [];
        await firebase.database().ref('/edificio/1/').once('value').then((data) => {
            //res.push(data.val());
            datos._id = data.key;
            datos.contenido = data.val();

            console.log("Objeto:  ", datos._id, datos.contenido);
        });
*/
        return listKeys;
    }
}
