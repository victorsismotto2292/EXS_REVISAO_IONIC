import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  alertButtons = ['OK'];

  // EXERCÍCIO 1:

  preco: string = '';
  tipoDesconto: string = '';
  res_ex1: string = '';
  mensagem: string = '';

  Desconto(){
    const preco_tenis = parseFloat(this.preco);

    if(isNaN(preco_tenis) || this.tipoDesconto == ''){
      this.res_ex1 = 'Por favor, insira um preço válido e selecione uma das opções abaixo.';
      return;
    }

    let preco_final = 0;
    let preco_economizado = 0;

    if(this.tipoDesconto == '10%'){
      preco_final = preco_tenis*(1-0.1);
      preco_economizado = preco_tenis - preco_final;
      this.mensagem = 'Desconto baixo.'
    }
    else if(this.tipoDesconto == '20%'){
      preco_final = preco_tenis*(1-0.2);
      preco_economizado = preco_tenis - preco_final;
      this.mensagem = 'Desconto na média.'
    }
    else if(this.tipoDesconto == '30%'){
      preco_final = preco_tenis*(1-0.3);
      preco_economizado = preco_tenis - preco_final;
      this.mensagem = 'Excelente escolha! Maior desconto.'
    }
    else if(this.tipoDesconto == 'sem-cupom'){
      preco_final = preco_tenis;
      preco_economizado = preco_final;
      this.mensagem = 'Sem desconto :('
    }
    else{
      this.res_ex1 = 'Inválido. (Erro)';
    }

    this.res_ex1 = `Valor final: ${preco_final} | Valor economizado: ${preco_economizado}` + this.mensagem;
  }
}
