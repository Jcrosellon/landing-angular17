import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: IProducto[] = []

  private _apiservice = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiservice.getProducts().subscribe((data: IProducto[]) => {
      console.log(data)
      this.productList = data;
    });
  }

  navegate(id: number): void {
    this._router.navigate(['/products', id]);
  }
}
