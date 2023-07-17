import { Product } from "../../common/model/product";

export interface Category{
    name: string,
    description: string,
    url : string,
    product: Array<Product>
}
