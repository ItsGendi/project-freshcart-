import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categoryData: any[] = [];
  constructor(private _http: ProductsService) {}

  ngOnInit(): void {
    this._http.getCategories().subscribe({
      next: (response) => {
        console.log(response);
        this.categoryData = response.data;
      },
      error: (error) => {console.log(error);
      },
    });
  }
}
