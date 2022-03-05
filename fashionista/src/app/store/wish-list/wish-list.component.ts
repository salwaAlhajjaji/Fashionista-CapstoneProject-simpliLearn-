import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Products } from 'src/app/models/products/products.model';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  products: Products[] = [];

  constructor(private  api: ApiServiceService) { }

  ngOnInit(): void {
     this.api.getWishList('621f49c415aa2b1b3202114f').subscribe((products:Products[]) => {
      this.products = products
      console.log(products)
    })

  }
}
