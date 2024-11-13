import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSupRoutingModule } from './emailsup-routing.module';
import { EmailSupComponent } from './emailsup.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        EmailSupRoutingModule,
        CardModule,
        FormsModule,
        InputTextareaModule,
        DropdownModule,
        ReactiveFormsModule,
        ButtonModule
    ],
    declarations: [EmailSupComponent]
})
export class EmailSupModule { }
