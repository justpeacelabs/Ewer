import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

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
    return (
      <div>
        <TextareaAutosize
          placeholder="Try to be as clear as possible"
          className="textarea"
          style={{
            width: '100%',
            minHeight: '200px',
            boxSizing: 'border-box',
            border: 'solid 5px #3E606F',
            backgroundColor: '#EAF5D3'
          }}
          onChange={e => {
            const val = e.target.value;
            this.setState({
              charsWritten: val.length
            });
            input.onChange(val);
          } }
          onResize={(e) => { } }
          />
        <div
          className="is-pulled-right">
          {charsLeft} characters left
        </div>
        {this.props.meta.touched && this.props.meta.error && <span className="help is-danger">{error}</span>}
      </div>);
  }
}

