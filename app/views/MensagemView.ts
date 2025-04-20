import { View } from './View.js';

export class MensagemView extends View<string> {
  protected template(model: string): string {
    return `<div class="alert alert-info" role="alert">${model}<div>`;
  }
}
