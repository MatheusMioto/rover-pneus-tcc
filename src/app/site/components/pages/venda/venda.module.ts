import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VendaRoutingModule } from './venda-routing.module';
import { VendaComponent } from './venda.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';

import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';

@NgModule({
    imports: [
        CommonModule,
        VendaRoutingModule,
        FormsModule,
        DataViewModule,
        ButtonModule,
        TagModule,
        DropdownModule,
        PickListModule,
        OrderListModule,
        InputTextModule,
        RatingModule,
        TableModule

    ],
    declarations: [VendaComponent]
})
export class VendaModule { }
