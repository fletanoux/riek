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

var RFIELink = function (_RFIEStatefulBase) {
  _inherits(RFIELink, _RFIEStatefulBase);

  function RFIELink() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RFIELink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RFIELink.__proto__ || Object.getPrototypeOf(RFIELink)).call.apply(_ref, [this].concat(args))), _this), _this.renderEditingComponent = function () {
      return _react2.default.createElement(_formsyReactBootstrap.Input, _extends({
        className: _this.makeClassString(),
        name: _this.props.name,
        onBlur: _this.finishEditing,
        onInput: _this.textChanged,
        onKeyDown: _this.keyDown,
        ref: function ref(node) {
          return _this.input = node;
        },
        type: _this.props.type,
        validation: _this.props.email ? 'isEmail' : 'isUrl',
        value: _this.state.value
      }, _this.props));
    }, _this.renderNormalComponent = function () {
      if (_this.state.value) {
        return _this.renderLink();
      }

      return _this.renderPlaceholder();
    }, _this.renderLink = function () {
      var email = _this.props.email && 'MAILTO:' + _this.state.value;
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'a',
          _extends({
            className: _this.makeClassString(),
            download: _this.props.download,
            href: email || _this.state.value,
            referrerpolicy: _this.props.referrerpolicy,
            rel: _this.props.rel,
            target: _this.props.target,
            type: _this.props.type
          }, _this.props.defaultProps),
          _this.props.text || _this.state.value
        ),
        _react2.default.createElement('span', {
          onFocus: _this.startEditing,
          onClick: _this.startEditing,
          className: 'rfie-link-icon ' + _this.props.iconClassName
        })
      );
    }, _this.renderPlaceholder = function () {
      return _react2.default.createElement(
        'span',
        _extends({
          tabIndex: '0',
          className: _this.makeClassString(),
          onFocus: _this.startEditing,
          onClick: _this.startEditing
        }, _this.props.defaultProps),
        _this.props.placeholder
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return RFIELink;
}(_RFIEStatefulBase3.default);

exports.default = RFIELink;


RFIELink.propTypes = {
  download: _react2.default.PropTypes.bool,
  email: _react2.default.PropTypes.bool,
  iconClassName: _react2.default.PropTypes.string.isRequired,
  referrerpolicy: _react2.default.PropTypes.string,
  rel: _react2.default.PropTypes.string,
  target: _react2.default.PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  text: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string
};