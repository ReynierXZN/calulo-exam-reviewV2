import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-goods',
  imports: [RouterModule, CommonModule],
  templateUrl: './goods.html',
  styleUrl: './goods.css'
})
export class Goods {

  product = [
  {id: 1, name: "Laptop", price: 100, description: "Intel i5 23rd gen"}

  ];
}
