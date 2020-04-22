import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from "@angular/material/card"
import { HttpService } from './services/http.service';

const material = [

]

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MatCardModule
  ],
  exports:[
    MatCardModule,
  ],
  providers:[
    HttpService
  ]
})
export class SharedModule { }
