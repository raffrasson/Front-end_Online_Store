import React from 'react';
import CartButton from './CartButton';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      isLoading: true,
      isLoadingProducts: false,
      inputSearch: '',
      clickedCat: '',
    };
    this.renderProducts = this.renderProducts.bind(this);
    this.filtrarPorCategoria = this.filtrarPorCategoria.bind(this);
  }

  componentDidMount() {
    this.pegarCategorias();
  }

  pegarCategorias = async () => {
    const categories = await getCategories();
    this.setState({ categories, isLoading: false });
  }

  getProduct = async () => {
    await this.setState({ isLoadingProducts: true });
    const { inputSearch } = this.state;
    const products = await getProductsFromCategoryAndQuery('', inputSearch);
    await this.setState({ products: products.results, isLoadingProducts: false });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ inputSearch: event.target.value });
  }

  async filtrarPorCategoria(event) {
    const { inputSearch, clickedCat } = this.state;
    this.setState({
      clickedCat: event.target.key,
    });
    const product = await getProductsFromCategoryAndQuery(clickedCat, inputSearch);
    await this.setState({
      products: product.results,
    });
  }

  renderCategories() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((cat) => (
          <input
            key={ cat.id }
            type="button"
            value={ cat.name }
            data-testid="category"
            onClick={ this.filtrarPorCategoria }
          />
        ))}
      </div>
    );
  }

  renderProducts = () => {
    const { products } = this.state;
    return (
      <div>
        { products.map(({ id, title, thumbnail, price }) => (
          <div key={ id } data-testid="product">
            <img src={ thumbnail } alt="imagem do produto" />
            <p>{ title }</p>
            <p>{`R$:${price}`}</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { isLoading, inputSearch, isLoadingProducts } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <form>
          <input
            type="text"
            placeholder="Pesquisa Aqui"
            name="barraDePesquisa"
            value={ inputSearch }
            onChange={ this.handleChange }
            data-testid="query-input"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.getProduct }
          >
            Pesquisar
          </button>
        </form>
        <CartButton />
        {isLoading ? null : this.renderCategories()}
        {isLoadingProducts ? null : this.renderProducts()}
      </div>
    );
  }
}

export default Search;
