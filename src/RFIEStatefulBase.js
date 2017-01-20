import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'formsy-react-bootstrap';
import RFIEBase from './RFIEBase';

export default class RFIEStatefulBase extends RFIEBase {
  constructor(props){
    super(props);
  }

  startEditing = () => {
    this.setState({editing: true});
  };

  finishEditing = () => {
    this.setValidationState(this.input.isValid());
    if(!this.state.invalid && this.state.value !== this.input.getValue()) {
      this.commit(this.input.getValue());
    }
    this.cancelEditing();
  };

  cancelEditing = () => {
    this.setState({
      editing: false,
      invalid: false,
     });
  };

  keyDown = (event) => {
    if(event.keyCode === 13) { this.finishEditing() }           // Enter
    else if (event.keyCode === 27) { this.cancelEditing() }     // Escape
  };

  textChanged = (event) => {
    this.setValidationState(this.input.isValid());
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.editing && !prevState.editing) {
      const inputElem = ReactDOM.findDOMNode(this.input);
      if(inputElem.type !== 'number') inputElem.focus();
      this.selectInputText(inputElem);
    } else if (this.state.editing && prevProps.text != this.props.text) {
      this.finishEditing();
    }
  };

  renderEditingComponent = () => {
    return (
      <Input
        {...this.props}
        className={this.makeClassString()}
        elementOnly
        name={this.props.name}
        onBlur={this.finishEditing}
        onInput={this.textChanged}
        onKeyDown={this.keyDown}
        ref={node => (this.input = node)}
        type={this.props.type}
        value={this.state.value}
      />);
    };

    renderNormalComponent = () => {
      return (
        <span
          tabIndex="0"
          className={this.makeClassString()}
          onFocus={this.startEditing}
          onClick={this.startEditing}
          {...this.props.defaultProps}
        >
          {this.state.value || this.props.placeholder}
        </span>
        );
      };

      elementBlur = (event) => {
        this.finishEditing();
      };

      elementClick = (event) => {
        this.startEditing();
        event.target.element.focus();
      };

      render = () => {
        if(this.state.editing || this.props.forceEditing) {
          return this.renderEditingComponent();
        } else {
          return this.renderNormalComponent();
        }
      };
    }
