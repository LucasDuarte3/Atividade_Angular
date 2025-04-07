import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'app-painel-principal',
  // Não precisa importar HttpClientModule aqui! Ele já está configurado no app.config.ts
  templateUrl: './painel-principal-component.html',
  styleUrls: ['./painel-principal-component.css']
})
export class PainelPrincipalComponent implements OnInit {
  produtos: any[] = [];
  erroCarregamento: string | null = null;

  constructor(
    private produtoService: ProdutoService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.obterProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
        console.log('Produtos carregados:', produtos);
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos:', erro);
        // Dados mockados para desenvolvimento
        this.produtos = [
          { id: 1, produto: "Jogo 1", descricao: "Pronto para jogar?", foto: "jogo1.PNG", preco: 5000 },
          { id: 2, produto: "Jogo 2", descricao: "Pronto para jogar?", foto: "jogo2.PNG", preco: 4500 },
          { id: 3, produto: "Jogo 3", descricao: "Pronto para jogar?", foto: "jogo3.PNG", preco: 4500 },
          { id: 4, produto: "Jogo 4", descricao: "Pronto para jogar?", foto: "jogo1.PNG", preco: 3500 },
          { id: 5, produto: "Jogo 5", descricao: "Pronto para jogar?", foto: "jogo2.PNG", preco: 7500 },
          { id: 6, produto: "Jogo 6", descricao: "Pronto para jogar?", foto: "jogo3.PNG", preco: 5500 },
          { id: 7, produto: "Jogo 7", descricao: "Pronto para jogar?", foto: "jogo1.PNG", preco: 1500 },
          { id: 8, produto: "Jogo 8", descricao: "Pronto para jogar?", foto: "jogo2.PNG", preco: 2500 },
          { id: 9, produto: "Jogo 9", descricao: "Pronto para jogar?", foto: "jogo3.PNG", preco: 5000 },
          { id: 10, produto: "Jogo 10", descricao: "Pronto para jogar?", foto: "jogo1.PNG", preco: 8500 },
        ];
      }
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