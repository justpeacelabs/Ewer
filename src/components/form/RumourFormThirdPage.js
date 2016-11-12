import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';
import { REGIONS, TOWNSHIPS } from './regions';

let RumourFormThirdPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>

      <button className="button is-medium is-fullwidth is-primary" type="submit">Report</button>
    </form>
  );
};

const selector = formValueSelector('wizard');

RumourFormThirdPage = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  // validate
})(RumourFormThirdPage);

RumourFormThirdPage = connect(
  state => ({
    selectedRegion: selector(state, 'region'),
    selectedTownship: selector(state, 'township'),
    selectedDate: selector(state, 'rumourDate'),
    selectedTags: selector(state, 'tags')
  })
)(RumourFormThirdPage);

export default RumourFormThirdPage;
