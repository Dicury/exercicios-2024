import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopicComponent } from './Topic/Topic.component';
import { FormComponent } from './Form/Form.component';
import { HeadlineComponent } from './Headline/Headline.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, TopicComponent, FormComponent, HeadlineComponent],
  template: `<section class="chat-container">
    <div class="chat-title"><h3>Discussões</h3></div>
    <div class="topic-creation-card">
      <app-headline
        class="topic-creation-container"
        title="Compartilhe suas ideias ou dúvidas com os autores!"
        paragraph="Sabia que o maior estímulo no desenvolvimento científico e cultural é a
      curiosidade? Deixe seus questionamentos ou sugestões para o autor!"
        *ngIf="headlineDisplay"
      ></app-headline>

      <app-headline
        class="topic-creation-container"
        title="Seu tópico foi enviado com sucesso! :D"
        img="none"
        paragraph="Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!"
        explore="Descubra outros trabalhos!"
        *ngIf="formSubmitDisplay"
      ></app-headline>

      <button class="submit-form" (click)="onFormChecked()"></button>
      <app-form class="topic-form" *ngIf="formDisplay"></app-form>

      <div class="bottom-line"></div>

      <button
        class="btn-create-topic"
        *ngIf="headlineDisplay"
        (click)="onHeadlineChecked()"
      >
        <img src="../../assets/icon-plus.png" />
        criar tópico
      </button>
      <button
        class="btn-create-new-topic"
        *ngIf="formSubmitDisplay"
        (click)="onSubmitChecked()"
      >
        criar novo tópico
      </button>
    </div>

    <app-topic
      like="1 like"
      reply="1 resposta"
      feedback="block"
      *ngIf="formSubmitDisplay"
    ></app-topic>
    <app-topic like="1 like" reply="1 resposta"></app-topic>
    <app-topic like="4 likes" reply="4 respostas"></app-topic>
  </section>`,
  styleUrls: ['./Chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  headlineDisplay = true;
  formDisplay = false;
  formSubmitDisplay = false;

  onHeadlineChecked() {
    this.headlineDisplay = false;
    this.formDisplay = true;
  }

  onSubmitChecked() {
    this.formSubmitDisplay = false;
    this.formDisplay = true;
  }

  onFormChecked() {
    this.formDisplay = false;
    this.formSubmitDisplay = true;
  }
}
