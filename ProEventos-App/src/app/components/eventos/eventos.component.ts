import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
  //, providers : [EventoService] Essa é outra maneira de ingetar a classe eventoService (direto no componente)
})
export class EventosComponent implements OnInit {


  //Inicializando o método getEvento()
  public ngOnInit(): void {

  }
}
