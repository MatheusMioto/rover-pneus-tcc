import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../api/product';

@Injectable({
    providedIn: 'root',
})
export class CarrinhoService {
    private cart = new BehaviorSubject<Product[]>([]);
    cart$ = this.cart.asObservable();

    addToCart(product: Product) {
        const currentCart = this.cart.getValue();
        const existingProduct = currentCart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            currentCart.push({ ...product, quantity: 1 });
        }
        this.cart.next(currentCart); // Atualiza o estado do carrinho
    }

    minusToCart(product: Product) {
        const currentCart = this.cart.getValue();
        const existingProduct = currentCart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            if (existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
        }
        this.cart.next(currentCart); // Atualiza o estado do carrinho
    }

    removeFromCart(product: Product) {
        const currentCart = this.cart.getValue();
        const updatedCart = currentCart.filter(
            (item) => item.id !== product.id
        );
        this.cart.next(updatedCart); // Atualiza o estado do carrinho
    }

    getTotal(): number {
        return this.cart
            .getValue()
            .reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

    getQuantity(): number {
        return this.cart
            .getValue()
            .reduce((acc, item) => acc + item.quantity, 0);
    }

    clearCart() {
        this.cart.next([]); // Limpa o carrinho
    }
}
