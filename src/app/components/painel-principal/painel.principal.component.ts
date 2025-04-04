import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-painel-principal',
  // Não precisa importar HttpClientModule aqui! Ele já está configurado no app.config.ts
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.css']
})
export class PainelPrincipalComponent implements OnInit {
  produtos: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.obterProdutos().subscribe((dados) => {
      this.produtos = dados;
    });
  }

  excluirProduto(id: number) {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.produtoService.deletarProduto(id).subscribe(() => {
        alert('Produto excluído com sucesso!');
        this.listarProdutos();
      });
    }
  }

  editarProduto(id: number) {
    this.route.navigate(['/cadastro-produto', id]);
  }
}