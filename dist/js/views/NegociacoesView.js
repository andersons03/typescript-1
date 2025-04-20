import { View } from './View.js';
export class NegociacoesView extends View {
    template(model) {
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
              <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            </tr>
          `;
        })
            .join('')}
      </tbody>
    </table>
    `;
    }
}
