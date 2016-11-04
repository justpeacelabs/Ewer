import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';

export default class RumourTags extends React.Component {
  render() {
    let suggestions = ["Banana", "Mango", "Pear", "Apricot"];
    let val = this.props.input.value || this.props.defaultValue;

    return (
      <ReactTags tags={val}
        classNames={{
          tagInputField: 'input is-medium is-fullwidth'
        }}
        delimiters={[188, 13, 9]}
        suggestions={suggestions}
        handleDelete={i => {
          val.splice(i, 1);
          this.props.input.onChange(val);
        } }
        handleAddition={tag => {
          this.props.input.onChange(val.concat({
            id: val.length + 1,
            text: tag
          }));
        } } />
    );
  }
}

