import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brandsdetails',
  templateUrl: './brandsdetails.component.html',
  styleUrls: ['./brandsdetails.component.scss'],
})
export class BrandsdetailsComponent implements OnInit {
  brandId: any;
  brandDetails: any;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _http: BrandsService
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.brandId = params.get('Id');
      },
      error: (error) => {
        console.log(error);
      },
    });
    this._http.getBrandsDetails(this.brandId).subscribe({
      next: (response) => {
        console.log(response);
        this.brandDetails = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
