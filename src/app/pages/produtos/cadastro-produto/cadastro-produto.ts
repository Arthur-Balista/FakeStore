import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CanComponentDeactivate } from '../../../guards/can-deactivate-guard';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-produto.html',
  styleUrl: './cadastro-produto.css',
})
export class CadastroProduto implements CanComponentDeactivate {

  produto = {
    nome: '',
    preco: ''
  };

  formModificado = false;

  onChange() {
    this.formModificado = true;
  }

  salvar() {
    console.log('Produto criado (simulado):', this.produto);
    alert('Produto cadastrado com sucesso!');
    this.formModificado = false;
  }

  podeSair(): boolean {
    return !this.formModificado;
  }
}