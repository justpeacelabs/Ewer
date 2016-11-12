import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';
import { REGIONS, TOWNSHIPS } from './regions';
import classNames from 'classnames';
import RumourDescription from './RumourDescription';

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
  <form onSubmit={handleSubmit} className="flexContainer">
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
    <Field name="description" component={RumourDescription} label="Describe the rumour" />
    <div className="columns is-mobile">
      <div className="column is-narrow">
        <a className={classNames({
          button: true,
          'is-medium': true,
          'is-fullwidth': true,
        })}
      onClick={previousPage}>
        <span className="icon">
          <i className="fa fa-arrow-left"></i>
        </span>
        <span>Back</span>
      </a>
    </div>
    <div className="column">
      <button className={classNames({
        button: true,
        'is-medium': true,
        'is-primary': true,
        'is-fullwidth': true,
      })} type="submit">Next</button>
  </div>
    </div>

  </form>
);

export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  // validate
})(RumourFormSecondPage);
