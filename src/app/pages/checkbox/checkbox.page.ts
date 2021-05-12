import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  meses: any[] = [{nome: 'Janeiro', valor: 1, marcado: true}, 
                  {nome: 'Fevereiro', valor: 2, marcado: true}, 
                  {nome: 'Março', valor:3, marcado: false},
                  {nome: 'Abril', valor:4, marcado: false},
                  {nome: 'Maio', valor:5, marcado: true},
                  {nome: 'Junho', valor:6, marcado: false},
                  {nome: 'Julho', valor:7, marcado: true},
                  {nome: 'Agosto', valor:8, marcado: true},
                  {nome: 'Setembro', valor:9, marcado: true},
                  {nome: 'Outubro', valor:10, marcado: true},
                  {nome: 'Novembro', valor:11, marcado: true},
                  {nome: 'Dezembro', valor:12, marcado: true}
                 ];

  constructor() { }

  ngOnInit() {
  }

  imprimir(){
    console.log(this.meses);
  }
}
