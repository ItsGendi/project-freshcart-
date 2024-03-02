import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  brandData: any[] = [];
  constructor(private _http: BrandsService) {}

  ngOnInit(): void {
    this._http.getBrands().subscribe({
      next: (response) => {
        console.log(response);
        this.brandData = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
