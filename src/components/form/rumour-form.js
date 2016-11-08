import React from 'react';
import RumourFormFirstPage from './RumourFormFirstPage';
import RumourFormSecondPage from './RumourFormSecondPage';
import RumourFormThirdPage from './RumourFormThirdPage';

export default class ReportRumour extends React.Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (<div>
      <section className="section">
        <h1 className="title is-centered">Report a rumour</h1>
        {page === 1 && <RumourFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && <RumourFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 3 && <RumourFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit} />}
      </section>
    </div>);
  }
}
