import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { WithContext as ReactTags } from "react-tag-input";
import { REGIONS, TOWNSHIPS } from "./regions";
import SectionHeader from "./sectionHeader";
import RowField from "./RowField";
import classnames from "classnames";
import { submitFormValues } from "../firebase";
import { EN as L } from "../../lang";

const locale = L.UI.ADD_RUMOUR;

let RumourFormThirdPage = props => {
  const {
    selectedRegion,
    selectedTownship,
    selectedDate,
    selectedTags,
    description,
    handleSubmit,
    pristine,
    submitting,
    previousPage
  } = props;

  const tags = selectedTags ? selectedTags.map(t => t.text) : [];
  return (
    <form
      onSubmit={handleSubmit(submitFormValues)}
      className="scrollable is-fullheight">
      <SectionHeader title={locale.header.title} previousPage={previousPage} />
      <div
        className="pure-g grid-container"
        style={{ height: "calc(100% - 95px)" }}>
        <RowField text={locale.form.review.title} className="is-fullheight">
          <div class="review scrollable is-fullheight">
            <p>
              {locale.form.review.text}
            </p>
            <hr />
            <h4>{locale.form.region.title}</h4>
            <div>{selectedRegion}</div>
            {selectedTownship && (
              <div>
                <h4>{locale.form.township.title}</h4>
                <div>{selectedTownship}</div>
              </div>
            )}
            <h4>{locale.form.date.title}</h4>
            <div>{selectedDate}</div>
            {tags.length ? (
              <div>
                <h4>{locale.form.tags.title}</h4>
                <ul>
                  <div>{tags.map(t => <li>{t}</li>)}</div>
                </ul>
              </div>
            ) : ""}
            <h4>{locale.form.description.title}</h4>
            <div>{description}</div>
          </div>
        </RowField>
        <div className="pure-u-1 pure-u-md-1-2 footer">
          <button
            className={
              classnames({
                "is-button": true,
                "is-fullwidth": true,
                "is-disabled": pristine || submitting
              })
            }
            disabled={pristine || submitting}
            type="submit"
            >
            {submitting ? (
              <div>
                <i class="fa fa-circle-o-notch fa-spin fa-fw"></i>
                <span class="sr-only">Submitting...</span>
              </div>
            ) : locale.submitBtn.title}
          </button>
        </div>
      </div>
    </form>
  );
};

const selector = formValueSelector("wizard");

RumourFormThirdPage = reduxForm({
  form: "wizard",
  destroyOnUnmount: false
})(RumourFormThirdPage);

const mapDispatchToProps = (dispatch) => {
  return {
    gotoPage: (page) => {
      dispatch(gotoPage(page));
    }
  };
};

RumourFormThirdPage = connect(
  state =>
    ({
      selectedRegion: selector(state, "region"),
      selectedTownship: selector(state, "township"),
      selectedDate: selector(state, "rumourDate"),
      selectedTags: selector(state, "rumourTags"),
      description: selector(state, "description")
    })
)(RumourFormThirdPage);

export default RumourFormThirdPage;
