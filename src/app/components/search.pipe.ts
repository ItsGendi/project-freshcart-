import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interfaces/products';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: Products[], searchword: string): Products[] {
    return products.filter((product) => {
      return (
        product.category.name.includes(searchword) ||
        product.title.includes(searchword)
      );
    });
  }
}
