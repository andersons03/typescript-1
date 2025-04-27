export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elmento = document.querySelector(seletor);
        this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elmento.innerHTML = template;
    }
}
