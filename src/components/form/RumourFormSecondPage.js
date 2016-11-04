import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';
import { REGIONS, TOWNSHIPS } from './regions';

const RumourFormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <section className="section">
      <h1 className="title is-centered">Add a rumour</h1>
      <form onSubmit={handleSubmit}>>
          <p className="control is-fullwidth">
          <label htmlFor="rumour-ta">What's the rumour?</label>
          <textarea
            name="rumour-ta"
            placeholder="Try to be as clear as possible"
            className="textarea"></textarea>
        </p>
        <button className="button is-medium is-fullwidth is-primary" type="submit">Report</button>
      </form>
    </section>
  );
};

export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  // validate
})(RumourFormSecondPage);
