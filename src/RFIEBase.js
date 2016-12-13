import React from 'react';

export default class RFIEBase extends React.Component {
    constructor(props){
        super(props);

        if (!this.props.name) throw "RTFM: missing 'name' prop";
        if (!this.props.handleChange) throw "RTFM: missing 'jhandleChange' prop";
        if (this.props.value == undefined) throw "RTFM: missing 'value' prop";

        this.state = {
            editing: false,
            loading: false,
            disabled: false,
            invalid: false
        };
    };

    setValidationState = (bool) => {
      this.setState({invalid: !bool});
    }

    getValue = () => {
      return this.state.newValue || this.props.value;
    };

    selectInputText = (element) => {
        if (element.type !== 'time' && element.setSelectionRange) element.setSelectionRange(0, element.value.length);
    };

    elementClick = (event) => {
        throw "RIEBase must be subclassed first: use a concrete class like RIEInput, RIEToggle, RIEDate et.c";
    };

    componentWillReceiveProps = (nextProps) => {
        if ('value' in nextProps) this.setState({loading: false, editing: false, invalid: false});
    };

    commit = (value) => {
        if(!this.state.invalid) {
            const names = this.props.name.split('.');
            let nestedObject = {};
            let tmp = value;
            for (var i = names.length -1; i >= 0; i--) {
                nestedObject = {};
                nestedObject[names[i]] = tmp;
                tmp = nestedObject;
            }

            this.setState({loading: true, newValue: value});
            this.props.handleChange(nestedObject);
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
        return <span {...this.props.defaultProps} tabindex="0" className={this.makeClassString()} onClick={this.elementClick}>{this.props.value}</span>;
    };
}

RFIEBase.propTypes = {
    value: React.PropTypes.any.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    defaultProps: React.PropTypes.object,
    isDisabled: React.PropTypes.bool,
    shouldBlockWhileLoading: React.PropTypes.bool,
    classLoading: React.PropTypes.string,
    classEditing: React.PropTypes.string,
    classDisabled: React.PropTypes.string,
    classInvalid: React.PropTypes.string,
    className: React.PropTypes.string
};
