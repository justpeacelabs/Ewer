import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';

const tagClassNames = {
  tagInputField: 'input is-medium is-fullwidth',
  tag: 'tag is-small',
  remove: 'delete',
  selected: 'selected-tags-container'
};

const RumourTags = ({input, defaultValue}) => {
  let suggestions = [];
  let val = input.value || defaultValue;

  return (
    <ReactTags tags={val}
      classNames={tagClassNames}
      let placeholder = "Add a new tag (3 max.)"
      delimiters={[188, 13, 9]}
      suggestions={suggestions}
      removeComponent={RemoveComponent}
      handleDelete={i => {
        val.splice(i, 1);
        input.onChange(val);
      } }
      handleAddition={tag => {
        tag = tag.trim();
        if (val.length >= 3) {
          return;
        }

        input.onChange(val.concat({
          id: val.length + 1,
          text: tag
        }));
      } } />
  );
};

class RemoveComponent extends React.Component {
  render() {
    return (
      <span {...this.props}>
        <i
          style={{ marginLeft: '1px' }}
          class="fa fa-times" aria-hidden="true">
        </i>
      </span>);
  }
}

export default RumourTags;
