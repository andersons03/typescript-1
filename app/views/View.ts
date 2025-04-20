export abstract class View<A> {
  protected elmento: HTMLElement;
  constructor(seletor: string) {
    this.elmento = document.querySelector(seletor);
  }

  protected abstract template(model: A): string;

  public update(model: A): void {
    const template = this.template(model);
    this.elmento.innerHTML = template;
  }
}
