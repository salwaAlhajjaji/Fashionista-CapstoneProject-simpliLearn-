import { User } from '../../models/users/users.model'
import { Product } from '../../models/products/products.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  uri = 'http://localhost:9090';

  constructor(private http: HttpClient) { }
  // Products - ADMIN SECTION
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.uri}/product`);
  }
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.uri}/product/${id}`);
  }
  deleteProductById(id: string): Observable<Product> {
    console.log(id)
    return this.http.delete<Product>(`${this.uri}/product/${id}`);
  }
  addNewProduct(name: string, desc: string, price: number): Observable<Product> {
    return this.http.post<Product>(`${this.uri}/product`, {
      name: name,
      description: desc,
      price: price,
    })
  }
  editProduct(id: string, name: string, desc: string, price: number): Observable<Product> {
    return this.http.patch<Product>(`${this.uri}/product/${id}`, {
      name: name,
      description: desc,
      price: price,
    })
  }
  // Users - ADMIN SECTION
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.uri}/user`);
  }
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.uri}/user/${id}`);
  }
  deleteUserById(id: string): Observable<User> {
    return this.http.delete<User>(`${this.uri}/user/${id}`);
  }
  addNewUser(name: string, email: string, pass: string): Observable<User> {
    return this.http.post<User>(`${this.uri}/user`, {
      name: name,
      email: email,
      password: pass,
    })
  }
  editUser(id: string, name: string, email: string): Observable<User> {
    return this.http.patch<User>(`${this.uri}/user/${id}`, {
      name: name,
      email: email,
    })
  }
  // Wish List
  getWishList(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.uri}/wish-list/${id}`);
  }
  addToWishList(user_id: string, product_id: string): Observable<Product> {
    return this.http.post<Product>(`${this.uri}/wish-list/${user_id}`, {
      product_id: product_id
    });
  }
  deleteFromWishList(id: string, product_id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.uri}/wish-list/dp/${id}`, {
      body: { product_id: product_id }
    });
  }
  deleteWishList(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.uri}/wish-list/${id}`);
  }
  // Cart
  getCart(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.uri}/cart/${id}`);
  }
  addToCart(user_id: string, product_id: string): Observable<Product> {
    return this.http.post<Product>(`${this.uri}/cart/${user_id}`, {
      product_id: product_id
    });
  }
  deleteFromCart(id: string, product_id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.uri}/cart/dp/${id}`, {
      body: { product_id: product_id }
    });
  }
  deleteCart(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.uri}/cart/${id}`);
  }
  // Authentication
  signup(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.uri}/auth/signup`, {
      name: name,
      email: email,
      password: password,
    })
  }
  login(email: string, password: string): Observable<any>  {
    return this.http.post(`${this.uri}/auth/login`, {
      email: email,
      password: password,
    })
  }

}
