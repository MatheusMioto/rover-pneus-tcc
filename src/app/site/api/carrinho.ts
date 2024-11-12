export interface Carrinho {
    id:         number;
    datacompra: string;
    valortotal: number;
    itens:      Item[];
}

export interface Item {
    idproduto: string;
    price:     number;
    quantity:  number;
}
