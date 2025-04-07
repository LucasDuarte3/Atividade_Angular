// app.routes.ts
import { Routes } from '@angular/router';
import { PainelPrincipalComponent } from './components/painel-principal/painel-principal-component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';

export const routes: Routes = [
  { path: 'painel-principal', component: PainelPrincipalComponent },
  { path: 'cadastro-produto', component: CadastroProdutoComponent },
  { path: 'cadastro-produto/:id', component: CadastroProdutoComponent },
  { path: '', redirectTo: '/painel-principal', pathMatch: 'full' }
];