import React from 'react';
import { connect } from 'react-redux';
import {gotoPage} from '../actions';
import RumourFormFirstPage from './RumourFormFirstPage';
import RumourFormSecondPage from './RumourFormSecondPage';
import RumourFormThirdPage from './RumourFormThirdPage';
import ConnectedThanks from './Thanks';

class ReportRumour extends React.Component {
  render() {
    const { onSubmit, currentPage, gotoPage } = this.props;
    const nextPage = () => gotoPage(currentPage + 1);
    const previousPage = () => gotoPage(currentPage - 1);
    return (
      <div className="is-fullheight">
        <section>
          {currentPage === 1 && <RumourFormFirstPage onSubmit={nextPage} />}
          {currentPage === 2 && <RumourFormSecondPage previousPage={previousPage} onSubmit={nextPage} />}
          {currentPage === 3 && <RumourFormThirdPage previousPage={previousPage} />}
          {currentPage === 4 && <ConnectedThanks />}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.app.currentPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gotoPage: (page) => {
      dispatch(gotoPage(page));
    }
  };
};

const ConnectedReportRumour = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportRumour);

export default ConnectedReportRumour;