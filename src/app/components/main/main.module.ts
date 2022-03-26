import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule} from "@angular/router";
import {UiKitModule} from "../ui-kit/ui-kit.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiKitModule
  ]
})
export class MainModule { }
