export class Negociacao{
    

    constructor(
        private  _data:Date, 
        public readonly quantidade:number,
        public readonly valor: number
        ){}
        
    
    get volume ():number{
        return this.quantidade * this.valor;
    }
    get data():Date{
        const data = new Date(this._data.getTime());
        return data;
    }

}


// a classe negociacao é uma classe que representa uma negociação de um determinado dia e tem como atributos:
// data, quantidade e valor.