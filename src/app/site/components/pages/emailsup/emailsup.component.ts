import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Sup {
    name: string;
    code: string;
}

@Component({
    templateUrl: './emailsup.component.html'
})
export class EmailSupComponent implements OnInit{

    sups: Sup[] | undefined;

    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.sups = [
            { name: 'Cadastro', code: 'cadastro' },
            { name: 'Entrega', code: 'entrega' },
            { name: 'pedido', code: 'pedido' },
            { name: 'Cancelamento', code: 'cancelamento' },
            { name: 'Devolução e garantia', code: 'devolução' },
            { name: 'Retirar na loja', code: 'retirarloja' },
            { name: 'Status do protocolo', code: 'protocolo' },
        ];

        this.formGroup = new FormGroup({
            selectedSups: new FormControl<Sup | null>(null)
        });
    }

}
