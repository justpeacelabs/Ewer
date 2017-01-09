import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';

const tagClassNames = {
  tagInputField: 'input is-medium is-fullwidth',
  tag: 'tag is-small',
  remove: 'delete is-small hide-text'
};

const RumourTags = ({input, defaultValue}) => {
  let suggestions = [];
  let val = input.value || defaultValue;

  return (
    <ReactTags tags={val}
      classNames={tagClassNames}
      delimiters={[188, 13, 9]}
      suggestions={suggestions}
      handleDelete={i => {
        val.splice(i, 1);
        input.onChange(val);
      } }
      handleAddition={tag => {
        input.onChange(val.concat({
          id: val.length + 1,
          text: tag
        }));
      } } />
  );
};

export default RumourTags;
