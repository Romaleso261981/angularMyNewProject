import {Component} from '@angular/core'
import {products} from "./data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "My title"
  loading = false
  products = products
}
