import "./styles.css";
import "./toggle.css";

import PropTypes from "prop-types";
import React from "react";
import ReactDom from "react-dom";

/**
    Допиши компонент Toggle.
    Пусть флаг хранится во внутреннем состоянии,
    а при изменении передается наружу через onChange.
 */

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  render() {
    return (
      <span
        className={"container" + (this.state.checked ? " isChecked" : "")}
        onClick={this.handleClick}>
        <span className='handle'>
          <div className='bg' />
          <span className='hinge' />
        </span>
      </span>
    );
  }

  handleClick = () => {
    const newState = !this.state.checked;
    this.setState({ checked: newState });
    this.props.onChange(newState);
  };
}

Toggle.propTypes = {
  onChange: PropTypes.func,
};

ReactDom.render(
  <div className='page'>
    <Toggle onChange={(value) => console.log(value)} /> Использовать умные
    компоненты
  </div>,
  document.getElementById("app")
);

/**
    Подсказки:
    - Начальное состояние компонента хранится в this.state и обычно инициируется в конструкторе.
    - Не забудь добавить super(props) первой строчкой конструктора, чтобы вызвать конструктор базового типа.
    - this.setState({property: value}) обновляет часть состояния и инициирует перерисовку.
 */
