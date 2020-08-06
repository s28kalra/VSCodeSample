import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { FirstComponent } from './firstcomp';
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { PrintName } from "./printname.component";
import { CounterComponent } from "./counter/counter.component";
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { PrintEmployee } from "./printemployee";
import { Login } from "./login";
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LuckynumberComponent,
    PrintName,
    CounterComponent,
    DirectivecompComponent,
    PrintEmployee, 
    Login
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
  //bootstrap: [FirstComponent]
  //bootstrap: [ClickCountComponent]
  //bootstrap: [HelloName]
  //bootstrap: [PrintName]
})
export class AppModule { }
