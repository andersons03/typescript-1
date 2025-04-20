export class View {
    constructor(seletor) {
        this.elmento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elmento.innerHTML = template;
    }
}
