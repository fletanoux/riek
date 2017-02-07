'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReactBootstrap = require('formsy-react-bootstrap');

var _RFIEStatefulBase2 = require('./RFIEStatefulBase');

var _RFIEStatefulBase3 = _interopRequireDefault(_RFIEStatefulBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RFIETimeInput = function (_RFIEStatefulBase) {
  _inherits(RFIETimeInput, _RFIEStatefulBase);

  function RFIETimeInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RFIETimeInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RFIETimeInput.__proto__ || Object.getPrototypeOf(RFIETimeInput)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      if (!_formsyReactBootstrap.TimeInput.internalValidation(_this.props.initialValue)) {
        _this.setState({ value: '' });
      };
    }, _this.renderEditingComponent = function () {
      return _react2.default.createElement(_formsyReactBootstrap.TimeInput, _extends({}, _this.props, {
        className: _this.makeClassString(),
        name: _this.props.name,
        onBlur: _this.finishEditing,
        onInput: _this.textChanged,
        onKeyDown: _this.keyDown,
        ref: function ref(node) {
          return _this.input = node;
        },
        value: _this.state.value
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return RFIETimeInput;
}(_RFIEStatefulBase3.default);

exports.default = RFIETimeInput;