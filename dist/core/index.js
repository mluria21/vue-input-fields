import Vue from 'vue';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class InputField {
  //component = null 
  constructor(opt) {
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

  set property(value) {
    this._property = value;
    let name = this.name;
    this.value = this._property[name];
    this.setFormat();
  }

  get property() {
    return this._property;
  }

  set value(value) {
    this._value = value;
    let name = this.name;
    this._property[name] = value;
    this.setFormat();
    this.validate('input');
  }

  get value() {
    return this._value;
  }

  set rules(rules) {
    if (Array.isArray(rules)) {
      if (rules.length) {
        this._rules = rules;
      } else {
        this._rules = rules;
      }

      this._errors = [];
      this.validate('input');
    }
  }

  get rules() {
    return this._rules;
  }

  set dirty(isDirty) {
    this._dirty = isDirty;
    this.validate('input'); // manually triggerd because all triggers take affect after state is set to dirty which is after blur event
  }

  get dirty() {
    return this._dirty;
  }

  set isValid(valid) {
    this._isValid = valid;
  }

  get isValid() {
    return this._isValid;
  }

  set errors(errors) {
    let errorToRemove = errors.filter(err => !err.error).map(err => err.fn);
    let errorToAdd = errors.filter(err => err.error);
    errorToRemove.forEach(fn => {
      Vue.delete(this._errors, fn);
    });
    errorToAdd.forEach(err => {
      Vue.set(this._errors, err.fn, err.error);
    });
  }

  get errors() {
    return Object.values(this._errors).flat(); // [...new Set(Object.values(this._errors).flat())]
  }

  deleteError(trigger) {
    Vue.delete(this._errors, trigger);
  }

  async validate(trigger) {
    let errors = []; //needed it should run after setFormat() takes affect

    await new Promise(resolve => setTimeout(() => resolve(), 1));

    if (trigger && this.dirty) {
      errors = this.rules.filter(rule => {
        return typeof rule.trigger == 'object' ? rule.trigger.find(trig => trig == trigger) : rule.trigger == trigger;
      }).map(rule => {
        return {
          fn: rule.callback.name,
          error: rule.callback(this.value, this.label) || null
        };
      }).filter(rule => rule != null);
      this.errors = errors;
      this.isValid = errors.filter(err => err.error).length == 0;
    } else {
      let errors = [];
      errors = this.rules.map(rule => rule.callback(this.value, this.label)).filter(rule => rule != null);
      this.isValid = errors.length == 0;
    }
  }

  async setFormat(trigger, e) {
    if (!this.format) return;

    const hasTrigger = trigger => {
      return typeof this.format.trigger == 'object' ? this.format.trigger.includes(trigger) : this.format.trigger == trigger;
    };

    if (trigger && !hasTrigger(trigger)) {
      return;
    } //needed when initializing it should apply the formation


    await new Promise(resolve => setTimeout(() => resolve()));
    const formatted = this.format.callback(this.value, trigger, e);

    if (formatted) {
      this._value = formatted.value;
      this.noneFormatted = formatted.noneFormatted;
    }
  }

  touch() {
    this.markAsDirty();
    const triggers = this.rules.map(rule => rule.trigger).flat();
    triggers.forEach(trigger => {
      this.validate(trigger);
    });
  }

  markAsDirty() {
    this.dirty = true;
  }

  ToUpper(value) {
    return String(value).split('_').map(str => str[0].toUpperCase() + str.substring(1)).join(' ');
  }

  fill() {
    if (this.noneFormatted) {
      let e = {};
      e[this.name] = this.noneFormatted;
      return e;
    }

    return this.property;
  }

  clear() {
    this._value = '';
    let name = this.name;
    this._property[name] = '';
    this.noneFormatted = null;
    this._isValid = false;
    this._errors = {};
    this._dirty = false;
  }

}

class Rule {
  constructor(trigger, callback) {
    _defineProperty(this, "trigger", '');

    _defineProperty(this, "callback", null);

    this.trigger = trigger;
    this.callback = callback;
  }

}

class Format {
  constructor(trigger, callback) {
    _defineProperty(this, "trigger", '');

    _defineProperty(this, "callback", null);

    this.trigger = trigger;
    this.callback = callback;
  }

}

export { Format, InputField, Rule };
