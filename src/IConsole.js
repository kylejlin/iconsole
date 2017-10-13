import React, { Component } from 'react';
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
              return (<li className="IConsole-entry" key="index">{text}</li>);
            }).concat([(
              <li key="input">
                <input
                  type="text"
                  className="IConsole-input"
                  value={this.state.inputValue}
                  onChange={this.updateInputValue}
                  ref={(input) => { this.inputEl = input; }}
                  autofocus
                />
              </li>
            ), (
              <li key="submit">
                <button onClick={this.evalAndPrint}>Run</button>
              </li>
            )])
          }
        </ul>
      </div>
    );
  }

  evalAndPrint(e) {
    e.preventDefault();

    try {
      // eslint-disable-next-line
      this.log(JSON.stringify(eval(this.state.inputValue)));
    } catch (err) {
      this.log(err);
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
