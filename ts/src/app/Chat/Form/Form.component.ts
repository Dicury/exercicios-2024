import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="topic-form">
    <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
    <form>
      <h5>Assunto</h5>
      <input
        class="subject"
        placeholder="Defina um tópico sucinto para notificar os autores..."
      />
      <h5>Conteúdo</h5>
      <textarea></textarea>
      <div class="topic-form-container_btn">
        <button type="button">Enviar</button>
      </div>
    </form>
  </div>`,
  styleUrls: ['./Form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {}
