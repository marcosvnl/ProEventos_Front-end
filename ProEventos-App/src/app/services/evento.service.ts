import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable() // não está passando nada por que está no provider do aap.module passamos EventoService no array de providers

// @Injectable({
//   providedIn: 'root'
// }) essecaso é quando não for passado o eventoService no app.module
export class EventoService {
  baseURL = 'https://localhost:5001/api/Evento';

  constructor(private http : HttpClient) { }

  public getEventos() : Observable<Evento[]> {
    return this.http.get<Evento[]>(this.baseURL);
  }

  public getEventoById(id : number) : Observable<Evento> {
    return this.http.get<Evento>(`${this.baseURL}/${id}`);
  }

  public getEventosByTema(tema : string) : Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseURL}/${tema}/tema`);
  }
}
