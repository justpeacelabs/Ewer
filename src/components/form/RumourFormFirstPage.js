import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { WithContext as ReactTags } from "react-tag-input";
const classNames = require("classnames");

import { REGIONS, TOWNSHIPS } from "./regions";
import RumourDatePicker from "./DatePicker";
import RumourTags from "./Tags";
import RowField from "./RowField";
import validate from "./validate";
import renderSelectField from "./selectField";
import SectionHeader from "./sectionHeader";

const regionOptions = REGIONS.map(r => <option key={r}>{r}</option>);
const placesOptions = [
  "Teashop",
  "Facebook",
  "Community Leader",
  "Radio",
  "Newspaper",
  "School",
  "Religious Leader",
  "Other"
]
  .sort()
  .map(p => <option key={p}>{p}</option>);

let RumourFormFirstPage = (
  { selectedRegion, handleSubmit, pristine, reset, submitting }
) =>
  <form onSubmit={
    handleSubmit
  } className="scrollable is-fullheight">
    <SectionHeader />
    <div className="pure-g grid-container">
      <div className="pure-u-1 fullw-input-container row" style={{ padding: 0 }}>
        <Field name="rumourName" component="input" type="text" placeholder="Enter a name for this rumor" className="fullw-input" />
      </div>

      <RowField text="State/Region">
        <Field name="region" component={renderSelectField}>
          <option key="no-region" selected></option>
          {regionOptions}
        </Field>
      </RowField>
      {selectedRegion && TOWNSHIPS[selectedRegion] && <RowField text="Township">
        <Field name="township" component={renderSelectField}>
          <option key="no-township" selected></option>
          {TOWNSHIPS[selectedRegion].map(t => <option key={t}>{t}</option>)}
        </Field>
      </RowField>}
      <RowField text="Date of the incident">
        <Field name="rumourDate" component={RumourDatePicker} />
      </RowField>
      <RowField text="Tags">
        <Field name="rumourTags" defaultValue={[]} component={RumourTags} />
      </RowField>
      <RowField text="Where did you hear it?">
        <Field name="place-heard" className="expander" component={
          renderSelectField
        }>
          {placesOptions}
        </Field>
      </RowField>
    </div>
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
  </form>;

RumourFormFirstPage = reduxForm({
  form: "wizard",
  // validate
  destroyOnUnmount: false
})(RumourFormFirstPage);

const selector = formValueSelector("wizard");

RumourFormFirstPage = connect(
  state => ({ selectedRegion: selector(state, "region") })
)(RumourFormFirstPage);

export default RumourFormFirstPage