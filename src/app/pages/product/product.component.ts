import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/services/product-http-services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private product:ProductHttpService) {
   }

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts() {
    this.product.getAll().subscribe(
    response => {
      console.log(response);    }
  ); }

  getProduct() {
    this.product.getOne(1).subscribe(
    response => {
      console.log(response);    }
  ); }

  createProduct() {
    const data=  {
      title:"Taller numero 4",
      price:4,
      description:"realizado por Ronnald Haro",
      images:[],
      categoryId: 1,
    }
    this.product.store().subscribe(
    response => {
      console.log(response);    }
  ); }

  updateProduct() {
    const data=  {
      title:"cuadernos",
      price:3,
      description:"utiles Ronnald Haro",
    }
    this.product.update(9).subscribe(
    response => {
      console.log(response);    }
  ); }


  deleteProduct() {
    this.product.destroy(1).subscribe(
    response => {
      console.log(response);    }
  ); }
  ; }
