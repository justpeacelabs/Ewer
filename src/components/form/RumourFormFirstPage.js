import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';
const classNames = require('classnames');

import { REGIONS, TOWNSHIPS } from './regions';
import RumourDatePicker from './DatePicker';
import RumourTags from './Tags';
import RowField from './RowField';
import validate from './validate';
import renderSelectField from './selectField';

const regionOptions = REGIONS.map(region => <option key={region}>{region}</option>);
const PLACES = [
  'Teashop',
  'Facebook',
  'Community Leader',
  'Radio',
  'Newspaper',
  'School',
  'Religious Leader',
  'Other'
].sort();
const placesOptions = PLACES.map(place => <option key={place}>{place}</option>);

let RumourFormFirstPage = (props) => {
  const { selectedRegion, handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit} className="pure-form pure-form-stacked is-fullheight">
      <div className="pure-g grid-container">

        <h3 className="pure-u-1 pure-u-md-1-2">Report a rumour</h3>
        <RowField text="State/Region">
          <Field name="region" component={renderSelectField}>
            <option key="no-region" selected></option>
            {regionOptions}
          </Field>
        </RowField>
        {
          selectedRegion && TOWNSHIPS[selectedRegion] &&
          <RowField text="Township">
            <Field name="township" component={renderSelectField} label="">
              <option key="no-township" selected></option>
              {
                TOWNSHIPS[selectedRegion]
                  .map(township => <option key={township}>{township}</option>)
              }
            </Field>
          </RowField>
        }

        <RowField text="Date of the incident">
          <Field name="rumourDate" component={RumourDatePicker} />
        </RowField>

        <RowField text="Tags">
          <Field name="rumourTags" defaultValue={[]} component={RumourTags} />
        </RowField>

        <RowField text="Where did you hear the rumour?">
          <Field
            name="place-heard"
            className="expander"
            component={renderSelectField}>
            {placesOptions}
          </Field>
        </RowField>

        <div className="pure-u-1 pure-u-md-1-2 row color1">
          <div className="column">
            <button className={classNames({
              'is-button': true,
              'is-fullwidth': true,
              'is-disabled': submitting
            })} disabled={submitting} type="submit">Next</button>
          </div>
        </div>
      </div>

    </form>
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
