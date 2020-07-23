import "./styles.css";

import AddIcon from "@skbkontur/react-icons/Add";
import Button from "@skbkontur/react-ui/Button";
import Gapped from "@skbkontur/react-ui/Gapped";
import Group from "@skbkontur/react-ui/Group";
import Input from "@skbkontur/react-ui/Input";
import ProductTag from "../../constants/ProductTag";
import PropTypes from "prop-types";
import PurchaseCounter from "../../components/PurchaseCounter";
import React from "react";
import RemoveIcon from "@skbkontur/react-icons/Remove";
import ShoppingCartSolidIcon from "@skbkontur/react-icons/ShoppingCartSolid";

export default class Product extends React.PureComponent {
  render() {
    const { product, onPay, quantity } = this.props;
    return (
      <div className='product'>
        {this.renderTags(product.tags)}
        <img className='image' src={`/images/${product.image}`} />

        <div className='title'>{product.name}</div>
        <div className='description'>{product.description}</div>
        <div className='buy'>
          <Gapped>
            <div className='price'>{product.price} ₽</div>
            <PurchaseCounter
              value={quantity}
              onDecrease={this.handleDecrease}
              onIncrease={this.handleIncrease}
            />
            <Button use='pay' onClick={onPay}>
              <ShoppingCartSolidIcon />
            </Button>
          </Gapped>
        </div>
      </div>
    );
  }

  renderTags(tags) {
    return (
      <div className='tags'>
        {tags.some((t) => t === ProductTag.new) && (
          <div className='tag red'>new</div>
        )}
        {tags.some((t) => t === ProductTag.hot) && (
          <div className='tag orange'>hot</div>
        )}
        {tags.some((t) => t === ProductTag.veg) && (
          <div className='tag green'>veg</div>
        )}
      </div>
    );
  }

  handleDecrease = () => {
    this.props.onDecrease && this.props.onDecrease(this.props.product.id);
  };

  handleIncrease = () => {
    this.props.onIncrease && this.props.onIncrease(this.props.product.id);
  };
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func,
  onPay: PropTypes.func,
  quantity: PropTypes.number,
};
