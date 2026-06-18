export interface ProductTypes {
    id: number,
    title: string,
    author: string,
    price: number,
    oldPrice: number | null,
    rating: number | null,
    tag: string | null,
    color: string,
    count?: number
}