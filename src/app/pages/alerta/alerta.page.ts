import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertControl: AlertController) { }

  ngOnInit() {
  }

  async clique(){
    const alert = await this.alertControl.create({
      header: 'Alert Mobile',
      subHeader: 'Exemplo',
      message: 'Exemplo de Alert!!!',
      buttons: [
                  {text: 'OK',
                   handler: () => {
                     console.log('O botão OK foi pressionado!');
                   }
                  }, 
                  {text: 'Cancelar',
                   handler: () => {
                    console.log('O botão cancelar foi pressionado!');
                   }
                  }
               ]
    })

    alert.present();
  }
}
