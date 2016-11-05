import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';

import { REGIONS, TOWNSHIPS } from './regions';
import RumourDatePicker from './DatePicker';
import RumourTags from './Tags';

let RumourFormFirstPage = (props) => {
  const { selectedRegion, handleSubmit } = props;

  let townships = selectedRegion ? (
    <p className="control">
      <label htmlFor="township">Township</label>
      <span className="select is-medium is-fullwidth">
        <select id="township">
          {
            TOWNSHIPS[selectedRegion] &&
            TOWNSHIPS[selectedRegion]
              .map(township => <option key={township}>{township}</option>)
          }
        </select>
      </span>
    </p>) : '';

  return (
    <section className="section">
      <h1 className="title is-centered">Add a rumour</h1>
      <form onSubmit={handleSubmit}>
        <p className="control">
          <label htmlFor="region">State/Region</label>
          <span className="select is-medium is-fullwidth">
            <Field name="region" component="select">
              <option key="no-region"></option>
              {
                REGIONS.map(region => <option key={region}>{region}</option>)
              }
            </Field>
          </span>
        </p>
        {townships}
        <div className="control">
          <label htmlFor="rumourDate">Date of the incident</label>
          <Field name="rumourDate" component={RumourDatePicker} />
        </div>
        <div className="control is-fullwidth">
          <label htmlFor="tags">Tags</label>
          <Field name="rumourTags" defaultValue={[]} component={RumourTags} />
        </div>
        <button className="button is-medium is-fullwidth is-primary" type="submit">Next</button>
      </form>
    </section>
  );
};

RumourFormFirstPage = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  // validate
})(RumourFormFirstPage);

const selector = formValueSelector('wizard');

RumourFormFirstPage = connect(
  state => ({
    selectedRegion: selector(state, 'region')
  })
)(RumourFormFirstPage);

export default RumourFormFirstPage;