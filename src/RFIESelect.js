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
        if(!this.state.invalid && this.props.value !== newValue.value) {
            this.commit(newValue.value);
        }
        this.cancelEditing();
    };

    getCurrentSelectedLabel = () => {
      let label;
       this.props.options.forEach((option) => {
        if(this.props.value === option.value)
          label = option.label;
      });

      return label;
    }

    renderEditingComponent = () => {
        return <Select
                       value={this.props.value}
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
      this.getCurrentSelectedLabel();
        return <span
            tabIndex="0"
            className={this.makeClassString()}
            onFocus={this.startEditing}
            onClick={this.startEditing}
            {...this.props.defaultProps}>
            {(!!this.state.newValue) ?   this.getCurrentSelectedLabel(this.state.newValue.label) :   this.getCurrentSelectedLabel(this.props.value)}
          </span>;
    };
}
