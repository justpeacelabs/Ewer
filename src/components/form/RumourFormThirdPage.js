import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { WithContext as ReactTags } from "react-tag-input";
import { REGIONS, TOWNSHIPS } from "./regions";
import SectionHeader from "./sectionHeader";
import RowField from "./RowField";
import classnames from "classnames";

let RumourFormThirdPage = props => {
  const {
    selectedRegion,
    selectedTownship,
    selectedDate,
    selectedTags,
    description,
    handleSubmit,
    submitting,
    previousPage
  } = props;

  const tags = selectedTags ? selectedTags.map(t => t.text) : [];
  console.log(tags)
  return (
    <form onSubmit={handleSubmit} className="scrollable is-fullheight">
      <SectionHeader previousPage={previousPage} />
      <div
        className="pure-g grid-container"
        style={{ height: "calc(100% - 95px)" }}
        >
        <RowField text="Review your report" className="is-fullheight">
          <div class="review scrollable is-fullheight">
            <p>
              Please review your report and make sure it is correct before you send it
            </p>
            <hr />
            <h4> Region</h4>
            <div>{selectedRegion}</div>
            {selectedTownship && (
              <div>
                <h4>TownShip</h4>
                <div>{selectedTownship}</div>
              </div>
            )}
            <h4> Date</h4>
            <div>{selectedDate}</div>
            {tags.length ? (
              <div>
                <h4> Tags</h4>
                <ul>
                  <div>{tags.map(t => <li>{t}</li>)}</div>
                </ul>
              </div>
            ) : ''}
            <h4> Description</h4>
            <div>{description}</div>
          </div>
        </RowField>
        <div className="pure-u-1 pure-u-md-1-2 footer">
          <div className="column">
            <button
              className={
                classnames({
                  "is-button": true,
                  "is-fullwidth": true,
                  "is-disabled": submitting
                })
              }
              disabled={submitting}
              type="submit"
              >
              Report
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const selector = formValueSelector("wizard");

RumourFormThirdPage = reduxForm({
  form: "wizard",
  // validate
  destroyOnUnmount: false
})(RumourFormThirdPage);

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
