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
    let label = null;
    this.props.options.forEach((option) => {
      if(this.state.value === option.value)
      label = option.label;
    });

    return label;
  }

  renderEditingComponent = () => {
    const optionsToDisplay = this.props.options.slice(0);
    optionsToDisplay.unshift({value: null, label: this.props.placeholder});

    return (
      <Select
        {...this.props}
        className={this.makeClassString()}
        elementOnly
        name={this.props.name}
        onBlur={this.cancelEditing}
        onChange={this.finishEditing}
        onKeyDown={this.keyDown}
        options={optionsToDisplay}
        ref={node => (this.input = node)}
        value={this.state.value}
      />
    );
  };

  renderNormalComponent = () => {
    return <span
      tabIndex="0"
      className={this.makeClassString()}
      onFocus={this.startEditing}
      onClick={this.startEditing}
      {...this.props.defaultProps}>
      {this.getCurrentSelectedLabel() || this.props.placeholder}
    </span>;
  };
}
