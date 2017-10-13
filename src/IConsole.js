import React, { Component } from 'react';
import stringifyObject from './stringifyObject';
import './IConsole.css';

class IConsole extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      inputValue: ''
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.evalAndPrint = this.evalAndPrint.bind(this);
  }

  render() {
    return (
      <div className="IConsole">
        <ul className="IConsole-entry-list">
          {
            this.state.entries.map((text, index) => {
              return (<li className="IConsole-entry" key={index}>{text}</li>);
            })
          }
        </ul>

        <input
          type="text"
          className="IConsole-input"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          ref={(input) => { this.inputEl = input; }}
          autoFocus
        />

        <button onClick={this.evalAndPrint}>Run</button>
      </div>
    );
  }

  evalAndPrint(e) {
    e.preventDefault();

    try {
      // eslint-disable-next-line
      this.log(stringifyObject(eval(this.state.inputValue)));
    } catch (err) {
      this.log(err.message);
    } finally {
      this.setState({
        inputValue: ''
      });

      this.inputEl.focus();
    }
  }

  log(msg) {
    this.setState({
      entries: this.state.entries.concat([msg])
    });
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
}

export default IConsole;
