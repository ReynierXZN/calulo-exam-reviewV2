import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ needed for ngModel

@Component({
  standalone: true,
  selector: 'app-goods',
  imports: [RouterModule, CommonModule, FormsModule], // ✅ add FormsModule
  templateUrl: './goods.html',
  styleUrl: './goods.css'
})
export class Goods {

  searchTerm: string = ''; // ✅ for search input binding

  product = [
    { id: 1, name: "Laptop", price: 100, description: "Intel i5 23rd gen" },
    { id: 2, name: "Mouse", price: 20, description: "Wireless mouse" },
    { id: 3, name: "Keyboard", price: 50, description: "Mechanical keyboard" }
  ];

  // ✅ function to filter products
filteredProducts() {
  return this.product.filter(item =>
 !this.searchTerm || JSON.stringify(item).includes(this.searchTerm)
  );
}
}
