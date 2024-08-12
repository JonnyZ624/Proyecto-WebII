import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private htpp:HttpClient) { }

  private API_PRODUCTO = 'http://localhost:3000/productos'

  getProducto():Observable <any>{
    return this.htpp.get(this.API_PRODUCTO)
  }
}
