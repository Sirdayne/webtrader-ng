import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatListModule,
    CommonModule
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatListModule
  ],
  providers: []
})
export class SharedModule { }
