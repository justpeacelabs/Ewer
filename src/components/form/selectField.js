import React from 'react';
const classNames = require('classnames');

const renderSelectField = ({ input, className, type, meta: { touched, error }, children }) => (
  <div className="select-wrapper">
    <select {...input}
      className={classNames({
        'is-danger': !!(touched && error),
        'is-fullwidth': true,
        'is-select': true
      })}>
      {children}
    </select>
    {touched && error && <span className="help is-danger">{error}</span>}
  </div>
);

export default renderSelectField;
