import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { HighlightDirective} from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
