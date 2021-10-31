import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository{
    private dataSource: SimpleDataSource | any;
    private products:Product[] | any;

    constructor(){
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach((p: Product)=> this.products?.push(p));
    }

    getProducts() : Product[] |any{
        return this.products;
    }

    getProductById(id:number):Product{
        return this.products.find((p:Product)=> p.id==id);
    }
}