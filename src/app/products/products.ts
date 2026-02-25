import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})

export class Products {

  products = [
    { name: 'Daisy Bouquet', price: 300, available: true, image: "assets/image/Gumamela.png"},
    { name: 'Tulips Bouquet', price: 300, available: true, image: "assets/image/Tulips.png"},
    { name: 'Scarlet Petal Bouquet', price: 500, available: false, image: "assets/image/Scarlet-Petals.png"},
    { name: 'Dual Tulip Bouquet', price: 250, available: true, image: "assets/image/Dual-Tulips.png"},
    { name: 'Gumamela Bouquet', price: 200, available: true, image: "assets/image/Gumamela.png"}
  ];

  addToCart(product: any) {
    alert(product.name + ' added to cart!');
  }
}