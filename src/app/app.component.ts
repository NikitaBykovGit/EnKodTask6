import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app__container">
      <p>Форматированный телефон 1: {{ number1 | number: '(###) ###-##-##'}}</p>
      <p>Форматированный телефон 2: {{ number2 | number: '###-###-##-##'}}</p>
    </div>
  `
})
export class AppComponent {
  title: string = 'EnKodTask6';
  number1: string = '+78005557778';
  number2: string = '+78005557778';
}
