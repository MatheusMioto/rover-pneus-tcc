import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuporteRoutingModule } from './suporte-routing.module';
import { SuporteComponent } from './suporte.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        SuporteRoutingModule,
        CardModule,
        ButtonModule
    ],
    declarations: [SuporteComponent]
})
export class SuporteModule { }
