import { Component, OnInit } from '@angular/core';
import { FotosdbService } from '../services/fotosdb.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

   fotos : any[] = [];
  constructor(
    private fb: FotosdbService,
    private loading: LoadingController,
    private alertControl: AlertController
    ) {
  }
  
  ngOnInit(): void {
    this.fb.getAllFotos().subscribe(results => this.fotos = results);
    this.loadMessage()
  }


async loadMessage(){
  let load = await this.loading.create({
    message: 'Aguarde...',
    duration: 2000
  });

  await load.present()
}

  // deletar(id){
  //  this.fb.deletar(id);
  //}

  async deletarFoto(id){


    const alert = await this.alertControl.create({
      header: 'Você tem certeza que deseja apagar esta foto?',
      buttons: [
        {
          text: 'Sim',
          cssClass: 'secondary',
          handler: () => this.fb.deletar(id)
        },{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    })
    await alert.present();
  } 

  async abrirFoto(){
     const alert = await this.alertControl.create({
       header: '{{foto.nome}}',

      // images
      inputs: [
         {name: 'nome',
         type:'text',
         placeholder: 'Digite o novo nome'
        },{
          name: 'descricao',
          type:'text',
          placeholder: 'Digite a nova descricao'
        } ],
         buttons:[
           {text: 'Voltar',
          role: 'cancel',
        //cssClass: 'alert'
      },
        {text: 'Salvar Alterações',
        handler: (foto) => {

          console.log(foto.nome)
        //    this.add(foto);
        }
      }
         ]
        });
     await alert.present();
  }
  
  
}
