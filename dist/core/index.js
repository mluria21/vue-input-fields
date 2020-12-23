function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Vue from 'vue';

var InputField = /*#__PURE__*/function () {
  //component = null 
  function InputField(opt) {
    _classCallCheck(this, InputField);

    _defineProperty(this, "label", null);

    _defineProperty(this, "_property", {});

    _defineProperty(this, "_value", '');

    _defineProperty(this, "name", null);

    _defineProperty(this, "noneFormatted", null);

    _defineProperty(this, "_rules", []);

    _defineProperty(this, "format", null);

    _defineProperty(this, "attr", {});

    _defineProperty(this, "_isValid", false);

    _defineProperty(this, "_errors", {});

    _defineProperty(this, "_dirty", false);

    this.name = Object.keys(opt.property)[0];
    this.property = opt.property;
    this.label = opt.label || this.ToUpper(this.name);
    this.rules = opt.rules || [];
    this.format = opt.format;
    this.attr = opt.attr || {
      id: this.name,
      placeholder: this.label
    };
    this.component = opt.component || 'InputField';
    this.options = opt.options || null;
  }

  _createClass(InputField, [{
    key: "deleteError",
    value: function deleteError(trigger) {
      Vue["delete"](this._errors, trigger);
    }
  }, {
    key: "validate",
    value: function () {
      var _validate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(trigger) {
        var _this = this;

        var errors, _errors;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                errors = []; //needed it should run after setFormat() takes affect

                _context.next = 3;
                return new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve();
                  }, 1);
                });

              case 3:
                if (trigger && this.dirty) {
                  errors = this.rules.filter(function (rule) {
                    return _typeof(rule.trigger) == 'object' ? rule.trigger.find(function (trig) {
                      return trig == trigger;
                    }) : rule.trigger == trigger;
                  }).map(function (rule) {
                    return {
                      fn: rule.callback.name,
                      error: rule.callback(_this.value, _this.label) || null
                    };
                  }).filter(function (rule) {
                    return rule != null;
                  });
                  this.errors = errors;
                  this.isValid = errors.filter(function (err) {
                    return err.error;
                  }).length == 0;
                } else {
                  _errors = [];
                  _errors = this.rules.map(function (rule) {
                    return rule.callback(_this.value, _this.label);
                  }).filter(function (rule) {
                    return rule != null;
                  });
                  this.isValid = _errors.length == 0;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function validate(_x) {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: "setFormat",
    value: function () {
      var _setFormat = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(trigger, e) {
        var _this2 = this;

        var hasTrigger, formatted;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.format) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                hasTrigger = function hasTrigger(trigger) {
                  return _typeof(_this2.format.trigger) == 'object' ? _this2.format.trigger.includes(trigger) : _this2.format.trigger == trigger;
                };

                if (!(trigger && !hasTrigger(trigger))) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                _context2.next = 7;
                return new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve();
                  });
                });

              case 7:
                formatted = this.format.callback(this.value, trigger, e);

                if (formatted) {
                  this._value = formatted.value;
                  this.noneFormatted = formatted.noneFormatted;
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setFormat(_x2, _x3) {
        return _setFormat.apply(this, arguments);
      }

      return setFormat;
    }()
  }, {
    key: "touch",
    value: function touch() {
      var _this3 = this;

      this.markAsDirty();
      var triggers = this.rules.map(function (rule) {
        return rule.trigger;
      }).flat();
      triggers.forEach(function (trigger) {
        _this3.validate(trigger);
      });
    }
  }, {
    key: "markAsDirty",
    value: function markAsDirty() {
      this.dirty = true;
    }
  }, {
    key: "ToUpper",
    value: function ToUpper(value) {
      return String(value).split('_').map(function (str) {
        return str[0].toUpperCase() + str.substring(1);
      }).join(' ');
    }
  }, {
    key: "fill",
    value: function fill() {
      if (this.noneFormatted) {
        var e = {};
        e[this.name] = this.noneFormatted;
        return e;
      }

      return this.property;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._value = '';
      var name = this.name;
      this._property[name] = '';
      this.noneFormatted = null;
      this._isValid = false;
      this._errors = {};
      this._dirty = false;
    }
  }, {
    key: "property",
    set: function set(value) {
      this._property = value;
      var name = this.name;
      this.value = this._property[name];
      this.setFormat();
    },
    get: function get() {
      return this._property;
    }
  }, {
    key: "value",
    set: function set(value) {
      this._value = value;
      var name = this.name;
      this._property[name] = value;
      this.setFormat();
      this.validate('input');
    },
    get: function get() {
      return this._value;
    }
  }, {
    key: "rules",
    set: function set(rules) {
      if (Array.isArray(rules)) {
        if (rules.length) {
          this._rules = rules;
        } else {
          this._rules = rules;
        }

        this._errors = [];
        this.validate('input');
      }
    },
    get: function get() {
      return this._rules;
    }
  }, {
    key: "dirty",
    set: function set(isDirty) {
      this._dirty = isDirty;
      this.validate('input'); // manually triggerd because all triggers take affect after state is set to dirty which is after blur event
    },
    get: function get() {
      return this._dirty;
    }
  }, {
    key: "isValid",
    set: function set(valid) {
      this._isValid = valid;
    },
    get: function get() {
      return this._isValid;
    }
  }, {
    key: "errors",
    set: function set(errors) {
      var _this4 = this;

      var errorToRemove = errors.filter(function (err) {
        return !err.error;
      }).map(function (err) {
        return err.fn;
      });
      var errorToAdd = errors.filter(function (err) {
        return err.error;
      });
      errorToRemove.forEach(function (fn) {
        Vue["delete"](_this4._errors, fn);
      });
      errorToAdd.forEach(function (err) {
        Vue.set(_this4._errors, err.fn, err.error);
      });
    },
    get: function get() {
      return Object.values(this._errors).flat(); // [...new Set(Object.values(this._errors).flat())]
    }
  }]);

  return InputField;
}();

var Rule = function Rule(trigger, callback) {
  _classCallCheck(this, Rule);

  _defineProperty(this, "trigger", '');

  _defineProperty(this, "callback", null);

  this.trigger = trigger;
  this.callback = callback;
};

var Format = function Format(trigger, callback) {
  _classCallCheck(this, Format);

  _defineProperty(this, "trigger", '');

  _defineProperty(this, "callback", null);

  this.trigger = trigger;
  this.callback = callback;
};

export { Format, InputField, Rule };
