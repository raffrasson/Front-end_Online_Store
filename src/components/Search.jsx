import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import AddCartButton from './AddCartButton';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      category: '',
      products: [],
      isLoading: true,
      isLoadingProducts: false,
      inputSearch: '',
    };
  }

  componentDidMount() {
    this.pegarCategorias();
  }

  pegarCategorias = async () => {
    const categories = await getCategories();
    this.setState({ categories, isLoading: false });
  }

  getProduct = async () => {
    this.setState({ isLoadingProducts: true });
    const { inputSearch, category } = this.state;
    const products = await getProductsFromCategoryAndQuery(category, inputSearch);
    this.setState({ products: products.results, isLoadingProducts: false });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = async (event) => {
    this.setState({ [event.target.name]: event.target.id });
    await event.preventDefault();
    this.getProduct();
  }

  renderCategories() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((cat) => (
          <input
            key={ cat.id }
            id={ cat.id }
            data-testid="category"
            name="category"
            onClick={ this.handleClick }
            value={ cat.name }
            type="button"
          />
        ))}
      </div>
    );
  }

  renderProducts = () => {
    const { products } = this.state;
    return (
      <div>
        {products.map((product) => {
          const { id, title: name, thumbnail, price, category_id: cat } = product;
          return (
            <div key={ id }>
              <Link
                to={ `/product/${cat}/${name.replace('%', '').replace('/', '')}/${id}` }
                data-testid="product-detail-link"
              >
                <div data-testid="product">
                  <img src={ thumbnail } alt="imagem do produto" />
                  <p>{name}</p>
                  <p>{`R$:${price}`}</p>
                </div>
              </Link>
              <AddCartButton product={ product } dataTestId="product-add-to-cart" />
            </div>
          );
        })}
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
            name="inputSearch"
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
