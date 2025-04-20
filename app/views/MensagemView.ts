import { View } from './View.js';

export class MensagemView extends View<string> {
  template(model: string): string {
    return `<div class="alert alert-info" role="alert">${model}<div>`;
  }
}
