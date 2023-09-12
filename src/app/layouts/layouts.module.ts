import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SubLayoutComponent } from './sub-layout/sub-layout.component';
import { IonicModule } from '@ionic/angular';

const COMPO =[
  MainLayoutComponent,
  SubLayoutComponent
]

@NgModule({
  declarations: COMPO,
  exports: COMPO,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class LayoutsModule { }
