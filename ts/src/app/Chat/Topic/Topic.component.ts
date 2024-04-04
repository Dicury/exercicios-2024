import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReplyComponent } from './Reply/Reply.component';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [CommonModule, ReplyComponent],
  template: `<div class="answered-topic" (click)="expandTopic()">
    <div class="topic-feedback" style="display: {{ feedback }};">
      <div class="feedback-background"></div>
      <div class="feedback-text">
        <img src="../../../assets/checkmark.png" />
        <h4>Aguardando feedback dos autores</h4>
        <p>Editar Tópico</p>
      </div>
    </div>
    <div class="minimized-topic" *ngIf="minimizedTopic">
      <h4 class="ops-topic-subject">Assunto da pergunta aparece aqui</h4>
      <h5>Carlos Henrique Santos</h5>
      <p>
        Comecinho da pergunta aparece aqui resente relato inscreve-se no campo
        da análise da dimensão e impacto de processo formativo situado impacto
        de processo formativo processo...
      </p>
      <div class="topic-footer">
        <img src="../assets/moreInfo.png" />
        <img src="../assets/heart.png" alt="" />
        <p>{{ like }}</p>
        <p>{{ reply }}</p>
      </div>
    </div>
    <div class="expanded-topic" *ngIf="expandedTopic">
      <div>
        <h4 class="ops-topic-subject">Assunto da pergunta aparece aqui</h4>
        <h5>Carlos Henrique Santos</h5>
        <p>
          Comecinho da pergunta aparece aqui resente relato inscreve-se no campo
          da análise da dimensão e impacto de processo formativo situado impacto
          de processo formativo processo resente relato inscreve-se no campo da
          análise da dimensão e impacto de processo formativo situado impacto de
          processo formativo processo?
        </p>
      </div>

      <div class="topic-footer">
        <img src="../assets/moreInfo.png" />
        <img src="../assets/heart.png" alt="" />
        <p>{{ like }}</p>
        <p>{{ reply }}</p>
      </div>
      <app-reply
        background="#F8F8F8"
        title="Adriano da Silva"
        checkmark="block"
        autor="Autor"
        answer="Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
      ></app-reply>
      <app-reply
        title="Carlos Henrique Santos"
        answer="Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo. Obrigada pela resposta, muito interessante o seu trabalho! "
      ></app-reply>
      <app-reply
        background="#F8F8F8"
        title="Carmila Ferreira Andrade"
        checkmark="block"
        autor="Coautor"
        answer="Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo. Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
      ></app-reply>
      <app-reply
        background="#F8F8F8"
        title="Ana Carolina"
        checkmark="block"
        autor="Coautor"
        answer="Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
      ></app-reply>
    </div>
  </div>`,
  styleUrls: ['./Topic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicComponent {
  @Input() like = '';
  @Input() reply = '';
  @Input() feedback = 'none';

  minimizedTopic = true;
  expandedTopic = false;

  expandTopic() {
    this.minimizedTopic = !this.minimizedTopic;
    this.expandedTopic = !this.expandedTopic;
  }
}
