import { Component, OnInit } from '@angular/core';
import { FotosdbService } from '../services/fotosdb.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
 
  
  constructor(   
    private db: FotosdbService,
    private loading: LoadingController,
  ) {}

  ngOnInit(): void { 
   this.loadMessage()
  }

  async loadMessage(){
    let load = await this.loading.create({
      message: 'Aguarde...',
      duration: 2000
    });
  
    await load.present()
  }

  

  salvar(form){
    console.log(form.value)
    this.db.cadFoto(form.value);
  }

 

}
