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

var RFIETextArea = function (_RFIEStatefulBase) {
    _inherits(RFIETextArea, _RFIEStatefulBase);

    function RFIETextArea() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RFIETextArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RFIETextArea.__proto__ || Object.getPrototypeOf(RFIETextArea)).call.apply(_ref, [this].concat(args))), _this), _this.keyDown = function (event) {
            if (event.keyCode === 27) {
                _this.cancelEditing();
            } // Escape
        }, _this.renderEditingComponent = function () {
            return _react2.default.createElement(_formsyReactBootstrap.Textarea, _extends({
                value: _this.props.value,
                rows: _this.props.rows,
                cols: _this.props.cols,
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
        }, _this.renderNormalComponent = function () {
            var value = _this.state.newValue || _this.props.value;
            var spans_and_brs = [];
            var i = 0;
            value.split("\n").map(function (line) {
                spans_and_brs.push(_react2.default.createElement(
                    'span',
                    { key: i },
                    line
                ));
                spans_and_brs.push(_react2.default.createElement('br', { key: i + 1 }));
                i += 2;
            });
            spans_and_brs.pop(); // remove last br tag

            return _react2.default.createElement(
                'span',
                _extends({
                    tabIndex: '0',
                    className: _this.makeClassString(),
                    onFocus: _this.startEditing,
                    onClick: _this.startEditing
                }, _this.props.defaultProps),
                spans_and_brs
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return RFIETextArea;
}(_RFIEStatefulBase3.default);

exports.default = RFIETextArea;