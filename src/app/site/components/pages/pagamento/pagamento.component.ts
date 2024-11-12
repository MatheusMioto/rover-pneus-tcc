import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { CarrinhoService } from 'src/app/site/service/carrinho.service';

@Component({
    templateUrl: './pagamento.component.html',
    styleUrls: ['./pagamento.component.css'],
})
export class PagamentoComponent {
    total = 0;
    paymentMethods = [
        'Cartão de Crédito',
        'Cartão de Débito',
        'Pix',
    ];

    paymentOptions = this.paymentMethods.map(method => ({ label: method, value: method }));

    paymentForm = this.fb.group({
        paymentMethod: ['', Validators.required],
        cardNumber: [''],
        cardName: [''],
        cardExpiry: [''],
        cardCvv: [''],
    });

    constructor(
        private cartService: CarrinhoService,
        private fb: NonNullableFormBuilder
    ) {
        this.total = this.cartService.getTotal();
    }

    onPaymentMethodChange(method: string) {
        if (method === 'Cartão de Crédito' || method === 'Cartão de Débito') {
            this.paymentForm
                .get('cardNumber')
                ?.setValidators([
                    Validators.required,
                    Validators.pattern(/^\d{16}$/),
                ]);
            this.paymentForm
                .get('cardName')
                ?.setValidators([Validators.required]);
            this.paymentForm
                .get('cardExpiry')
                ?.setValidators([
                    Validators.required,
                    Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
                ]);
            this.paymentForm
                .get('cardCvv')
                ?.setValidators([
                    Validators.required,
                    Validators.pattern(/^\d{3}$/),
                ]);
        } else {
            this.paymentForm.get('cardNumber')?.clearValidators();
            this.paymentForm.get('cardName')?.clearValidators();
            this.paymentForm.get('cardExpiry')?.clearValidators();
            this.paymentForm.get('cardCvv')?.clearValidators();
        }
        // Atualiza o estado dos campos após definir ou limpar as validações
        this.paymentForm.get('cardNumber')?.updateValueAndValidity();
        this.paymentForm.get('cardName')?.updateValueAndValidity();
        this.paymentForm.get('cardExpiry')?.updateValueAndValidity();
        this.paymentForm.get('cardCvv')?.updateValueAndValidity();
    }

    submitPayment() {
        if (this.paymentForm.valid) {
            const paymentData = this.paymentForm.value;
            console.log('Pagamento realizado com sucesso:', paymentData);
            alert('Pagamento realizado com sucesso!');
            this.cartService.clearCart();
        } else {
            alert('Por favor, preencha o formulário corretamente.');
        }
    }
}
