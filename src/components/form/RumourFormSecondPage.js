import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import RumourDescription from './RumourDescription';
import RowField from './RowField';

const RumourFormSecondPage = ({ handleSubmit, submitting, previousPage }) => (
  <form
    onSubmit={handleSubmit}
    className="pure-form pure-form-stacked is-fullheight">
    <div className="pure-g grid-container">
      <RowField text="Describe the rumour" className="expander">
        <Field name="description" component={RumourDescription} />
      </RowField>
      <div className="pure-g pure-u-1 row color1 ">
        <div className="pure-u-1-3 pure-u-md-1-2" style="padding-right:5px;">
          <button
            className="is-button is-fullwidth"
            onClick={previousPage}>
            <span className="icon">
              <i className="fa fa-arrow-left"></i>
            </span>
            <span>&nbsp;Back</span>
          </button>
        </div>
        <div className="pure-u-2-3 pure-u-md-1-2" style="padding-left:5px;">
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

export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  // validate
})(RumourFormSecondPage);
