import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  
  loading:boolean = true;
  public product?: IProducto;
  
  private _router = inject(ActivatedRoute)
  private _apiService = inject(ApiService)
  
  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data: IProducto) => {
        this.product = data;
        this.loading= false;
      }); 
    })
  }
}
