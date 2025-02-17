export class Negociacao{
  constructor(
    public _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ){}

  get data(): Date{
    const newDate = new Date(this._data.getTime())
    return newDate
  }

  get volume(): Number{
    return this.valor * this.quantidade
  }
}