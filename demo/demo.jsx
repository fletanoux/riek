import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight';
import {RFIEInput, RFIELink, RFIETextArea, RFIETags, RFIESelect, RFIEDatePicker} from '../src/index.js';
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
      time: "00:50",
      number : 9000,
      text : "Example text value",
      textarea : `Multiline example
      text value`,
      date : new Date(),
      tags: new Set(["Bergen", "Asmara", "Göteborg", "Newcastle", "Seattle"]),
      simulateXHR: false,
      XHRDelay: 450,
      highlight: false,
      showSource: false
    };
  }

  virtualServerCallback = (newState) => {
    console.log(newState);
  };

  test = () => {
    console.log(this.time.getValue());
  }

  dateChange = (date) => {
    console.log(this.date);
    console.log(this.date.getValue());
    console.log(this.date.getMomentObject());
  }

  handleSelect = (newState) => {
    console.log('handleSelect', newState);
    this.setState(newState);
  }

  render = () => {
    return <div>
      <FormsyBootstrap>
        <div className="content">
          <h3>Input</h3>
          <div>
            <span>Default: </span>
            <RFIEInput
              classInvalid="invalid"
              classLoading="loading"
              className="test"
              handleChange={this.virtualServerCallback}
              help="Test de message d'ehelp"
              // initialValue={this.state.text}
              name="text"
              placeholder="placeholder input"
              validationError="Must be a valid email"
              validations="isEmail"
            />
          </div>
          <hr />
          <h3>Textarea</h3>
          <div>
            <p>Default: </p>
            <RFIETextArea
              classInvalid="invalid"
              classLoading="loading"
              handleChange={this.virtualServerCallback}
              // initialValue={this.state.textarea}
              name="a.b"
              placeholder="placeholder textarea"
            />
          </div>
          <hr />
          <h3>Link</h3>
          <div>
            <p>Default : </p>
            <RFIELink
              handleChange={this.virtualServerCallback}
              initialValue="http://mudita-music.com"
              name="a.b"
              placeholder="placeholder link"
              iconClassName="icon icon-pen"
            />
            <p>Email : </p>
            <RFIELink
              handleChange={this.virtualServerCallback}
              initialValue="letanoux.florian@gmail.com"
              email={true}
              name="a.b"
              placeholder="placeholder email"
              iconClassName="icon icon-pen"
            />
            <p>Replaced with text : </p>
            <RFIELink
              handleChange={this.virtualServerCallback}
              initialValue="http://mudita-music.com"
              text="This text replace the url"
              name="a.b"
              placeholder="placeholder link"
              iconClassName="icon icon-pen"
            />
            <p>Placeholder : </p>
            <RFIELink
              handleChange={this.virtualServerCallback}
              // initialValue={this.state.textarea}
              name="a.b"
              placeholder="placeholder link"
              iconClassName="icon icon-pen"
            />
          </div>

          <hr />
          <h3>Number</h3>
          <div>
            <span>Default: </span>
            <RFIEInput
              classInvalid="invalid"
              classLoading="loading"
              className={this.state.highlight ? "editable" : ""}
              handleChange={this.virtualServerCallback}
              // initialValue={this.state.number}
              name="number"
              placeholder="placeholder number"
            />
            <br />
            <span>Only even, custom formatter: </span>
            <RFIEInput
              classInvalid="invalid"
              classLoading="loading"
              className={this.state.highlight ? "editable" : ""}
              handleChange={this.virtualServerCallback}
              // initialValue={this.state.number}
              name="number"
              placeholder="placeholder number"
              type="number"
            />
          </div>
          <hr />
          <h3>Time</h3>
          <div>
            <span>Default: </span>
            <RFIEInput
              classInvalid="invalid"
              classLoading="loading"
              className={this.state.highlight ? "editable" : ""}
              handleChange={this.test}
              initialValue={undefined}
              name="time"
              placeholder="placeholder time"
              ref={node => (this.time = node)}
              type="time"
            />
          </div>
          <hr />
          <h3>Date</h3>
          <div>
            <span>Default: </span>
            <RFIEDatePicker
              dateFormat="DD-MM-YYYY"
              handleChange={this.dateChange}
              //initialValue={this.state.date}
              name="date"
              placeholder="placeholder datepicker"
              ref={node => (this.date = node)}
            />
          </div>
          <hr />
          <h3>Select</h3>
          <div>
            <span>Default: </span>
            <RFIESelect
              //initialValue={undefined}
              className={this.state.highlight ? "editable" : ""}
              options={this.state.selectOptions}
              handleChange={this.virtualServerCallback}
              classLoading="loading"
              name="select"
              placeholder="placeholder select"
            />
          </div>
        </div>
      </FormsyBootstrap>
    </div>;
  };
}

ReactDOM.render(<Demo />, document.getElementById('app'));
