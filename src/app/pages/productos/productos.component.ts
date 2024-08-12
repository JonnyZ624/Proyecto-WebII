import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  producto:any
  servicio= inject(ProductoService)

  ngOnInit(){
    this.servicio.getProducto().subscribe(p=>{console.log(p)
      this.producto=p
    })
  }
}
