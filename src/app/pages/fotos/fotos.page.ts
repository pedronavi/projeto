import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {

  constructor(private actionSheetControle: ActionSheetController) { }

  ngOnInit() {
  }

  async exibir(){
    const actionSheet = await this.actionSheetControle.create({
      header: 'Fotos',
      buttons: [{
        text: 'Apagar',
        icon: 'trash',
        handler: () => {
          console.log('clicou em apagar');
        }
      },{
        text: 'Exibir',
        icon: 'laptop',
        handler: () => {
          console.log('clicou em exibir');
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        handler: () => {
          console.log('clicou em cancelar');
        }
      }
      ]
    })

    actionSheet.present();
  }

}
