import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuporteComponent } from './suporte.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SuporteComponent }
    ])],
    exports: [RouterModule]
})
export class SuporteRoutingModule { }
