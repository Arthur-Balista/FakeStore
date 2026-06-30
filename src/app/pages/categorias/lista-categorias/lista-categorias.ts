import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { CategoryService } from '../../../services/category';

@Component({
  selector: 'app-lista-categorias',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './lista-categorias.html',
  styleUrl: './lista-categorias.css'
})
export class ListaCategorias implements OnInit {

  categorias: any[] = [];
  filtro: string = '';

  constructor(
    private categoryService: CategoryService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  carregarCategorias(): void {

    this.categoryService.listarCategorias().subscribe({

    next: (res: any) => {
      this.categorias = res.slice(0, 5);
      this.cdr.detectChanges();
    },

      error: (err) => {

        console.error('Erro ao carregar categorias:', err);

      }

    });

  }

  get categoriasFiltradas() {

    return this.categorias.filter(c =>
      c.name.toLowerCase().includes(this.filtro.toLowerCase())
    );

  }

  novaCategoria(): void {

    this.router.navigate(['/categorias/novo']);

  }

  editarCategoria(categoria: any): void {

    this.router.navigate(
      ['/categorias/editar'],
      {
        state: {
          categoria: categoria
        }
      }
    );

  }

  excluirCategoria(categoria: any): void {

    this.router.navigate(
      ['/categorias/excluir'],
      {
        state: {
          categoria: categoria
        }
      }
    );

  }

}