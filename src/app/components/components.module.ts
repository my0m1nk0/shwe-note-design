import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CatListComponent } from './cat-list/cat-list.component';

const COMPONENTS=[
  CatListComponent
]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    IonicModule
  ],
})
export class ComponentsModule { }
