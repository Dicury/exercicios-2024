import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  template: `<article class="content-article">
    <div class="article_top-container">
      <div class="article_video-container">
        <h2>
          Análise sensorial de preparações funcionais desenvolvidas para
          escolares entre 09 e 15 anos, do município de Campinas/SP'
        </h2>
        <img src="../assets/video-placeholder.png" alt="" />
      </div>

      <div class="article_right-container">
        <div class="article_right-btn-container">
          <button class="btn-download"></button>
          <button class="btn-star"></button>
          <button class="btn-doi"></button>
        </div>
        <p>COMO CITAR ESSE TRABALHO?</p>
        <img
          src="../assets/details-placeholder.png"
          alt="placeholder de detalhes"
        />
      </div>
    </div>

    <div class="article_summary">
      <div class="summary-title"><h3>Resumo</h3></div>
      <input type="checkbox" name="readmore" id="readmore" />
      <div class="summary-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis
          mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros
          sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet
          enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem
          vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis
          et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien
          scelerisque, ac gravida eros vestibulum.
        </p>
        <div class="summary-content">
          <p>
            Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna.
            Proin dapibus consequat feugiat. Proin dictum justo arcu, quis
            vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus
            mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim,
            tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna
            libero, eget interdum eros volutpat ullamcorper. Pellentesque et
            pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec
            ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet
            odio.
          </p>
          <p>
            Nam eget tristique elit, at fermentum tellus. Mauris scelerisque
            ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus.
            Integer scelerisque neque dui, in lacinia erat molestie eu.
            Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim
            quis purus semper, efficitur facilisis turpis. Praesent blandit
            elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar
            lobortis consectetur non odio. Phasellus at lacus hendrerit,
            vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci.
            Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend
            massa, eu posuere mauris odio id odio. Morbi eu libero luctus,
            consectetur lorem vel, interdum sapien. Aenean in porta arcu.
            Maecenas eu maximus massa.
          </p>

          <p>
            Praesent velit dolor, dignissim sed quam ac, efficitur porta justo.
            Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi.
            Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus
            luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh,
            viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu.
            Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus
            placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <div class="btn-show-more">
          <label for="readmore">ver mais</label>
          <label for="readmore">ver menos</label>
        </div>
      </div>
    </div>
  </article>`,
  styleUrls: ['./Summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {}
