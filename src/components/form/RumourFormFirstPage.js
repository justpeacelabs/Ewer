import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';
const classNames = require('classnames');

import { REGIONS, TOWNSHIPS } from './regions';
import RumourDatePicker from './DatePicker';
import RumourTags from './Tags';
import validate from './validate';
import renderSelectField from './selectField';

let RumourFormFirstPage = (props) => {
  const { selectedRegion, handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field name="region" component={renderSelectField} label="State/Region">
        <option key="no-region"></option>
        {
          REGIONS.map(region => <option key={region}>{region}</option>)
        }
      </Field>
      {
        selectedRegion && TOWNSHIPS[selectedRegion] &&
        <Field name="township" component={renderSelectField} label="Township">
          {
            TOWNSHIPS[selectedRegion]
              .map(township => <option key={township}>{township}</option>)
          }
        </Field>
      }
      <div className="control">
        <label htmlFor="rumourDate">Date of the incident</label>
        <Field name="rumourDate" component={RumourDatePicker} />
      </div>
      <div className="control is-fullwidth">
        <label htmlFor="tags">Tags</label>
        <Field name="rumourTags" defaultValue={[]} component={RumourTags} />
      </div>
      <button className={classNames({
        button: true,
        'is-medium': true,
        'is-fullwidth': true,
        'is-primary': true,
        'is-disabled': submitting
      })} disabled={submitting} type="submit">Next</button>
    </form>
  );
};

RumourFormFirstPage = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  validate
})(RumourFormFirstPage);

const selector = formValueSelector('wizard');

RumourFormFirstPage = connect(
  state => ({
    selectedRegion: selector(state, 'region')
  })
)(RumourFormFirstPage);

export default RumourFormFirstPage;