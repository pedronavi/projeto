import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.page.html',
  styleUrls: ['./botao.page.scss'],
})
export class BotaoPage implements OnInit {

  constructor(private alertControl: AlertController) { }

  ngOnInit() {
  }

  async exemplo(){
    const alert = await this.alertControl.create({
      header: 'Alert Mobile',
      subHeader: 'Exemplo',
      message: 'Exemplo de Alert!!!',
      buttons: ['OK']
    })

    alert.present();
  }
}
