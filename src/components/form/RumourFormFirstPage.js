import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { WithContext as ReactTags } from "react-tag-input";
const classNames = require("classnames");
import { EN as L } from '../../lang';

import RumourDatePicker from "./DatePicker";
import RumourTags from "./Tags";
import RowField from "./RowField";
import validate from "./validate";
import renderSelectField from "./selectField";
import SectionHeader from "./sectionHeader";

const regionOptions = L.REGIONS.map(r => <option key={r}>{r}</option>);
const placesOptions = L.PLACES.sort()
  .map(p => <option key={p}>{p}</option>);

const locale = L.UI.ADD_RUMOUR;

let RumourFormFirstPage = (
  {selectedRegion, handleSubmit, pristine, reset, submitting}
) => (
    <form onSubmit={handleSubmit} className="scrollable is-fullheight">
      <SectionHeader title={locale.header.title} previousPage={() => { } } />
      <div className="pure-g grid-container">
        <div className="pure-u-1 fullw-input-container row" style={{ padding: 0 }}>
          <Field
            name="rumourName"
            component="input"
            type="text"
            placeholder={locale.form.name.placeholder}
            className="fullw-input"
            />
        </div>
        <RowField text={locale.form.region.title}>
          <Field name="region" component={renderSelectField}>
            <option key="no-region" selected></option>
            {regionOptions}
          </Field>
        </RowField>
        {selectedRegion && L.TOWNSHIPS[selectedRegion] && (
          <RowField text={locale.form.township.title}>
            <Field name="township" component={renderSelectField}>
              <option key="no-township" selected></option>
              {
                L.TOWNSHIPS[selectedRegion].map(
                  t => <option key={t}>{t}</option>
                )
              }
            </Field>
          </RowField>
        )}
        <RowField text={locale.form.date.title}>
          <Field name="rumourDate" component={RumourDatePicker} />
        </RowField>
        <RowField text={locale.form.tags.title}>
          <Field name="rumourTags" placeholder={locale.form.tags.placeholder} defaultValue={[]} component={RumourTags} />
        </RowField>
        <RowField text={locale.form.place.title}>
          <Field
            name="placeHeard"
            className="expander"
            component={renderSelectField}
            >
            <option key="no-region" selected></option>
            {placesOptions}
          </Field>
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
            {locale.nextBtn.title}
          </button>
        </div>
      </div>
    </form>
  );

RumourFormFirstPage = reduxForm({
  form: "wizard",
  validate,
  destroyOnUnmount: false
})(RumourFormFirstPage);

const selector = formValueSelector("wizard");

RumourFormFirstPage = connect(
  state => ({ selectedRegion: selector(state, "region") })
)(RumourFormFirstPage);

export default RumourFormFirstPage;
