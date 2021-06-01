import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FotosdbService {
  colecoesFotos: AngularFirestoreCollection; 

  constructor(
    private af: AngularFirestore
  ) { 
    this.colecoesFotos = this.af.collection('Fotos');
  }

  //Método de cadastro
  cadFoto(dados){
    return this.colecoesFotos.add(dados);
   }

   // Método de consulta
   getAllFotos(){
     return this.colecoesFotos.snapshotChanges().pipe(
       map(actions => {
         return actions.map(a => {
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return {id, ...data}
         })
       })
     )
   }

   getFoto(id){
     return this.colecoesFotos.doc(id).valueChanges()
   }

   upFoto(id, foto){
    return this.colecoesFotos.doc(id).update(foto)
   }

   deletar(id:string){
    return this.colecoesFotos.doc(id).delete();
  }
}
