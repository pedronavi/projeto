import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home'},
    { title: 'Button', url: 'botao', icon: 'construct' },
    { title: 'Alert', url: 'alerta', icon: 'construct'},
    { title: 'Action Sheet', url: 'actionsheet', icon: 'construct'},
    { title: 'Badge', url: 'badge', icon: 'construct'},
    { title: 'Card', url: 'card', icon: 'construct'},
    { title: 'Checkbox', url: 'checkbox', icon: 'construct'},
    { title: 'Content', url: 'content', icon: 'construct'},
  ];
  
  constructor() {}
}
