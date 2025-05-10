import { Negociacoes } from '../models/Negociacoes.js';
import { View } from './View.js';

export class NegociacoesView extends View<Negociacoes> {
  protected template(model: Negociacoes): string {
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
        ${model
          .lista()
          .map((negociacao) => {
            return `
            <tr>
              <td>${this.formataData(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            </tr>
          `;
          })
          .join('')}
      </tbody>
      <script>alert("Ola")</script>
    </table>
    `;
  }

  private formataData(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}
