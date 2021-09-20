import Product from '../models/Product';

export default class ProductRepository {
  private products: Array<Product>;

  constructor() {
    this.products = [];
  }

  public findAll(): Array<Product> {
    return this.products;
  }

  public findByCode(code: number): Product | undefined {
    return this.products.find(p => p.code === code);
  }

  //Alteração :: Removido objeto instanciado em variável, o mesmo agora
  //é instanciando diretamento dentro do push do array.
  public save({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {
    this.products.push(new Product({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
    }));
    return this.products[this.products.length - 1];
  }
}
