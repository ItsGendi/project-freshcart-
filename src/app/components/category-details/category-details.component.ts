import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  categoryId: any;
  categoryDetails: any;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _http: CategoriesService
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.categoryId = params.get('Id');
      },
      error: (error) => {
        console.log(error);
      },
    });

    this._http.getCategoryDetails(this.categoryId).subscribe({
      next: (response) => {
        console.log(response);
        this.categoryDetails = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
