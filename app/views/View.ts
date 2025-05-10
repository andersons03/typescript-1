export abstract class View<A> {
  protected elmento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elmento = <HTMLElement>elemento;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
    }

    if (escapar) {
      this.escapar = escapar;
    }
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
