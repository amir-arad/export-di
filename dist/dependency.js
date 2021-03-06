'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dependency = (function (_EventEmitter) {
  _inherits(Dependency, _EventEmitter);

  function Dependency(resolver) {
    _classCallCheck(this, Dependency);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dependency).call(this));

    _this.resolver = resolver;
    return _this;
  }

  _createClass(Dependency, [{
    key: 'resolve',
    value: function resolve(dependencies) {
      var _this2 = this;

      var resolvedDeps = [];
      if (dependencies) {
        dependencies.forEach(function (dependency) {
          resolvedDeps.push(_this2.resolver.injectDeps(dependency));
        });
      }
      return resolvedDeps;
    }
  }]);

  return Dependency;
})(_events.EventEmitter);

exports.default = Dependency;