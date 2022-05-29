import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes:Negociacao[];

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
    
    // ... significa spread operator que vai pegar to dos os elementos de um array e colocar em outro array
    //ReadonlyArray é um array que não pode ser alterado após a criação dele.
    //readonly é uma palavra chave que diz que o atributo não pode ser alterado.
}
