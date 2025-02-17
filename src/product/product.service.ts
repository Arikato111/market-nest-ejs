import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  async getAllProduct() {
    const result = (await (
      await fetch('https://n-openshop.vercel.app/api/product')
    ).json()) as Product[];
    if (result) return result;
    return [];
  }
}

interface Product {
  id: string;
  name: string;
  detail: string;
  price: number;
  discount: number;
  cateId: string;
  watch_count: number;
  buy_count: number;
  image: string;
  stock: number;
}
