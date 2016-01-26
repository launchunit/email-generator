
'use strict';

/**
 * Module dependencies.
 * @private
 */
const _ = require('lodash'),
  nameParser = require('./lib/name_parser'),
  RULES = require('./lib/rules');


/**
 * @params ruleStr {String}
 * @params name {Object}
 *
 * @public
 */
exports.buildRuleFn = (ruleStr, parsedName) => {
  const fn = new Function('name','return `'+ruleStr+'`');
  return new Function('domain', 'return `' +
                        fn(parsedName).toLowerCase() +
                        '@${domain}`');
};


/**
 * @params {String} name // Full Name
 *
 * @public
 */
exports.build = name => {

  const parsedName = nameParser.parse(name);

  // Normalise Data
  parsedName.firstName = _.capitalize(parsedName.firstName).trim();
  parsedName.lastName = _.capitalize(parsedName.lastName).trim();

  parsedName.middleName = parsedName.middleName || '';
  parsedName.middleName = _.capitalize(parsedName.middleName).trim();

  parsedName.firstNameInitial = parsedName.firstName.substring(0,1);
  parsedName.lastNameInitial = parsedName.lastName.substring(0,1);
  parsedName.middleNameInitial = parsedName.middleName.substring(0,1);


  const emails = _.map(RULES, ruleStr => {
    return {
      ruleFn: exports.buildRuleFn(ruleStr, parsedName),
      ruleStr: ruleStr
    }
  });

  return {
    parsedName: parsedName,
    emails: emails
  };
};
