import { Product } from './Products';
export class Category {
  constructor(
    public ID: number,
    public CategoryName: string,
    public Description: string,
    public Picture: string,
    public ProductList: Product[],
    ) {}
}
