import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Evento } from '@app/models/Evento';
import { EventoService } from '@app/services/evento.service';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent implements OnInit {

  //Propriedades
  modalRef? : BsModalRef;
  public eventos : Evento[] = [];
  public eventosFiltrados : Evento[] = [];
  private _filtroLista : string = '';

  //Variáveis
  widthImg : number = 150;
  marginImg : number = 2;
  mostrarImagem : boolean = true;
  // message : string = '';

  //Construtor recebe como parametro o HttpClient usado para encehrgar a API
  constructor(
    private eventoService : EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
    ) { }

  //Inicializando o método getEvento()
  public ngOnInit(): void {
    this.spinner.show();
    this.getEventos();
  }

  //Get da busca
  public get filtroLista() : string {
    return this._filtroLista;
  }

  //Set da busca
  public set filtroLista(value : string){
    this._filtroLista = value
    this.eventosFiltrados = this.filtroLista ? this.filtarEventos(this.filtroLista) : this.eventos
  }

  //Componente trata o filtro da busca
  public filtarEventos(filtrarPor : string) : Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (e: { tema: string; local: string; }) =>
        e.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        e.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }
  //Componente para mostrar ou esconder imagens
  public alterarImagem() : void {
    this.mostrarImagem = !this.mostrarImagem
  }

  //Componente carrega dados na tela e encherga a API(Eventos)
  public getEventos() : void {

    this.eventoService.getEventos().subscribe({
      next: (eventos: Evento[]) => {
        this.eventos = eventos;
        this.eventosFiltrados = this.eventos;
      },
      error: (error : any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar os eventos', 'ERROR');
      },
      complete: () => {
        this.spinner.hide()
      }
    });
  }


  //modal dropdow
  public openModal(template: TemplateRef<any>) : void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  //caixas de confirmação do toastr
  public confirm(): void {
    // this.message = 'Confirmed!';
    this.modalRef?.hide();
    // this.toastr.success('Hello world!', 'Toastr fun!');
    //Toaster é ingetado no app.module a documentação estno site ngx-toastr
    this.toastr.success('Evento deletedo com sucesso!', 'Deletado.');
  }

  public decline(): void {
    // this.message = 'Declined!';
    this.modalRef?.hide();
  }

  detalheEvento(id: number): void {
    this.router.navigate([`/eventos/detalhe/${id}`])
  }

}
