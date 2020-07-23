import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Select from '@skbkontur/react-ui/Select';
import Gapped from '@skbkontur/react-ui/Gapped';
import './style.css';

class MySelect extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
        return (<div className="tr">
            <label className="cell">{this.props.label}</label>
            <Select  className="cell" placeholder={this.props.placeholder} items={this.props.items} onChange={(_, value) => {this.props.onChange(value)}}/>
        </div>);
    }
}

MySelect.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MySelect;