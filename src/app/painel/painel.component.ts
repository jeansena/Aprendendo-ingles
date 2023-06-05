import { Component, EventEmitter, Output } from '@angular/core';

import { Frase } from 'src/shared/frase.model';
import { FRASES } from './frase-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent {
  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza a fraze"
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor(){
      this.atualizarRodada()
     this.rodadaFrase = this.frases[this.rodada]
    // console.log(this.rodadaFrase)
    //  console.log(this.frases)
  }

  ngOnDestroy(){
   // console.log("Componente painel foi destruido")
  }



  atualizaResposta(resposta: Event): void{
    this.resposta =((<HTMLInputElement>resposta.target).value)
   // console.log(this.resposta)
  }

  verificarResposta():void {

    if(this.rodadaFrase.frasePtBr === this.resposta){
      //alert('A tradução esta correta')

      //trocar de pergunta da rodada
      this.rodada++
      //progresso
      this.progresso = this.progresso + (100/this.frases.length)

      //
      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria')
        //alert('Concluiu as traduções com sucesso!')
      }

      this.atualizarRodada()
      //atulizar o objeto rodadaFrase
      //this.rodadaFrase = this.frases[this.rodada]
    }
    else{
      //diminuir o objeto radadaFrase
      this.tentativas--
        if(this.tentativas === -1){
          this.encerrarJogo.emit('derrota')
          // alert("Você perdeu todas as tentativas")
        }
      // alert('A tradução esta errada')
    }
   // console.log(this.tentativas)

    // console.log('Verificar resposta:',this.resposta)
  }


  atualizarRodada(): void{

    //atulizar o objeto rodadaFrase
    this.rodadaFrase = this.frases[this.rodada]

    //limpar caixa de texo
    this.resposta = ''
  }
}
