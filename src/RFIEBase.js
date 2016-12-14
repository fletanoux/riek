import React from 'react';

export default class RFIEBase extends React.Component {
    constructor(props){
        super(props);

        if (!this.props.name) throw "RTFM: missing 'name' prop";
        if (!this.props.handleChange) throw "RTFM: missing 'handleChange' prop";
        if (!this.props.initialValue) throw `RTFM: missing 'initialValue' prop for ${this.props.name}`;

        this.state = {
            editing: false,
            loading: false,
            disabled: false,
            invalid: false,
            value: this.props.initialValue
        };
    };

    setValidationState = (bool) => {
      this.setState({invalid: !bool});
    }

    getValue = () => {
      return this.state.value;
    };

    setValue = (value) => {
      this.setState(value);
    }

    // Automatically select the text
    selectInputText = (element) => {
        if (element.type !== 'time' && element.setSelectionRange) element.setSelectionRange(0, element.value.length);
    };

    elementClick = (event) => {
        throw "RIEBase must be subclassed first: use a concrete class like RIEInput, RIEToggle, RIEDate et.c";
    };

    componentWillReceiveProps = (nextProps) => {
        if ('initialValue' in nextProps) this.setState({loading: false, editing: false, invalid: false});
    };

    commit = (value) => {
        if(!this.state.invalid) {

            // Convert input name into nested object
            const names = this.props.name.split('.');
            let nestedObject = {};
            let tmp = value;
            for (var i = names.length -1; i >= 0; i--) {
                nestedObject = {};
                nestedObject[names[i]] = tmp;
                tmp = nestedObject;
            }

            this.setState({loading: true, value: value}, () => { this.props.handleChange(nestedObject) });

        }
    };

    makeClassString = () => {
        var classNames = [];
        if (this.props.className) classNames.push(this.props.className);
        if (this.state.editing && this.props.classEditing) classNames.push(this.props.classEditing);
        if (this.state.loading && this.props.classLoading) classNames.push(this.props.classLoading);
        if (this.state.disabled && this.props.classDisabled) classNames.push(this.props.classDisabled);
        if (this.state.invalid && this.props.classInvalid) classNames.push(this.props.classInvalid);
        return classNames.join(' ');
    };

    render = () => {
        return <span {...this.props.defaultProps} tabindex="0" className={this.makeClassString()} onClick={this.elementClick}>{this.state.value}</span>;
    };
}

RFIEBase.propTypes = {
    classDisabled: React.PropTypes.string,
    classEditing: React.PropTypes.string,
    classInvalid: React.PropTypes.string,
    classLoading: React.PropTypes.string,
    className: React.PropTypes.string,
    defaultProps: React.PropTypes.object,
    handleChange: React.PropTypes.func.isRequired,
    initialValue: React.PropTypes.any.isRequired,
    isDisabled: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    shouldBlockWhileLoading: React.PropTypes.bool,
};
