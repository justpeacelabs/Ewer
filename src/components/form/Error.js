import React from "react";
import { connect } from "react-redux";
import SectionHeader from "./sectionHeader";
import {gotoPage as _gotoPage} from '../actions';

let Thanks = props => {
  const gotoLast = () => props.gotoPage(3);
  return (
    <div className="scrollable is-fullheight">
      <SectionHeader />
      <div
        className="pure-g grid-container"
        style={{ height: "calc(100% - 95px)" }}>

        <div className="pure-u-1 pure-u-md-1-2">
          <p>Something went wrong. Do you want to try again?</p>
        </div>
        <div className="pure-u-1 pure-u-md-1-2 footer">
          <div
            className="is-button is-fullwidth"
            onTouchTap={gotoLast}>
            Try again
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