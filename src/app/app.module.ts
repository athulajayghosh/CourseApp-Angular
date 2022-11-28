import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { FormsModule } from '@angular/forms';

const myRoute: Routes=[
  {path:"",
  component:AddCourseComponent
  },
  {path:"viewall",
  component:ViewCourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddCourseComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
