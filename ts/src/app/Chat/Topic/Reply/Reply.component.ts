import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-reply',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    class="comments-container"
    style="background-color: {{ background }};"
  >
    <div class="reply-header">
      <h5>{{ title }}</h5>
      <div>
        <p>{{ autor }}</p>
        <img
          src="../../../../assets/checkmark-orange.png"
          style="display: {{ checkmark }};"
        />
      </div>
    </div>
    <p>
      {{ answer }}
    </p>
  </div>`,
  styleUrls: ['./Reply.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReplyComponent {
  @Input() title = '';
  @Input() answer = '';
  @Input() autor = '';
  @Input() checkmark = 'none';
  @Input() background = '';
}
