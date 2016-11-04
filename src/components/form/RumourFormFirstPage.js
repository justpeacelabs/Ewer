import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';
import { REGIONS, TOWNSHIPS } from './regions';
import RumourDatePicker from './DatePicker';
import RumourTags from './Tags';

class RumourFormFirstPage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedRegion: '',
      tags: [],
      suggestions: ["Banana", "Mango", "Pear", "Apricot"]
    };

    this.handleAddition = this.handleAddition.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
  }

  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({ tags });
  }
  handleAddition(tag) {
    let tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.setState({ tags });
  }
  handleDrag(tag, currPos, newPos) {
    let tags = this.state.tags;

    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags });
  }
  handleRegionChange(event) {
    this.setState({ selectedRegion: event.target.value });
  }

  render() {
    let tags = this.state.tags;
    let suggestions = this.state.suggestions;
    let townships = this.state.selectedRegion ? (
      <p className="control">
        <label htmlFor="township">Township</label>
        <span className="select is-medium is-fullwidth">
          <select id="township">
            {
              TOWNSHIPS[this.state.selectedRegion] &&
              TOWNSHIPS[this.state.selectedRegion]
                .map(township => <option key={township}>{township}</option>)
            }
          </select>
        </span>
      </p>) : '';

    return (
      <section className="section">
        <h1 className="title is-centered">Add a rumour</h1>
        <form onSubmit={this.props.handleSubmit}>
          <p className="control">
            <label htmlFor="region">State/Region</label>
            <span className="select is-medium is-fullwidth">
              <Field name="region" component="select" onChange={this.handleRegionChange}>
                <option key="no-region"></option>
                {
                  REGIONS.map(region => <option key={region}>{region}</option>)
                }
              </Field>
            </span>
          </p>
          {townships}
          <div className="control">
            <Field name="rumourDate" component={RumourDatePicker} />
          </div>
          <div className="control is-fullwidth">
            <label htmlFor="tags">Tags</label>
            <Field name="rumourTags" defaultValue={[]} component={RumourTags} />
          </div>
          <button className="button is-medium is-fullwidth is-primary" type="submit">Next</button>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  // validate
})(RumourFormFirstPage);
