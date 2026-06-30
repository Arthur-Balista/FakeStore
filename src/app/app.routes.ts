import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

import { ListaProdutos } from './pages/produtos/lista-produtos/lista-produtos';
import { CadastroProduto } from './pages/produtos/cadastro-produto/cadastro-produto';
import { EditarProduto } from './pages/produtos/editar-produto/editar-produto';
import { ExcluirProduto } from './pages/produtos/excluir-produto/excluir-produto';

import { ListaCategorias } from './pages/categorias/lista-categorias/lista-categorias';
import { CadastroCategoria } from './pages/categorias/cadastro-categoria/cadastro-categoria';
import { EditarCategoria } from './pages/categorias/editar-categoria/editar-categoria';
import { ExcluirCategoria } from './pages/categorias/excluir-categoria/excluir-categoria';

import { authGuard } from './guards/auth-guard';
import { canDeactivateGuard } from './guards/can-deactivate-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },

  // PRODUTOS

  {
    path: 'produtos',
    component: ListaProdutos,
    canActivate: [authGuard]
  },

  {
    path: 'produtos/novo',
    component: CadastroProduto,
    canActivate: [authGuard],
    canDeactivate: [canDeactivateGuard]
  },

  {
    path: 'produtos/editar',
    component: EditarProduto,
    canActivate: [authGuard],
    canDeactivate: [canDeactivateGuard]
  },

  {
    path: 'produtos/excluir',
    component: ExcluirProduto,
    canActivate: [authGuard]
  },

  // CATEGORIAS

  {
    path: 'categorias',
    component: ListaCategorias,
    canActivate: [authGuard]
  },

  {
    path: 'categorias/novo',
    component: CadastroCategoria,
    canActivate: [authGuard],
    canDeactivate: [canDeactivateGuard]
  },

  {
    path: 'categorias/editar',
    component: EditarCategoria,
    canActivate: [authGuard],
    canDeactivate: [canDeactivateGuard]
  },

  {
    path: 'categorias/excluir',
    component: ExcluirCategoria,
    canActivate: [authGuard]
  },

 
  {
    path: '**',
    redirectTo: 'login'
  }

];