import { Component, OnInit } from '@angular/core';
import { FotosdbService } from '../services/fotosdb.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  fotos = [];
  constructor(
    private fb: FotosdbService
    ) { 
  }
  
  ngOnInit(): void {
    this.fb.getAllFotos().subscribe(results => this.fotos = results)
  }


  deletar(id){
    this.fb.deletar(id);
  
  }
  
}
