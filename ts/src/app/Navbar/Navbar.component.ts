import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="toolbar" role="banner">
    <div class="toolbar-text_div"><h1>SLACA 2019</h1></div>
    <img src="./assets/logo.png" />
    <ul>
      <li>Apresentação</li>
      <li>Comitês</li>
      <li>Autores</li>
      <li>Eixos temáticos</li>
      <li>Trabalhos</li>
      <li>Contato</li>
    </ul>
  </div>`,
  styleUrls: ['./Navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
