"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

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
            return _this.state.newValue || _this.props.value;
        };

        _this.selectInputText = function (element) {
            if (element.type !== 'time' && element.setSelectionRange) element.setSelectionRange(0, element.value.length);
        };

        _this.elementClick = function (event) {
            throw "RIEBase must be subclassed first: use a concrete class like RIEInput, RIEToggle, RIEDate et.c";
        };

        _this.componentWillReceiveProps = function (nextProps) {
            if ('value' in nextProps) _this.setState({ loading: false, editing: false, invalid: false });
        };

        _this.commit = function (value) {
            if (!_this.state.invalid) {
                var names = _this.props.name.split('.');
                var nestedObject = {};
                var tmp = value;
                for (var i = names.length - 1; i >= 0; i--) {
                    nestedObject = {};
                    nestedObject[names[i]] = tmp;
                    tmp = nestedObject;
                }

                _this.setState({ loading: true, newValue: value });
                _this.props.handleChange(nestedObject);
            }
        };

        _this.makeClassString = function () {
            var classNames = [];
            if (_this.props.className) classNames.push(_this.props.className);
            if (_this.state.editing && _this.props.classEditing) classNames.push(_this.props.classEditing);
            if (_this.state.loading && _this.props.classLoading) classNames.push(_this.props.classLoading);
            if (_this.state.disabled && _this.props.classDisabled) classNames.push(_this.props.classDisabled);
            if (_this.state.invalid && _this.props.classInvalid) classNames.push(_this.props.classInvalid);
            return classNames.join(' ');
        };

        _this.render = function () {
            return _react2.default.createElement(
                "span",
                _extends({}, _this.props.defaultProps, { tabindex: "0", className: _this.makeClassString(), onClick: _this.elementClick }),
                _this.props.value
            );
        };

        if (!_this.props.name) throw "RTFM: missing 'name' prop";
        if (!_this.props.handleChange) throw "RTFM: missing 'jhandleChange' prop";
        if (_this.props.value == undefined) throw "RTFM: missing 'value' prop";

        _this.state = {
            editing: false,
            loading: false,
            disabled: false,
            invalid: false
        };
        return _this;
    }

    return RFIEBase;
}(_react2.default.Component);

exports.default = RFIEBase;


RFIEBase.propTypes = {
    value: _react2.default.PropTypes.any.isRequired,
    handleChange: _react2.default.PropTypes.func.isRequired,
    name: _react2.default.PropTypes.string.isRequired,
    defaultProps: _react2.default.PropTypes.object,
    isDisabled: _react2.default.PropTypes.bool,
    shouldBlockWhileLoading: _react2.default.PropTypes.bool,
    classLoading: _react2.default.PropTypes.string,
    classEditing: _react2.default.PropTypes.string,
    classDisabled: _react2.default.PropTypes.string,
    classInvalid: _react2.default.PropTypes.string,
    className: _react2.default.PropTypes.string
};