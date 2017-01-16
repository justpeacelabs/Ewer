import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { WithContext as ReactTags } from "react-tag-input";
import { REGIONS, TOWNSHIPS } from "./regions";

let RumourFormThirdPage = props => {
  const {
    selectedRegion,
    selectedTownship,
    selectedDate,
    selectedTags,
    handleSubmit,
    previousPage
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div class="row">
        <h2> Region</h2>
        <div>{selectedRegion}</div>
      </div>
      <h2> TownShip</h2>
      <div>{selectedTownship}</div>
      <h2> Date</h2>
      <div>{selectedDate}</div>
      <h2> Tags</h2>
      <div>{selectedTags}</div>
      <button
        className="button is-medium is-fullwidth is-primary"
        type="submit"
        >
        Report
      </button>
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
      selectedTags: selector(state, "tags")
    })
)(RumourFormThirdPage);

export default RumourFormThirdPage;
