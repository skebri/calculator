import _has from 'lodash/has';
import _get from 'lodash/get';
import _keys from 'lodash/keys';
import _toLower from 'lodash/toLower';
import _replace from 'lodash/replace';
import _capitalize from 'lodash/capitalize';
import _isEmpty from 'lodash/isEmpty';
import _escapeRegExp from 'lodash/escapeRegExp';

/**
 * Handles translation missing terms gracefully with
 * a proper warning in the console
 *
 * @param {String} id - the missing dictionary term
 * @returns {String}
 */
const fallback = (id) => {
  console.warn('[i18n] missing translation for', id);
  return _capitalize(_replace(id, '.', ' '));
};

/**
 * replaces placeholders in the string with actual dynamic
 * values, provided in the custom data dictionary object
 *
 * @param {String} string - the template string
 * @param {Object} dictionary - the extended dictionary
 * @returns {String}
 */

const compile = (string = '', dictionary = {}) => {
  let result = string;

  _keys(dictionary).forEach((p) => {
    const regex = new RegExp(_escapeRegExp(p), 'g');
    result = _replace(result, regex, dictionary[p]);
  });

  return result;
};

/**
 * it translates an id into a localized string from a
 * global dictionary object (window.I18n).
 * common placeholders will be automatically replaced.
 * you can provide extra terms with values, to extend the
 * dictionary, in the form of an object.
 *
 * @param {String} index - key identifier for translation map
 * @param {Object} data - extra values to map into translation
 * @returns {String}
 */

const t = (index = '-', data = null) => {
  const id = _toLower(index);
  const string = (_has(window.I18n, id))
    ? _get(window.I18n, id)
    : fallback(id);

  return _isEmpty(data)
    ? string
    : compile(string, data);
};

export default t;
