import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight';
import {RFIEInput, RFIEToggle, RFIETextArea, RFIETags, RFIESelect} from '../src/index.js';
import {FormsyBootstrap} from 'formsy-react-bootstrap';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    select : 'a',
    selectOptions :  [
      {value: 'a', label: 'Option A'},
      {value: 'a', label: 'Option A (again)'},
      {value: 'b', label: 'Option B'},
      {value: 'c', label: 'Option C', title: 'This is a title attribute for Option C'},
      {value: 'd', label: 'Option D', disabled: true}
    ],
    boolean : true,
    number : 9000,
    text : "Example text value",
    textarea : `Multiline example
text value`,
    date : Date.now(),
    tags: new Set(["Bergen", "Asmara", "Göteborg", "Newcastle", "Seattle"]),
    simulateXHR: false,
    XHRDelay: 450,
    highlight: false,
    showSource: false
    };
  }

  virtualServerCallback = (newState) => {
    console.log(newState);
    if (this.state.simulateXHR) {
    window.setTimeout(function() {
      this.changeState(newState);
    }.bind(this), this.state.XHRDelay);
    } else {
    this.changeState(newState);
    }
  };

  changeState = (newState) => {
    this.setState(newState);
  };

  isStringAcceptable = (string) => {
    return (string.length >= 1);  // Minimum 4 letters long
  };

  isStringEvenNumber = (string) => {
    var number = parseInt(string);
    if (isNaN(number) || !isFinite(number)) return false;
    return number % 2 == 0;
  };

  isValidXHRDelay = (text) => {
    let number = parseInt(text);
    if (isNaN(number)) return false;
    return (0 < number) && (number < 50000);
  };

  formatInteger = (number) => {
    return number.toString() + " feet";
  };

  formatMillisecondsAppend = (text) => {
    return text + " ms";
  };

  handleSelect = (newState) => {
    console.log('handleSelect', newState);
    this.setState(newState);
  }

  render = () => {
    let xhrDelaySwitch = (this.state.simulateXHR) ? <li>XHR delay: <RFIEInput type="number" value={this.state.XHRDelay} handleChange={this.changeState} validate={this.isValidXHRDelay} name="XHRDelay" className="editable-pill" format={this.formatMillisecondsAppend} /></li> : null;
    return <div>
      <FormsyBootstrap>
    <div className="menu">
      <div className="fifty">
        <h3>Application State</h3>
        <ul>
          <li><i>boolean:</i> {this.state.boolean.toString()}</li>
          <li><i>text:</i> {this.state.text}</li>
          <li><i>textarea:</i> {this.state.textarea.replace(new RegExp("\n", "g"), "\\n")}</li>
          <li><i>number:</i> {this.state.number}</li>
          <li><i>tags:</i> {[...this.state.tags].join(', ')}</li>
          <li><i>select:</i> {JSON.stringify(this.state.select)}</li>
        </ul>
      </div>
      <div className="fifty">
        <h3>Options</h3>
      </div>
    </div>
    <div className="content">
      <h3>Toggle</h3>
      <div>
        <span>Default: </span>

        <br />
        <span>Custom labels: </span>

      </div>
      <hr />
      <h3>Input</h3>
      <div>
        <span>Default: </span>
        <RFIEInput
          help="Test de message d'ehelp"
          validations="isEmail"
          validationError="Must be a valid email"
          value={this.state.text}
          handleChange={this.virtualServerCallback}
          name="text"
          className={this.state.highlight ? "editable" : ""}
          classLoading="loading"
          classInvalid="invalid" />
      </div>
      <hr />
      <h3>Textarea</h3>
      <div>
        <p>Default: </p>
        <RFIETextArea
          value={this.state.textarea}
          handleChange={this.virtualServerCallback}
          name="a.b"
          className={this.state.highlight ? "editable" : ""}
          classLoading="loading"
          classInvalid="invalid" />
      </div>
      <hr />
      <h3>Number</h3>
      <div>
        <span>Default: </span>
        <RFIEInput
          value={this.state.number}
          handleChange={this.virtualServerCallback}
          name="number"
          className={this.state.highlight ? "editable" : ""}
          classLoading="loading"
          classInvalid="invalid"/>
        <br />
        <span>Only even, custom formatter: </span>
        <RFIEInput
          value={this.state.number}
          handleChange={this.virtualServerCallback}
          name="number"
          type="number"
          classLoading="loading"
          className={this.state.highlight ? "editable" : ""}
          classInvalid="invalid"/>
      </div>
      <hr />
      <h3>Tags</h3>
      <div>
        <span>Default: </span>
      </div>
      <hr />
      <h3>Select</h3>
      <div>
        <span>Default: </span>
        <RFIESelect
          value={this.state.select}
          className={this.state.highlight ? "editable" : ""}
          options={this.state.selectOptions}
          handleChange={this.virtualServerCallback}
          classLoading="loading"
          name="select" />
      </div>
    </div>
  </FormsyBootstrap>
    </div>;
  };
}

ReactDOM.render(<Demo />, document.getElementById('app'));
