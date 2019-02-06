import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  messages : any;
  constructor() { }

  async obtenenerDatos(reference : any): Promise<any> {
    return new Promise((resolve, reject) => {
        firebase.database().ref(reference)
            .once('value')
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
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
    await this.obtenenerDatos("edificiosRegistrados").then((e)=>{
    console.log(e);
        this.messages = e;
    });
  }
}
