import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="answered-topic">
    <div class="topic-feedback" style="display: {{ feedback }};">
      <div class="feedback-background"></div>
      <div class="feedback-text">
        <img src="../../../assets/checkmark.png" />
        <h4>Aguardando feedback dos autores</h4>
        <p>Editar Tópico</p>
      </div>
    </div>
    <h4 class="ops-topic-subject">Assunto da pergunta aparece aqui</h4>
    <h5>Carlos Henrique Santos</h5>
    <p>
      Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da
      análise da dimensão e impacto de processo formativo situado impacto de
      processo formativo processo...
    </p>
    <div class="topic-footer">
      <img src="../assets/moreInfo.png" />
      <img src="../assets/heart.png" alt="" />
      <p>{{ like }}</p>
      <p>{{ reply }}</p>
    </div>
  </div>`,
  styleUrls: ['./Topic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicComponent {
  @Input() like = '';
  @Input() reply = '';
  @Input() feedback = 'none';
}
