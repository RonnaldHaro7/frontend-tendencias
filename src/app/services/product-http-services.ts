import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProduct, ProductModel, UpdateProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
    readonly API_URL:string = 'http://api.escuelajs.co/api/v1/products';

  constructor(private httpClient:HttpClient) {}

  getAll() {
    const url = '${this.API_URL}'
    return this.httpClient.get(this.API_URL)}

  getOne(id:number) {
    const url = '${this.API_URL}/${id}';
    return this.httpClient.get(url)}

  store(product: CreateProduct) {
    const data=  {
      title:"Taller numero 4",
      price:4,
      description:"realizado por Ronnald Haro",
      images:[],
      categoryId: 1,
    }
    const url = '${this.API_URL}';
    return this.httpClient.post(url, data)}

  update(id:number, product: UpdateProduct ) {
    const data=  {
      title:"cuadernos",
      price:3,
      description:"utiles Ronnald Haro",
    }
    const url = '${this.API_URL}/${id}';
    return this.httpClient.put(url, data)}

  destroy(id:number) {
    const url = '${this.API_URL}/${id}';
    return this.httpClient.delete(url)}
  ; }
