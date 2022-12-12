import {Component, OnInit} from '@angular/core'
import {IProduct} from './models/product'
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products: IProduct
  loading = false

  constructor(private productsService: ProductsService) {
  }


  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe({
      next: arr => console.log(arr)
    })
    this.loading = false
  }


}
