import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/site/api/product';
import { ProductService } from 'src/app/site/service/product.service';
import { SelectItem } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { CarrinhoService } from 'src/app/site/service/carrinho.service';

@Component({
    templateUrl: './venda.component.html',
})
export class VendaComponent implements OnInit {
    products: Product[] = [];
    cartItems$ = this.carrinhoService.cart$;

    sortOptions: SelectItem[] = [];
    sortOrder: number = 0;
    sortField: string = '';
    filteredData: Product[] = [];
    filterValue: string = '';

    constructor(private productService: ProductService, private carrinhoService: CarrinhoService) {}

    ngOnInit(): void {
        this.sortOptions = [
            { label: 'Maior para Menor Preço', value: '!price' },
            { label: 'Menor para Maior Preço', value: 'price' },
        ];

        this.productService.getProducts().then((products) => {
            this.products = products;
            this.filteredData = products;
        });

    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    filterData() {
        const filter = this.filterValue.toLowerCase();
        this.filteredData = this.products.filter((item) =>
            item.name.toLowerCase().includes(filter)
        );
    }

    addToCart(prod: Product) {
        this.carrinhoService.addToCart(prod);
      }

}
