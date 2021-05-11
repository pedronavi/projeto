import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home'},
    { title: 'Botões', url: 'botao', icon: 'construct' },
    { title: 'Alerta', url: 'alerta', icon: 'construct'},
    { title: 'Action Sheet', url: 'actionsheet', icon: 'construct'},
    { title: 'Badge', url: 'badge', icon: 'construct'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
