import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../../guards/can-deactivate-guard';

@Component({
  selector:'app-editar-categoria',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./editar-categoria.html',
  styleUrl:'./editar-categoria.css'
})
export class EditarCategoria implements CanComponentDeactivate{

  categoria={

    name:'Categoria',

    image:''

  };

  alterado=false;

  constructor(private router:Router){}

  salvar(){

    alert("Categoria editada! (Simulação)");

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