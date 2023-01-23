import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductDto } from 'src/app/entities/product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductModel[] = [];
  selectedProduct:UpdateProductDto = {};

  constructor(private productHttpService:ProductHttpService) {
    this.initProduct();
   }

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  initProduct() {
    this.selectedProduct = {title:'', price: 0, description:''};
  }

    getProducts() {
      this.productHttpService.getAll().subscribe(
        response => {
          this.products = response;
          console.log(response);
        });
    }
    getProduct() {
      this.productHttpService.getOne(2).subscribe(
        response => {
        console.log(response);
      });
    }

    createProduct() {
      const data = {
        title: 'Computadora Itel core i7',
        price: 650,
        description: 'Electrodomesticos / Erick Guevara',
        images: [
          'https://m.media-amazon.com/images/I/51A+xXT0yiL._AC_SY580_.jpg',
        ],
        categoryId: 1,
      };
      this.productHttpService.store(data).subscribe(
        response => {
        console.log(response);
      });
    }
    editProduct(product: ProductModel){
      this.selectedProduct = product;
    }
    updateProduct(id: ProductModel['id']) {
      const data = {};
      this.productHttpService.update(id, data).subscribe(
        response => {
          this.products = this.products.filter(product => product.id != id );
        console.log(response);
      });
    }
    deleteProduct(id: ProductModel['id']) {
      this.productHttpService.destroy(id).subscribe(
        response => {
          this.products = this.products.filter(product => product.id != id );
        console.log(response);
      });
    }

  }
