import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent {
  listaProdutos: Produto[] = [];
  nomePesquisado: string = "";

  constructor(private service: ProdutoService) {
    this.listaProdutos = this.service.getListaProdutos();
  }

  deletar(id?: number) {
    this.service.deletar(id);
  }

}
