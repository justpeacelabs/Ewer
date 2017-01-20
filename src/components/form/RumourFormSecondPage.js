import React from "react";
import {Field,reduxForm} from "redux-form";
import classNames from "classnames";
import RumourDescription from "./RumourDescription";
import RowField from "./RowField";
import SectionHeader from "./sectionHeader";
import {EN as L} from "../../lang";

const locale = L.UI.ADD_RUMOUR;

const RumourFormSecondPage = (
  {handleSubmit, pristine, submitting, previousPage}
) => (
  <form onSubmit={handleSubmit} className="scrollable is-fullheight">
    <SectionHeader title={locale.header.title} previousPage={previousPage} />
    <div
      className="pure-g grid-container"
      style={{height: "calc(100% - 120px)"}}
    >
      <RowField
        text={locale.form.description.title}
        className="is-fullheight"
      >
        <Field
          name="description"
          placeholder={locale.form.description.placeholder}
          charsLeftText={locale.form.description.charsLeftText}
          component={RumourDescription}
        />
      </RowField>
      <div className="pure-u-1 pure-u-md-1-2 footer">
        <button
          className={
            classNames({
              "is-button": true,
              "is-fullwidth": true,
              "is-disabled": pristine || submitting
            })
          }
          disabled={pristine || submitting}
          type="submit"
        >
          Next
        </button>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  validate: values => {
    const errors = {};

    if (!values.description) {
      errors.description = "Required field";
    }

    return errors;
  }
})(RumourFormSecondPage)
