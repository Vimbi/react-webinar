import StoreModule from "../module";

class CatalogStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      btns: [1, 2, 3, 4, 5],
      skip: 0,
      limit: 10,
      totalItems: 129,
      items: [],
      pagesCount: 0,
      activeBtnId: 1,
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load(){
    const response = await fetch(`/api/v1/articles?skip=${this.getState().skip}&limit=${this.getState().limit}&fields=items(*),count`);
    const json = await response.json();
    const totalItems = json.result.count;
    const count = Math.ceil(totalItems / this.getState().limit);
    this.setState({
      skip: this.getState().skip,
      items: json.result.items,
      pagesCount: count,
      btns: this.getState().btns,
      limit: this.getState().limit,
      activeBtnId: this.getState().activeBtnId
    });
  }

  changeSkip(pageNumber, index) {
    const newSkip = (pageNumber - 1) * 10;

    const newBtns = this.getState().btns.map(btn => {
      if (pageNumber === 1) return btn;
      if (pageNumber === 2 && index === 1) return btn;
      if (pageNumber === 2 && index === 0) return btn -= 1;
      if (pageNumber === this.getState().pagesCount) return btn;
      if (pageNumber === this.getState().pagesCount - 1 && index === 3) return btn;
      if (pageNumber === this.getState().pagesCount - 1 && index === 4) return btn += 1;
      if (index === 2) return btn;
      if (index === 0) return btn -= 2;
      if (index === 1) return btn -= 1;
      if (index === 4) return btn += 2;
      if (index === 3) return btn += 1;
    });

    this.setState({
      skip: newSkip,
      btns: newBtns,
      pagesCount: this.getState().pagesCount,
      limit: this.getState().limit,
      items: this.getState().items,
      activeBtnId: pageNumber
    });
  }
}

export default CatalogStore;
