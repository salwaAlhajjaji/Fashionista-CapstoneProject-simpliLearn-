import { Products } from './models/products/products.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  uri = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(`${this.uri}/product`);
  }
  
  getProductById(id:string): Observable<Products>{
    return this.http.get<Products>(`${this.uri}/product/${id}`);
  }

  deleteProductById(id:string): Observable<Products>{
    console.log(id)
    return this.http.delete<Products>(`${this.uri}/product/${id}`);
  }

  addNewProduct(name:string, desc:string, price:number): Observable<Products>{
    return this.http.post<Products>(`${this.uri}/product`,{
      name: name,
      description: desc,
      price: price,
    })
  }

  editProduct(id:string, name:string, desc:string, price:number): Observable<Products>{
    return this.http.patch<Products>(`${this.uri}/product/${id}`,{
      name: name,
      description: desc,
      price: price,
    })
  }
  getWishList(id:string): Observable<Products[]>{
    return this.http.get<Products[]>(`${this.uri}/wish-list/${id}`);
  }
  addToWishList(user_id:string, product_id:string): Observable<Products>{
    return this.http.post<Products>(`${this.uri}/wish-list/${user_id}`,{
      product_id: product_id
    });
  }
  addToCart(user_id:string, product_id:string): Observable<Products>{
    return this.http.post<Products>(`${this.uri}/cart/${user_id}`,{
      product_id: product_id
    });
  }
}
