import StoreModule from "../module";

class Product extends StoreModule {
  /**
   * Начальное состояние
   */
  initState() {
    return {
      productDetails: {},
    };
  }

  async getProductDetails(id) {
    const response = await fetch(`/api/v1/articles/${id}?fields=*,maidIn(title,code),category(title)`);
    const json = await response.json();
    this.setState({
      productDetails: json.result
    });
  }
}

export default Product;
