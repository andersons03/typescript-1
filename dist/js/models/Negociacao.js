export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const newDate = new Date(this._data.getTime());
        return newDate;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
}
