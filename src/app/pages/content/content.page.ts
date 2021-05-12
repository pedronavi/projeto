import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inicio(){
    console.log('Esta rolando a tela');
  }

  fim(){
    console.log('Parou de rolar a tela');
  }
}
