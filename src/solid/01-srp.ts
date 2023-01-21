(() => {
  interface Product {
    id: number;
    name: string;
  }

  class CartBloc {
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  class Mailer {
    private mainEmail = "product@gmail.com";

    sendEmails(emails: [], sender: string = this.mainEmail) {
      console.log("Enviando correo a los clientes");
    }
  }

  class ProductService {
    getProduct(id: number) {
      return {};
    }

    createProduct(product: Product): boolean {
      if (!product) return false;
      return true;
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;
    public product: Product;

    constructor(
      product: Product,
      productService: ProductService,
      mailer: Mailer
    ) {
      this.product = product;
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.createProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmails([]);
    }
  }

  const product: Product = {
    id: 1,
    name: "leche",
  };

  const mailer = new Mailer();
  const productService = new ProductService();
  const productBloc = new ProductBloc(product, productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
