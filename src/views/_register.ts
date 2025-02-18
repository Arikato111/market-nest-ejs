// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
const ejs = require('ejs');
import index from './pages/index';
import Layout from './_layout';
import ProductHome from './pages/product';
import ProductId from './pages/product/id';

export default class Pages {
  public static async render(
    template: string,
    data: ejs.Data = [],
    options: ejs.Options = {},
    header: string[] = [],
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return await ejs.render(Layout(template, header), data, options);
  }
  public static index() {
    return index;
  }
  public static product() {
    return ProductHome;
  }
  public static productId() {
    return ProductId;
  }
}
