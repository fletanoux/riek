import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from 'formsy-react-bootstrap';
import RFIEStatefulBase from './RFIEStatefulBase';

export default class RFIESelect extends RFIEStatefulBase {
  static propTypes = {
    options: React.PropTypes.array.isRequired
  };

  finishEditing = (name, value) => {
    // get the object from options that matches user selected value
    const newValue = this.props.options.find(function(option) {
      return option.value === value;
    }, this);

    this.setValidationState(true);
    if(!this.state.invalid && this.state.value !== newValue.value) {
      this.commit(newValue.value);
    }
    this.cancelEditing();
  };

  getCurrentSelectedLabel = () => {
    let label;
    this.props.options.forEach((option) => {
      if(this.state.value === option.value)
      label = option.label;
    });

    return label;
  }

  renderEditingComponent = () => {
    return <Select
      value={this.props.initialValue}
      disabled={(this.props.shouldBlockWhileLoading && this.state.loading)}
      className={this.makeClassString()}
      onChange={this.finishEditing}
      onBlur={this.cancelEditing}
      onKeyDown={this.keyDown}
      options={this.props.options}
      name={this.props.name}
      ref={node => (this.input = node)}
           />
  };

  renderNormalComponent = () => {
    return <span
      tabIndex="0"
      className={this.makeClassString()}
      onFocus={this.startEditing}
      onClick={this.startEditing}
      {...this.props.defaultProps}>
      {this.getCurrentSelectedLabel()}
    </span>;
  };
}
