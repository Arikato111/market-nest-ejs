import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import Pages from '../views/_register';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async productList() {
    const products = await this.productService.getAllProduct();
    return Pages.render(Pages.product(), { products, title: 'Products' });
  }

  @Get(':id')
  async productId(@Param('id') id: string) {
    const products = await this.productService.getAllProduct();
    const product = products.filter((p) => p.id === id);
    if (product.length === 0) {
      return Pages.render(Pages.productId(), { title: id, product: null });
    }
    return Pages.render(Pages.productId(), {
      title: product[0].name,
      product: product[0],
    });
  }
}
