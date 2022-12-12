import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {ErrorService} from './error.service'
import {IHit, IProduct} from "../models/product";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }


  products: IHit[] = []

  getAll() {
    return this.http.get<IProduct>('https://pixabay.com/api/?key=29683186-89d5b8f18ccbe7d45b5194d45&image_type=photo&orientation=horizontal&per_page=12')
      .pipe(
        map((product)=> product.hits)
      )

  }
}
