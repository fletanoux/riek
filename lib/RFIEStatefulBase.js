'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _formsyReactBootstrap = require('formsy-react-bootstrap');

var _RFIEBase2 = require('./RFIEBase');

var _RFIEBase3 = _interopRequireDefault(_RFIEBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RFIEStatefulBase = function (_RFIEBase) {
    _inherits(RFIEStatefulBase, _RFIEBase);

    function RFIEStatefulBase(props) {
        _classCallCheck(this, RFIEStatefulBase);

        var _this = _possibleConstructorReturn(this, (RFIEStatefulBase.__proto__ || Object.getPrototypeOf(RFIEStatefulBase)).call(this, props));

        _this.startEditing = function () {
            _this.setState({ editing: true });
        };

        _this.finishEditing = function () {
            _this.setValidationState(_this.input.isValid());
            if (!_this.state.invalid && _this.props.value !== _this.input.getValue()) {
                _this.commit(_this.input.getValue());
            }
            _this.cancelEditing();
        };

        _this.cancelEditing = function () {
            _this.setState({ editing: false, invalid: false });
        };

        _this.keyDown = function (event) {
            if (event.keyCode === 13) {
                _this.finishEditing();
            } // Enter
            else if (event.keyCode === 27) {
                    _this.cancelEditing();
                } // Escape
        };

        _this.textChanged = function (event) {
            _this.setValidationState(_this.input.isValid());
        };

        _this.componentDidUpdate = function (prevProps, prevState) {
            var inputElem = _reactDom2.default.findDOMNode(_this.input);
            if (_this.state.editing && !prevState.editing) {
                inputElem.focus();
                _this.selectInputText(inputElem);
            } else if (_this.state.editing && prevProps.text != _this.props.text) {
                _this.finishEditing();
            }
        };

        _this.renderEditingComponent = function () {
            return _react2.default.createElement(_formsyReactBootstrap.Input, _extends({
                name: _this.props.name,
                disabled: _this.state.loading,
                className: _this.makeClassString(),
                defaultValue: _this.props.value,
                onInput: _this.textChanged,
                onBlur: _this.finishEditing,
                ref: function ref(node) {
                    return _this.input = node;
                },
                onKeyDown: _this.keyDown
            }, _this.props));
        };

        _this.renderNormalComponent = function () {
            return _react2.default.createElement(
                'span',
                _extends({
                    tabIndex: '0',
                    className: _this.makeClassString(),
                    onFocus: _this.startEditing,
                    onClick: _this.startEditing
                }, _this.props.defaultProps),
                _this.state.newValue || _this.props.value
            );
        };

        _this.elementBlur = function (event) {
            _this.finishEditing();
        };

        _this.elementClick = function (event) {
            _this.startEditing();
            event.target.element.focus();
        };

        _this.render = function () {
            if (_this.state.editing) {
                return _this.renderEditingComponent();
            } else {
                return _this.renderNormalComponent();
            }
        };

        return _this;
    }

    return RFIEStatefulBase;
}(_RFIEBase3.default);

exports.default = RFIEStatefulBase;