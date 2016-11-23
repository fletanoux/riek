'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RFIESelect = exports.RFIETextArea = exports.RFIEInput = undefined;

var _RFIEStatefulBase2 = require('./RFIEStatefulBase');

var _RFIEStatefulBase3 = _interopRequireDefault(_RFIEStatefulBase2);

var _RFIETextArea = require('./RFIETextArea');

var _RFIETextArea2 = _interopRequireDefault(_RFIETextArea);

var _RFIESelect = require('./RFIESelect');

var _RFIESelect2 = _interopRequireDefault(_RFIESelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RFIEInput = function (_RFIEStatefulBase) {
  _inherits(RFIEInput, _RFIEStatefulBase);

  function RFIEInput() {
    _classCallCheck(this, RFIEInput);

    return _possibleConstructorReturn(this, (RFIEInput.__proto__ || Object.getPrototypeOf(RFIEInput)).apply(this, arguments));
  }

  return RFIEInput;
}(_RFIEStatefulBase3.default);

exports.RFIEInput = RFIEInput;
exports.RFIETextArea = _RFIETextArea2.default;
exports.RFIESelect = _RFIESelect2.default;