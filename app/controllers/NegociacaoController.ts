import { DiasDaSemana } from '../enum/dias-da-semana.js';
import { Negociacao } from '../models/Negociacao.js';
import { Negociacoes } from '../models/Negociacoes.js';
import { MensagemView } from '../views/MensagemView.js';
import { NegociacoesView } from '../views/NegociacoesView.js';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView', true);
  private mensaemView = new MensagemView('#mensagemView');

  constructor() {
    this.inputData = <HTMLInputElement>document.querySelector('#data');
    this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
    this.inputValor = <HTMLInputElement>document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    // const negociacao = this.criaNegociacao();
    const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);

    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensaemView.update('Apenas negociações em dias uteis');
      return;
    }

    this.negociacoes.adiciona(negociacao);
    this.atualizaTela();
    this.limparFormulario();
  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
  }

  private criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  private limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaTela(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensaemView.update('Negociação adicionada com sucesso!');
  }
}
