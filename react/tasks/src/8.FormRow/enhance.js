import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

export default function enhance(WrappedComponent) {
  class Enhanced extends React.Component {
    render() {
      const { forwardedRef, label, ...rest } = this.props;
      return (
        <div className="row">
          <div className="label">{label}</div>
          <WrappedComponent ref={forwardedRef} {...rest} />
        </div>
      );
    }
  }

  Enhanced.propTypes = {
    forwardedRef: PropTypes.object,
    label: PropTypes.string.isRequired
  };

  const wrappedName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';
  Enhanced.displayName = `Enhanced(${wrappedName})`;

  const forward = (props, ref) => <Enhanced {...props} forwardedRef={ref}/>;
  forward.displayName = Enhanced.displayName;
  return React.forwardRef(forward);
}
