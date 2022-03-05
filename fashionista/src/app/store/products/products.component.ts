import { ApiServiceService } from './../../api-service.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products/products.model'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];

  constructor(private  api: ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
     this.api.getAllProducts().subscribe((products:Products[]) => {
      this.products = products
    })
  }
  addToWishlist(user_id:string, product_id:string){
    console.log(user_id+" : "+product_id)
    this.api.addToWishList(user_id,product_id).subscribe(res => {
      // this.router.navigate(['../'], { relativeTo: this.route });
      console.log(res)
    })
  }
  addToCart(user_id:string, product_id:string){
    console.log(user_id+" : "+product_id)
    this.api.addToCart(user_id,product_id).subscribe(res => {
      // this.router.navigate(['../'], { relativeTo: this.route });
      console.log(res)
    })
  }
}
