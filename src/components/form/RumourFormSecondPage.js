import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';
import { REGIONS, TOWNSHIPS } from './regions';

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

const RumourFormSecondPage = ({ handleSubmit, previousPage }) => (
  <form onSubmit={handleSubmit}>
    <p className="control">
      <label htmlFor="region">Where did you hear the rumour?</label>
      <span className="select is-medium is-fullwidth">
        <Field name="place-heard" component="select">
          {
            PLACES.map(place => <option key={place}>{place}</option>)
          }
        </Field>
      </span>
    </p>
    <p className="control is-fullwidth">
      <label htmlFor="description">Describe the rumour</label>
      <textarea
        name="description"
        placeholder="Try to be as clear as possible"
        className="textarea"></textarea>
    </p>
    <button className="button is-medium is-fullwidth is-primary" type="submit">Next</button>
  </form>
);

export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  // validate
})(RumourFormSecondPage);
