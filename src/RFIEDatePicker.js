import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import RFIEStatefulBase from './RFIEStatefulBase';

export default class RFIEDatePicker extends RFIEStatefulBase {

  constructor(props) {
    super(props);

    console.log(this.props.dateFormat || "DD/MM/YYYY");
    if(typeof this.props.initialValue !== 'string' && typeof this.props.initialValue !== new moment() && typeof this.props.initialValue !== new Date()) throw `RTFM: initialValue for ${this.props.name} must be a string, a moment object, or a date object`;

    if(typeof this.props.initialValue === new moment()) {
      this.state = {
        value: this.props.initialValue,
      };
    } else {
      this.state = {
        value: moment(this.props.initialValue, this.props.dateFormat || "DD/MM/YYYY"),
      };
    }
  }

  getValue = () => {
    return this.state.value.format(this.props.dateFormat || "DD/MM/YYYY");
  }

  getMomentObject = () => {
    return this.state.value;
  }

  handleChange = (date) => {
    this.setState({ value: date });

    this.props.handleChange(date.format(this.props.dateFormat || "DD/MM/YYYY"));
    this.cancelEditing();
  }
  componentDidUpdate = () => {

  }

  renderEditingComponent = () => {
    return (
      <DatePicker
        autoFocus={true}
        selected={this.state.value}
        onChange={this.handleChange}
        dateFormat={this.props.dateFormat || "DD/MM/YYYY"}
        ref={node => (this.input = node)}
        {...this.props}
      />
    );
  }

  renderNormalComponent = () => {
    return (
      <span
        tabIndex="0"
        className={this.makeClassString()}
        onFocus={this.startEditing}
        onClick={this.startEditing}
        {...this.props.defaultProps}>{this.state.value.format(this.props.dateFormat || "DD/MM/YYYY")}</span>
    );
  }

}
