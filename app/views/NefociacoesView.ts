import { Negociacoes } from "../models/Negociacoes";

export class NefociacoesView{
  private elemento: HTMLElement;
  constructor(seletor: string){
    this.elemento = document.querySelector(seletor);
  }

  template(model: Negociacoes):string{
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">DATA</th>
          <th scope="col">QUANTIDADE</th>
          <th scope="col">VALOR</th>
        </tr>
      </thead>
      <tbody>
        ${model.lista().map((negociacao) => {
          return `
            <tr>
              <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            </tr>
          `
        }).join('')}
      </tbody>
    </table>
    `
  }

  update(model: Negociacoes):void{
    this.elemento.innerHTML = this.template(model);
  }
}
