import { Review } from "./review"

export interface ProductDetails{
    id:number
    name: string,
    description: string,
    
    category: string,
    price: number,
    currency: string,
    image: string,
    reviews: Array<Review>
}
