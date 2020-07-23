import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Input from '@skbkontur/react-ui/Input';
import Gapped from '@skbkontur/react-ui/Gapped';
import './style.css';

class MyInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
        return (<div className="tr">
            <label className="cell">{this.props.label}</label>
            <Input className="cell" onChange={this.props.onChange}/>
        </div>);
    }
}

MyInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MyInput;