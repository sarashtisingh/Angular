import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentComponent } from '../student/student.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path : 'student' , component : StudentComponent
      },
      {
        path : '', redirectTo : 'student' , pathMatch : "full"
      }
    ]
    )
  ],
  exports : [RouterModule]
})
export class RoutingModule { }