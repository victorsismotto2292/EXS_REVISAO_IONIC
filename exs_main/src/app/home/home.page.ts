import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  alertButtons =  ['OK'];

  // EXERCÍCIO 1:
  res_ex1: string = '';
  preco_tenis: string = '';
  tipoDesconto: string = '';

  Desconto(){
   const tenis_preco = parseFloat(this.preco_tenis);
   let TD_10 = 0;
   let TD_20 = 0
   let TD_30 = 0;
   let TD_SC = 0;

   let valor_T = 0;
   let valor_E = 0;
   let mensagem: string = '';

   if(isNaN(tenis_preco) || tenis_preco <=0 || this.tipoDesconto == ''){
    this.res_ex1 = 'Por favor, adicione um valor numérico válido e selecione uma das opções abaixo.';
   }
   else{
    if(this.tipoDesconto == '10%'){
      TD_10 = tenis_preco*(1-0.1);
      valor_T = TD_10;
      valor_E = tenis_preco - TD_10;
      mensagem = 'Desconto abaixo da média...';
    }
    else if(this.tipoDesconto == '20%'){
      TD_20 = tenis_preco*(1-0.2);
      valor_T = TD_20;
      valor_E = tenis_preco - TD_20;
      mensagem = 'Desconto na média.';
    }
    else if(this.tipoDesconto == '30%'){
      TD_30 = tenis_preco*(1-0.3);
      valor_T = TD_30;
      valor_E = tenis_preco - TD_30;
      mensagem = 'Boa escolha! Desconto mais alto!';
    }
    else if(this.tipoDesconto == 'sem-cupom'){
      TD_SC = tenis_preco;
      valor_T = TD_SC;
      valor_E = tenis_preco - TD_SC;
      mensagem = ' Você poderia ter escolhido um desconto...';
    }
    this.res_ex1 =
    `Valor total: R$${valor_T.toFixed(2)} | Valor Economizado: R$${valor_E.toFixed(2)} | ` + mensagem;
   }
  }

  // EXERCÍCIO 2:

  res_ex2: string = ''; 
  orcamento: string = '';
  tipoSetup: string = '';

  V_Orcamento(){
    const Total_Orçamento = parseFloat(this.orcamento);
    if(isNaN(Total_Orçamento) || Total_Orçamento <=0 || this.tipoSetup == ''){
      this.res_ex2 = 'Por favor, adicione um valor numérico válido e selecione uma das opções abaixo.'
    }
    else{
      let VB = 1500;
      let VI = 3500;
      let VA = 7500;
      let custoSetup = 0;
      var D_Valor = 0;

      let mensagem = '';

      if(this.tipoSetup == 'básico'){
        custoSetup = VB;
      }
      else if(this.tipoSetup == 'intermediário'){
        custoSetup = VI;
      }
      else if(this.tipoSetup == 'avançado'){
        custoSetup = VA;
      }

      D_Valor = Total_Orçamento - custoSetup;

      if(D_Valor >= 0){
        mensagem = `Orçamento suficiente! | Sobraram R$${D_Valor.toFixed(2)}`;
      }
      else{
        D_Valor = D_Valor*(-1);
        mensagem = `Orçamento insuficiente... | Faltam R$${D_Valor.toFixed(2)} para atingir a meta.`
      }

      this.res_ex2 = mensagem;
    }
  }  
}
