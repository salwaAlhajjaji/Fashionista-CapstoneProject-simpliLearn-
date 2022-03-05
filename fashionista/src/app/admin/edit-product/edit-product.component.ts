import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { Products } from 'src/app/models/products/products.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product_id!: string ;
  constructor(private api:ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
          this.product_id = params['id'];
          // this.editProduct(this.product_id)
      }
    )
  }
editProduct( name:string, desc:string, price:string){
  this.api.editProduct(this.product_id, name, desc, +price).subscribe(res => {
    // this.router.navigate(['../'], { relativeTo: this.route });
    this.router.navigate(['/products-list'], { relativeTo: this.route });

    })
}
}
