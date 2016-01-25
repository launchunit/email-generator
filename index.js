
'use strict';

/**
 * Module dependencies.
 * @private
 */
const _ = require('lodash'),
  nameParser = require('./lib/name_parser');


const RULES = [
  '${name.firstName}',
  '${name.lastName}',

  '${name.firstName}${name.lastName}',
  '${name.firstName}.${name.lastName}',
  '${name.firstName}_${name.lastName}',

  '${name.lastName}${name.firstName}',
  '${name.lastName}.${name.firstName}',
  '${name.lastName}_${name.firstName}',

  '${name.firstNameInitial}${name.lastName}',
  '${name.firstNameInitial}.${name.lastName}',
  '${name.firstNameInitial}_${name.lastName}',

  '${name.firstName}${name.lastNameInitial}',
  '${name.firstName}.${name.lastNameInitial}',
  '${name.firstName}_${name.lastNameInitial}',

  '${name.lastNameInitial}${name.firstName}',
  '${name.lastNameInitial}.${name.firstName}',
  '${name.lastNameInitial}_${name.firstName}',

  '${name.lastName}${name.firstNameInitial}',
  '${name.lastName}0${name.firstNameInitial}',
  '${name.lastName}_${name.firstNameInitial}',

  '${name.firstNameInitial}.${name.lastNameInitial}',
  '${name.firstNameInitial}_${name.lastNameInitial}',
  '${name.firstName}.${name.middleNameInitial}.${name.lastName}',
];

function ruleFn(ruleStr, parsedName) {
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

  parsedName.firstNameInitial = parsedName.firstName.substring(0,1);
  parsedName.lastNameInitial = parsedName.lastName.substring(0,1);


  const emails = _.map(RULES, ruleStr => {
    return {
      ruleFn: ruleFn(ruleStr, parsedName),
      ruleStr: ruleStr
    }
  });

  return {
    parsedName: parsedName,
    emails: emails
  };
};


/**
 * @params ruleStr {String}
 * @params name {Object}
 *
 * @public
 */
exports.ruleFn = ruleFn;
