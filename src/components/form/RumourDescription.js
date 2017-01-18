import React from 'react';
import classnames from 'classnames';
import TextareaAutosize from 'react-autosize-textarea';

const MAX_LENGTH = 1000;
const noop = function () { };

export default class RumourDescription extends React.Component {
  constructor() {
    super();

    this.state = {
      charsWritten: 0
    };

    this.taChange = this.taChange.bind(this);
  }

  taChange(e) {
    this.setState({
      charsWritten: e.target.value.length
    });
  }

  render() {
    const charsLeft = MAX_LENGTH - this.state.charsWritten;
    const {input, meta: {touched, error}} = this.props;
    return (
      <div className="is-fullheight" >
        <TextareaAutosize
          placeholder="Try to be as clear as possible"
          className={classnames({
            'is-danger-field': !!(touched && error),
            'is-fullheight': true
          })}
          onChange={e => {
            const val = e.target.value;
            this.setState({
              charsWritten: val.length
            });
            input.onChange(val);
          } }
          onResize={noop}
          />
        {touched && error && <div className="help is-danger">{error}</div>}
        <div className="is-pulled-right">
          {charsLeft} characters left
        </div>
      </div >);
  }
}

