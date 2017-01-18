import React from 'react';
const classNames = require('classnames');

const renderSelectField = ({ input, className, type, meta: { touched, error }, children }) => (
  <div className="select-wrapper">
    <select {...input}
      className={classNames({
        'is-danger-field': !!(touched && error),
        'is-fullwidth': true,
        'is-select': true
      })}>
      {children}
    </select>
    {touched && error && <div className="help is-danger">{error}</div>}
  </div>
);

export default renderSelectField;
