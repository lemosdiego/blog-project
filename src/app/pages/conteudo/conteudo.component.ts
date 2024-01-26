import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { dataFake } from '../../database/datafake'

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  @Input()
  imgCover:string = ''
  @Input()
  tituloContent:string = ''
  @Input()
  descricaoContent:string = ''

  private id:string | null = "0"


  constructor(
    private rout:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe(value =>
      this.id = value.get("id")
      )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const resultado = dataFake.filter(article => article.id==id)[0]

      this.tituloContent = resultado.title
      this.descricaoContent = resultado.description
      this.imgCover = resultado['photo:']

  }

}
