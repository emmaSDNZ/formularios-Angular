import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactivoRoutingModule } from './reactivo-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';


//impoprt Reactive Forms Module
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactivoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactivoModule { }
