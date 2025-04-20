export abstract class View<A> {
  protected elmento: HTMLElement;
  constructor(seletor: string) {
    this.elmento = document.querySelector(seletor);
  }

  abstract template(model: A): string;

  update(model: A): void {
    const template = this.template(model);
    this.elmento.innerHTML = template;
  }
}
