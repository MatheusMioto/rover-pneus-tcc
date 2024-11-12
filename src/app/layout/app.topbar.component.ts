import { Product } from './../site/api/product';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { CarrinhoService } from '../site/service/carrinho.service';
import { Router } from '@angular/router';
import { AuthService } from '../site/service/auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {

    cartItems$ = this.carrinhoService.cart$;

    isLoggedIn = false;

    total = 0;
    quantity = 0;

    items!: MenuItem[];

    menuItems: MenuItem[] = [];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        private carrinhoService: CarrinhoService,
        public router: Router,
        private authService: AuthService,
    ) {}

    ngOnInit(): void {
        this.cartItems$.subscribe(() => {
            this.total = this.carrinhoService.getTotal();
            this.quantity = this.carrinhoService.getQuantity();
        });

        this.authService.isLoggedIn$.subscribe((loggedInStatus) => {
            this.isLoggedIn = loggedInStatus;
          });
          if (!localStorage.getItem('pageReloaded')) {
            localStorage.setItem('pageReloaded', 'true');
            location.reload();
        }else{
            localStorage.removeItem('pageReloaded');
        }

    }

    removeFromCart(product) {
        this.carrinhoService.removeFromCart(product);
    }

    minusToCart(product){
        this.carrinhoService.minusToCart(product);
    }

    addToCart(product){
        this.carrinhoService.addToCart(product);
    }

    pagamento(op,$event){
        op.toggle($event)
        this.router.navigate(['/pages/pagamento'])
    }

}
