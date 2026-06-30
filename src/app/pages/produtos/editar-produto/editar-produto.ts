import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-produto.html',
  styleUrl: './editar-produto.css',
})
export class EditarProduto {

  produto = {
    nome: '',
    preco: ''
  };

  formModificado = false;

  onChange() {
    this.formModificado = true;
  }

  salvar() {
    console.log('Produto editado (simulado):', this.produto);
    alert('Produto atualizado!');
    this.formModificado = false;
  }

  podeSair(): boolean {
    return !this.formModificado;
  }
}