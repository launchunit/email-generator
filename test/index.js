
const test = require('ava');

// Init Things
const Generator = require('../');


test('Generate Result Object', t => {

  const res = Generator('Karan Sakhuja');

  t.not(res, null);
  t.ok(typeof res === 'object');

  t.ok(typeof res.parsedName === 'object');

  t.ok(typeof res.parsedName.firstName === 'string');
  t.ok(typeof res.parsedName.lastName === 'string');

  t.ok(typeof res.parsedName.firstNameInitial === 'string');
  t.ok(typeof res.parsedName.lastNameInitial === 'string');

  t.ok(Array.isArray(res.emails));
});

test('Generate Email', t => {

  const res = Generator('Karan Sakhuja');
  t.ok(Array.isArray(res.emails));

  t.ok(typeof res.emails[0] === 'object');
  t.ok(typeof res.emails[0].ruleStr === 'string');
  t.ok(typeof res.emails[0].ruleFn === 'function');

  const email = res.emails[0];
  t.ok(typeof res.emails[0].ruleFn('super.com') === 'string');
  t.ok(res.emails[0].ruleFn('super.com') === 'karan@super.com');

  console.log(res);
});
