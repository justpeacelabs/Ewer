import React from "react";
import { connect } from "react-redux";
import SectionHeader from "./sectionHeader";
import {gotoPage as _gotoPage} from '../actions';

let Thanks = props => {
  const gotoHome = () => props.gotoPage(1);
  return (
    <div className="scrollable is-fullheight">
      <SectionHeader />
      <div
        className="pure-g grid-container"
        style={{ height: "calc(100% - 95px)" }}>

        <div className="pure-u-1 pure-u-md-1-2">
          <p>Thanks for your report! Do you want to file another one?</p>
        </div>
        <div className="pure-u-1 pure-u-md-1-2 footer">
          <div
            className="is-button is-fullwidth"
            onTouchTap={gotoHome}>
            File another report
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.app.currentPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gotoPage: (page) => {
      dispatch(_gotoPage(page));
    }
  };
};

const ConnectedThanks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Thanks);

export default ConnectedThanks;