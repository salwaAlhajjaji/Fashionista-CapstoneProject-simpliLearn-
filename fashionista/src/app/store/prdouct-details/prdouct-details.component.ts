// import { Products } from './../../model/products.model';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Products } from 'src/app/models/products/products.model';

@Component({
  selector: 'app-prdouct-details',
  templateUrl: './prdouct-details.component.html',
  styleUrls: ['./prdouct-details.component.css']
})
export class PrdouctDetailsComponent implements OnInit {

  product: Products = new Products;
  product_id!: string ;
  constructor(private api:ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
          this.product_id = params['id'];
          this.getProductDetails(this.product_id)
          
      }
    )
  }
  getProductDetails(product_id:string){
    this.api.getProductById(product_id).subscribe((product:Products) => {
      this.product = product
    })
  }
}
