import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient:HttpClient) {
   }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    const url = "http://api.escuelajs.co/api/v1/products";
    this.httpClient.get(url).subscribe(
    response => {
      console.log(response);    }
  ); }

  getProduct() {
    this.httpClient.get("http://api.escuelajs.co/api/v1/products/1").subscribe(
    response => {
      console.log(response);    }
  ); }

  updateProduct() {
    const data=  {
      title:"cuadernos",
      price:3,
      description:"utiles Ronnald Haro",
      categoryId:1,

    }
    const url = "http://api.escuelajs.co/api/v1/products";
    this.httpClient.put(url, data).subscribe(
    response => {
      console.log(response);    }
  ); }

  createProduct() {
    const data=  {
      title:"cuadernos",
      price:3,
      description:"utiles Ronnald Haro",
      categoryId:1,

    }
    const url = "http://api.escuelajs.co/api/v1/products";
    this.httpClient.put(url, data).subscribe(
    response => {
      console.log(response);    }
  ); }
  
  deleteProduct() {
    this.httpClient.delete("http://api.escuelajs.co/api/v1/products/1").subscribe(
    response => {
      console.log(response);    }
  ); }
  ; }