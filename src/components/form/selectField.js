import React from 'react';
const classNames = require('classnames');

const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
  <p className="control">
    <label>{label}</label>
    <span className="select is-medium is-fullwidth" style={{height: '60px'}}>
      <select {...input} className={classNames({
        'is-danger': !!(touched && error)
      })}>
        {children}
      </select>
      {touched && error && <span className="help is-danger">{error}</span>}
    </span>
  </p>
);

export default renderSelectField;