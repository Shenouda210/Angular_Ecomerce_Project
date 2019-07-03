import { Category } from './Category';
export class Product {
  constructor(
    public ID: string,
    public ProductName: string,
    public PriceBeforeDiscount: number,
    public PriceAfterDiscount: number,
    public Discount: number,
    public Quantity: number,
    public QuantityInStock: number,
    public Picture: string,
    public ProductDiscription: string,
    public category_ID: number,
    public category: Category,

   ) {}
}

// public virtual ICollection<ApplicationUser> ApplicationUsers { get; set; }
