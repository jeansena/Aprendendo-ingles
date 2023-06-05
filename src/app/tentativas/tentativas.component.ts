// import { TentativasComponent } from './tentativas.component';
// import { Coracao } from './../../shared/coracao.model';
import { Component, Input } from '@angular/core';

import { Coracao } from 'src/shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent {

  @Input() public tentativas: any

  public Coracaes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  // public coracaoVazio: string = "/assets/coracao_vazio.png"
  // public coracaoCheio: string = "/assets/coracao_cheio.png"

  constructor(  ){

    //console.log(this.Coracaes)

  }
  ngOnChanges(){

    if(this.tentativas !== this.Coracaes.length){
      let indice = this.Coracaes.length - this.tentativas

      this.Coracaes[indice - 1].cheio = false
    }

  // console.log("tentativas recebidas do painel:" , this.tentativas)
  }
}
