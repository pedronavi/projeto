import { Component, OnInit } from '@angular/core';
import { FotosdbService } from '../services/fotosdb.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  cadastro: FormGroup;
  constructor(
    private fb: FormBuilder,
    private db: FotosdbService,
  ) {}

  ngOnInit(): void { 
    this.validaForm();
  }

  validaForm(){
    this.cadastro = this.fb.group({
      nome:['',[Validators.required,Validators.minLength(3)]],
      url:['',[Validators.required,Validators.minLength(3),Validators.maxLength(255)]],
      descricao:[]
    });
  }

  salvar(){
    // this.db.cadFoto(this.cadastro.value);
  }

 

}
