import { View } from './View.js';
export class MensagemView extends View {
    template(model) {
        return `<div class="alert alert-info" role="alert">${model}<div>`;
    }
}
