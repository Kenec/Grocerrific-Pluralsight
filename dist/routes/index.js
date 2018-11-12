"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _groceryRoutes = _interopRequireDefault(require("./groceryRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', function (req, res) {
  res.status(200).send({
    message: 'Welcome to Grocerrific API'
  });
});
router.use('/v1/grocerries/', _groceryRoutes.default);
router.get('*', function (req, res) {
  res.status(404).send({
    message: 'Route does not exist'
  });
});
var _default = router;
exports.default = _default;