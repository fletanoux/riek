'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

require('react-datepicker/dist/react-datepicker.css');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _RFIEStatefulBase2 = require('./RFIEStatefulBase');

var _RFIEStatefulBase3 = _interopRequireDefault(_RFIEStatefulBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RFIEDatePicker = function (_RFIEStatefulBase) {
  _inherits(RFIEDatePicker, _RFIEStatefulBase);

  function RFIEDatePicker(props) {
    _classCallCheck(this, RFIEDatePicker);

    var _this = _possibleConstructorReturn(this, (RFIEDatePicker.__proto__ || Object.getPrototypeOf(RFIEDatePicker)).call(this, props));

    _this.getValue = function () {
      return _this.state.value && _this.state.value.format(_this.props.dateFormat || "DD/MM/YYYY");
    };

    _this.getMomentObject = function () {
      return _this.state.value;
    };

    _this.handleChange = function (date) {
      _this.setState({ value: date }, function () {
        _this.props.handleChange(date.format(_this.props.dateFormat || "DD/MM/YYYY"));
      });

      _this.cancelEditing();
    };

    _this.componentDidUpdate = function () {};

    _this.renderEditingComponent = function () {
      return _react2.default.createElement(_reactDatepicker2.default, _extends({
        autoFocus: true,
        selected: _this.state.value || (0, _moment2.default)(),
        onChange: _this.handleChange,
        dateFormat: _this.props.dateFormat || "DD/MM/YYYY",
        ref: function ref(node) {
          return _this.input = node;
        }
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
        _this.state.value && _this.state.value.format(_this.props.dateFormat || "DD/MM/YYYY") || _this.props.placeholder
      );
    };

    if (_this.props.initialValue && typeof _this.props.initialValue !== 'string' && !(_this.props.initialValue instanceof _moment2.default) && !(_this.props.initialValue instanceof Date)) throw 'RTFM: initialValue for ' + _this.props.name + ' must be a string, a moment object, or a date object';

    if (!_this.props.initialValue) {
      _this.state = {
        value: null
      };
    } else if (_typeof(_this.props.initialValue) === new _moment2.default()) {
      _this.state = {
        value: _this.props.initialValue
      };
    } else {
      _this.state = {
        value: (0, _moment2.default)(_this.props.initialValue, _this.props.dateFormat || "DD/MM/YYYY")
      };
    }
    return _this;
  }

  return RFIEDatePicker;
}(_RFIEStatefulBase3.default);

exports.default = RFIEDatePicker;