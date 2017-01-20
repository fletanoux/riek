import React from 'react';
import { TimeInput } from 'formsy-react-bootstrap';
import RFIEStatefulBase from './RFIEStatefulBase';


export default class RFIETimeInput extends RFIEStatefulBase {

  componentWillMount = () => {
    if(!TimeInput.internalValidation(this.props.initialValue)) {
      this.setState({value: ''});
    };
  }

  renderEditingComponent = () => {
    return (
      <TimeInput
        {...this.props}
        className={this.makeClassString()}
        name={this.props.name}
        onBlur={this.finishEditing}
        onInput={this.textChanged}
        onKeyDown={this.keyDown}
        ref={node => (this.input = node)}
        value={this.state.value}
      />);
    };
}
