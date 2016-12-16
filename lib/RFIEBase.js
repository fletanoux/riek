'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RFIEBase = function (_React$Component) {
    _inherits(RFIEBase, _React$Component);

    function RFIEBase(props) {
        _classCallCheck(this, RFIEBase);

        var _this = _possibleConstructorReturn(this, (RFIEBase.__proto__ || Object.getPrototypeOf(RFIEBase)).call(this, props));

        _this.setValidationState = function (bool) {
            _this.setState({ invalid: !bool });
        };

        _this.getValue = function () {
            return _this.state.value;
        };

        _this.setValue = function (value) {
            _this.setState(value);
        };

        _this.selectInputText = function (element) {
            if (element.type !== 'time' && element.setSelectionRange) element.setSelectionRange(0, element.value.length);
        };

        _this.elementClick = function (event) {
            throw "RIEBase must be subclassed first: use a concrete class like RIEInput, RIEToggle, RIEDatePicker et.c";
        };

        _this.componentWillReceiveProps = function (nextProps) {
            if ('initialValue' in nextProps) _this.setState({ editing: false, invalid: false });
        };

        _this.commit = function (value) {
            if (!_this.state.invalid) {
                var i;

                (function () {

                    // Convert input name into nested object
                    var names = _this.props.name.split('.');
                    var nestedObject = {};
                    var tmp = value;
                    for (i = names.length - 1; i >= 0; i--) {
                        nestedObject = {};
                        nestedObject[names[i]] = tmp;
                        tmp = nestedObject;
                    }

                    _this.setState({ value: value }, function () {
                        _this.props.handleChange(nestedObject);
                    });
                })();
            }
        };

        _this.makeClassString = function () {
            var additionalClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var classNames = [];
            if (!_this.state.value) classNames.push(_this.props.classPlaceholder);
            if (!_this.state.editing && !_this.state.disabled) classNames.push(_this.props.classEditable);
            if (additionalClass) classNames.push(additionalClass);
            if (_this.props.className) classNames.push(_this.props.className);
            if (_this.state.disabled && _this.props.classDisabled) classNames.push(_this.props.classDisabled);
            if (_this.state.editing && _this.props.classEditing) classNames.push(_this.props.classEditing);
            if (_this.state.invalid && _this.props.classInvalid) classNames.push(_this.props.classInvalid);
            return classNames.join(' ');
        };

        _this.render = function () {
            return _react2.default.createElement(
                'span',
                _extends({}, _this.props.defaultProps, {
                    tabindex: '0',
                    className: _this.makeClassString(),
                    onClick: _this.elementClick
                }),
                _this.state.value || _this.props.placeholder
            );
        };

        if (!_this.props.name) throw "RTFM: missing 'name' prop";
        if (!_this.props.handleChange) throw _this.props.name + ' Require an handlChange callback to works';
        if (!_this.props.placeholder) throw _this.props.name + ' Require a placeholder to works';

        _this.state = {
            editing: false,
            disabled: false,
            invalid: false,
            value: _this.props.initialValue
        };
        return _this;
    }

    // Automatically select the text


    return RFIEBase;
}(_react2.default.Component);

exports.default = RFIEBase;


RFIEBase.propTypes = {
    classDisabled: _react2.default.PropTypes.string,
    classEditable: _react2.default.PropTypes.string,
    classEditing: _react2.default.PropTypes.string,
    classInvalid: _react2.default.PropTypes.string,
    className: _react2.default.PropTypes.string,
    classPlaceholder: _react2.default.PropTypes.string,
    handleChange: _react2.default.PropTypes.func.isRequired,
    initialValue: _react2.default.PropTypes.any,
    isDisabled: _react2.default.PropTypes.bool,
    name: _react2.default.PropTypes.string.isRequired,
    placeholder: _react2.default.PropTypes.any.isRequired
};

RFIEBase.defaultProps = {
    classDisabled: 'rfie-disabled',
    classEditable: 'rfie-editable',
    classEditing: 'rfie-editing',
    classPlaceholder: 'rfie-placeholder'
};