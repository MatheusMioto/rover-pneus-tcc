import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VendaComponent } from './venda.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: VendaComponent }
    ])],
    exports: [RouterModule]
})
export class VendaRoutingModule { }
