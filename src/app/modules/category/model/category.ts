import { Product } from "../../common/model/product";

export interface Category{
    id:number,
    name: string,
    description: string,
    url : string,
    product: Array<Product>
}
