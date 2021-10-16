import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, AbstractFormGroupDirective, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  form: FormGroup;

  get f() : any {
    return this.form.controls
  }

  onSubmit(): void {
    if (this.form.invalid) {

      //Para aqui se o form não estiver válido
      return;
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validation();
  }

  public validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirSenha')
    }

    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      funcao: ['', Validators.required],
      descricao: ['', [Validators.required, Validators.maxLength(200)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirSenha: ['', Validators.required]
    }, formOptions)
  }

  public cleanValues(event: any): void {
    event.preventDefault();
    this.form.reset();
  }
}
