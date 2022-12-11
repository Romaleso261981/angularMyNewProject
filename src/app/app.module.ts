import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'


import {AppComponent} from './app.component'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {FocusDirective} from './directives/focus.directive'
import {ProductComponent} from "./components/product/product.component";


@NgModule({
  declarations: [
    AppComponent,
    FocusDirective,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
