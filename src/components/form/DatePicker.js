import React from 'react';
const DatePicker = require('react-datepicker');
const moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

// class RumourDate extends React.Component {
//   displayName: 'Date of incident'

//   constructor() {
//     super();
//     this.state = {
//       startDate: moment()
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(date) {
//     this.setState({
//       startDate: date
//     });
//   }

//   render() {
//     return <DatePicker
//       selected={this.state.startDate}
//       onChange={this.handleChange} />;
//   }
// }

const RumourDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div className="is-fullwidth">
    <DatePicker {...input}
      className="input is-medium is-fullwidth input-borderless"
      dateForm="MM/DD/YYYY"
      selected={input.value ? moment(input.value) : null} />
    {touched && error && <span>{error}</span>}
  </div>
);

export default RumourDatePicker;