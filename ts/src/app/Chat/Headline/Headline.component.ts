import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="topic-creation-container">
      <h5>{{ title }}</h5>
      <img src="../assets/post-illustrations.png" style="display: {{ img }};" />
      <p>
        {{ paragraph }}
      </p>
    </div>
    <p class="headline-explore">
      {{ explore }}
    </p>`,
  styleUrls: ['./Headline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadlineComponent {
  @Input() img = 'block';
  @Input() title = '';
  @Input() paragraph = '';
  @Input() explore = '';
}
