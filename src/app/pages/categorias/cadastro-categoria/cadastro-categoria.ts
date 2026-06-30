import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../../guards/can-deactivate-guard';

@Component({
  selector: 'app-cadastro-categoria',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./cadastro-categoria.html',
  styleUrl:'./cadastro-categoria.css'
})
export class CadastroCategoria implements CanComponentDeactivate{

  categoria={

    name:'',

    image:''

  };

  alterado=false;

  constructor(private router:Router){}

  salvar(){

    alert("Categoria cadastrada! (Simulação)");

    this.alterado=false;

    this.router.navigate(['/categorias']);

  }

  cancelar(){

    this.router.navigate(['/categorias']);

  }

  podeSair(): boolean {
  return !this.alterado;
}

}