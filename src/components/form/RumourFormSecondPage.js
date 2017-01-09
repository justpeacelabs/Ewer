import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';
import { REGIONS, TOWNSHIPS } from './regions';
import classNames from 'classnames';
import RumourDescription from './RumourDescription';



const RumourFormSecondPage = ({ handleSubmit, previousPage }) => (
  <form
    onSubmit={handleSubmit}
    className="pure-form pure-form-stacked">
    <div className="pure-g">

      <Field name="description" component={RumourDescription} label="Describe the rumour" />
      <div className="pure-g pure-u-1">
        <div className="pure-u-1-3 pure-u-md-1-2 row l-box">
          <a
            className="pure-button is-fullwidth"
            onClick={previousPage}>
            <span className="icon">
              <i className="fa fa-arrow-left"></i>
            </span>
            <span>&nbsp;Back</span>
          </a>
        </div>
        <div className="pure-u-2-3 pure-u-md-1-2 row l-box">
          <button
            className="pure-button is-fullwidth"
            type="submit">Next</button>
        </div>
      </div>
    </div>

  </form>
);

export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  // validate
})(RumourFormSecondPage);
