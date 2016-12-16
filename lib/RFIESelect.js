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

var _RFIEStatefulBase2 = require('./RFIEStatefulBase');

var _RFIEStatefulBase3 = _interopRequireDefault(_RFIEStatefulBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RFIESelect = function (_RFIEStatefulBase) {
  _inherits(RFIESelect, _RFIEStatefulBase);

  function RFIESelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RFIESelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RFIESelect.__proto__ || Object.getPrototypeOf(RFIESelect)).call.apply(_ref, [this].concat(args))), _this), _this.finishEditing = function (name, value) {
      // get the object from options that matches user selected value
      var newValue = _this.props.options.find(function (option) {
        return option.value === value;
      }, _this);

      _this.setValidationState(true);
      if (!_this.state.invalid && _this.state.value !== newValue.value) {
        _this.commit(newValue.value);
      }
      _this.cancelEditing();
    }, _this.getCurrentSelectedLabel = function () {
      var label = null;
      _this.props.options.forEach(function (option) {
        if (_this.state.value === option.value) label = option.label;
      });

      return label;
    }, _this.renderEditingComponent = function () {
      return _react2.default.createElement(_formsyReactBootstrap.Select, _extends({
        className: _this.makeClassString(),
        name: _this.props.name,
        onBlur: _this.cancelEditing,
        onChange: _this.finishEditing,
        onKeyDown: _this.keyDown,
        options: _this.props.options,
        ref: function ref(node) {
          return _this.input = node;
        },
        value: _this.props.initialValue
      }, _this.props));
    }, _this.renderNormalComponent = function () {
      return _react2.default.createElement(
        'span',
        _extends({
          tabIndex: '0',
          className: _this.makeClassString(),
          onFocus: _this.startEditing,
          onClick: _this.startEditing
        }, _this.props.defaultProps),
        _this.getCurrentSelectedLabel() || _this.props.placeholder
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return RFIESelect;
}(_RFIEStatefulBase3.default);

RFIESelect.propTypes = {
  options: _react2.default.PropTypes.array.isRequired
};
exports.default = RFIESelect;