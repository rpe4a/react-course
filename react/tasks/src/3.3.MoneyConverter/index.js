import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './styles.css';

/**
    Допиши конвертер валют.
    - Если пользователь ввел значение в рублях, то количество евро обновляется согласно курсу
    - Если пользователь ввел значение в евро, то количество рублей обновляется согласно курсу
 */

const RUBLES_IN_ONE_EURO = 70;

class MoneyConverter extends React.Component {
  constructor(props) {
    super(props);
	this.state = {rub: 0, eur: 0};
  }

  render() {
    return (
      <div className="root">
        <div className="form">
          <h2>Конвертер валют</h2>
          <div>
            <span>&#8381;</span>
            <Money value={this.state.rub} onChange={this.handleChangeRubValue} />
            &mdash;
            <Money value={this.state.eur} onChange={this.handleChangeEurValue} />
            <span>&euro;</span>
          </div>
        </div>
      </div>
    );
  }
  
  handleChangeRubValue = (event) => {
    const fixedRub = extractNumberString(event.target.value);
    this.setState({rub: fixedRub, eur: fixedRub / RUBLES_IN_ONE_EURO});
  }
  handleChangeEurValue = (event) => {
    const fixedEur = extractNumberString(event.target.value);
    this.setState({rub: fixedEur * RUBLES_IN_ONE_EURO, eur: fixedEur});
  }
}

const Money = props => {
  return (
      <input
        type="text"
        value={Math.round(props.value * 1000) / 1000}
        onChange={props.onChange}
      />
    );
}

Money.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
};

function extractNumberString(value) {
  const str = value.replace(/^0+/g, '').replace(/[^\.0-9]/g, '');
  const parts = str.split('.');
  return parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : str;
}

ReactDom.render(<MoneyConverter />, document.getElementById('app'));

/**
    Подсказки:
    - Сейчас каждый компонент Money хранит свое значение в собственном состоянии,
      чтобы конвертер работал, нужно уметь обновлять значение извне, поэтому нужно получать его из props.
    - В MoneyConverter наоборот надо создать состояние, которое будет хранить значения в обеих валютах.
      Таким образом ты сделаешь Lift State Up.
    - Заметь, что компонент Money теперь не содержит состояние и его можно переделать в функциональный компонент.
 */
