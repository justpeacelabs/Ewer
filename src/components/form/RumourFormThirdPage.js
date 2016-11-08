import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';
import { REGIONS, TOWNSHIPS } from './regions';

const RumourFormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
    <h3>You are about to report the following rumour:</h3>
      <p className="control is-fullwidth">
        <label htmlFor="description">Describe the rumour</label>
        <textarea
          name="description"
          placeholder="Try to be as clear as possible"
          className="textarea"></textarea>
      </p>
      <button className="button is-medium is-fullwidth is-primary" type="submit">Report</button>
    </form>
  );
};

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  // validate
})(RumourFormSecondPage);
