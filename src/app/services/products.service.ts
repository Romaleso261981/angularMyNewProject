import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {ErrorService} from './error.service'
import {IProduct} from "../models/product";
import {ajax} from "rxjs/internal/ajax/ajax";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }


  products: IProduct

  getAll() {
    return ajax.getJSON('https://pixabay.com/api/?key=29683186-89d5b8f18ccbe7d45b5194d45&image_type=photo&orientation=horizontal&per_page=12')
        }
}
