export abstract class View<A> {
  protected elmento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    this.elmento = document.querySelector(seletor);
    this.escapar = escapar;
  }

  protected abstract template(model: A): string;

  public update(model: A): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    this.elmento.innerHTML = template;
  }
}
