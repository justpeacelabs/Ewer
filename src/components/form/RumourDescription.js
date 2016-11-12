import React from 'react';

const MAX_LENGTH = 1000;

export default class RumourDescription extends React.Component {
  constructor() {
    super();
    this.taChange = this.taChange.bind(this);

    this.state = {
      charsWritten: 0
    };
  }

  taChange(e) {
    this.setState({
      charsWritten: e.target.value.length
    });
  }

  render() {
    const charsLeft = MAX_LENGTH - this.state.charsWritten;
    const input = this.props.input;
    return  (
      <p className="control flex-1">
        <label>{this.props.label}</label>
        <textarea
          placeholder="Try to be as clear as possible"
          className="textarea"
          style={{
            flex: 1,
            height: '80%'
          }}
          onChange={e => {
            const val = e.target.value;
            this.setState({
              charsWritten: val.length
            });
            input.onChange(val);
          }}/>
        <span
          className="is-pulled-right">
          {charsLeft} characters left
        </span>
        {this.props.meta.touched && this.props.meta.error && <span className="help is-danger">{error}</span>}
      </p>);
  }
}

