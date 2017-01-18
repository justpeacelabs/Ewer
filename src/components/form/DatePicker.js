import React from 'react';
const DatePicker = require('react-datepicker');
const moment = require('moment');
const classNames = require('classnames');

require('react-datepicker/dist/react-datepicker.css');

const RumourDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div className="is-fullwidth select-wrapper">
    <DatePicker {...input}
      className={classNames({
        input: true,
        'is-medium': true,
        'is-fullwidth': true,
        'is-danger-field': !!(touched && error)
      })}
      dateForm="MM/DD/YYYY"
      selected={input.value ? moment(input.value) : null} />
    {touched && error && <div className="help is-danger">{error}</div>}
  </div>
);

export default RumourDatePicker;