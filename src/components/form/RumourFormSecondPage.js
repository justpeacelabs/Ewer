import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import RumourDescription from './RumourDescription';
import RowField from './RowField';
import SectionHeader from "./sectionHeader";

const RumourFormSecondPage = ({ handleSubmit, submitting, previousPage }) => (
  <form
    onSubmit={handleSubmit}
    className="scrollable is-fullheight">
    <SectionHeader previousPage={previousPage} />
    <div className="pure-g grid-container" style={{height: 'calc(100% - 120px)'}}>
      <RowField text="Describe the rumour" className="is-fullheight">
        <Field name="description" component={RumourDescription} />
      </RowField>

      <div className="pure-u-1 pure-u-md-1-2 footer">
        <div className="column">
          <button className={
            classNames({
              "is-button": true,
              "is-fullwidth": true,
              "is-disabled": submitting
            })
          } disabled={submitting} type="submit">Next</button>
        </div>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  validate: values => {
    const errors = {};

    if (!values.description) {
      errors.description = "Required field";
    }

    return errors;
  }
})(RumourFormSecondPage);
