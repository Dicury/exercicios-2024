import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommentComponent } from './Comment/Comment.component';
import { FormComponent } from './Form/Form.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, CommentComponent, FormComponent],
  template: `<section class="chat-container">
    <div class="chat-title"><h3>Discussões</h3></div>
    <input type="checkbox" name="create-topic" id="create-topic" />
    <div class="topic-creation-card">
      <div class="topic-creation-container">
        <h5>Compartilhe suas ideias ou dúvidas com os autores!</h5>
        <img src="../assets/post-illustrations.png" />
        <p>
          Sabia que o maior estímulo no desenvolvimento científico e cultural é
          a curiosidade? Deixe seus questionamentos ou sugestões para o autor!
        </p>
      </div>

      <app-form class="topic-form"></app-form>

      <div class="bottom-line"></div>

      <div>
        <label class="btn-create-topic" for="create-topic">criar tópico</label>
      </div>
    </div>

    <app-comment like="1 like" reply="1 resposta"></app-comment>
    <app-comment like="4 likes" reply="4 respostas"></app-comment>
  </section>`,
  styleUrls: ['./Chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {}
