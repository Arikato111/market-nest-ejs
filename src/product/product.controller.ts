import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';

interface Product {
  id: number;
  name: string;
  detail: string;
  image: string;
  price: number;
}

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  private products: Product[] = [
    {
      id: 1,
      name: 'Iphone',
      detail: 'Phone detail',
      image:
        'https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_TH_1.jpg?v=1725929129&width=823',
      price: 200000,
    },
    {
      id: 2,
      name: 'Nokia',
      detail: 'just the phone',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLW7OKPgKnThNztSZ8lAIiya8p-R3ToTvRcA&s',
      price: 5000,
    },
  ];

  @Get()
  async productList(@Res() res: Response) {
    const products = await this.productService.getAllProduct();
    res.render('pages/product/index', {
      products,
      title: 'products',
    });
  }

  @Get(':id')
  productId(@Res() res: Response, @Param('id') id: string) {
    const productId = parseInt(id);
    const product = this.products.filter((p) => p.id === productId);
    if (product.length === 0) {
      return res.render('pages/product/id', { title: id, product: null });
    }
    return res.render('pages/product/id', {
      title: product[0].name,
      product: product[0],
    });
  }
}
