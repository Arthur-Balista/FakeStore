import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-excluir-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './excluir-produto.html',
  styleUrl: './excluir-produto.css'
})
export class ExcluirProduto {

  produto = {
    nome: 'Produto exemplo',
    preco: 100
  };

  excluir() {
    console.log('Produto excluído (simulado):', this.produto);
    alert('Produto excluído com sucesso!');
  }
}