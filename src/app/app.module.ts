import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoFormComponentComponent } from './demo-form-component/demo-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
