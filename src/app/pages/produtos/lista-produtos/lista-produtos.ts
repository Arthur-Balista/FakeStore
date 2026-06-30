import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos implements OnInit {

  produtos: any[] = [];
  filtro: string = '';

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.productService.listarProdutos().subscribe({
      next: (res: any) => {

    this.produtos = res.filter((p: any) =>
      p.id <= 50 &&
      p.images &&
      p.images.length > 0
    );

  this.cdr.detectChanges();

},
      error: (err) => {
        console.error('🔴 erro ao carregar produtos:', err);
      }
    });
  }

  get produtosFiltrados() {
    return this.produtos.filter(p =>
      p.title.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

}