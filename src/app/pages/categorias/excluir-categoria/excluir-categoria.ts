import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excluir-categoria',
  standalone: true,
  templateUrl: './excluir-categoria.html',
  styleUrl: './excluir-categoria.css'
})
export class ExcluirCategoria {

  constructor(private router: Router){}

  excluir(){

    alert("Categoria excluída com sucesso! (Simulação)");

    this.router.navigate(['/categorias']);

  }

  cancelar(){

    this.router.navigate(['/categorias']);

  }

}