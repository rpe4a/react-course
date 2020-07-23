import "./styles.css";

import Checkbox from "@skbkontur/react-ui/Checkbox";
import Gapped from "@skbkontur/react-ui/Gapped";
import ProductTag from "../../constants/ProductTag";
import PropTypes from "prop-types";
import React from "react";

export default class MenuFilter extends React.Component {
  render() {
    return (
      <div className='menuFilterWrapper'>
        <div className='menuFilter'>
          <Gapped>
            Показать только
            <Checkbox
              checked={this.getIsOn(ProductTag.new)}
              onChange={() => this.handleChange(ProductTag.new)}>
              новое
            </Checkbox>
            <Checkbox
              checked={this.getIsOn(ProductTag.hot)}
              onChange={() => this.handleChange(ProductTag.hot)}>
              горячее
            </Checkbox>
            <Checkbox
              checked={this.getIsOn(ProductTag.veg)}
              onChange={() => this.handleChange(ProductTag.veg)}>
              вегетарианское
            </Checkbox>
          </Gapped>
        </div>
      </div>
    );
  }

  getIsOn = (productTag) => {
    return (
      this.props.chosenTags &&
      this.props.chosenTags.some((tag) => tag === productTag)
    );
  };

  handleChange = (productTag) => {
    this.props.onChange && this.props.onChange(productTag);
  };
}

MenuFilter.propTypes = {
  chosenTags: PropTypes.array,
  onChange: PropTypes.func,
};
