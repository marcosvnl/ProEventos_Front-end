import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() subititulo: string = 'Dês de 2021';
  @Input() iconClass = 'fa fa-user';
  @Input() botaoListar: Boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Listar(): void {
    this.router.navigate([`${this.titulo.toLocaleLowerCase()}/lista`])
  }

}
