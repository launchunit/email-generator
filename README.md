# email-generator
Generate email combinations based on person name.

----

## Usage

```js
const Generator = require('email-generator');

const res = Generator('Karan Sakhuja');
console.log(res);

/**
{ parsedName:
   { salutation: '',
     firstName: 'Karan',
     initials: '',
     lastName: 'Sakhuja',
     suffix: '',
     firstNameInitial: 'K',
     lastNameInitial: 'S' },
  emails:
   [ { ruleFn: [Function], ruleStr: '${name.firstName}' },
     { ruleFn: [Function], ruleStr: '${name.lastName}' },
     { ruleFn: [Function],
       ruleStr: '${name.firstName}${name.lastName}' },
     { ruleFn: [Function],
       ruleStr: '${name.firstName}.${name.lastName}' },
     { ruleFn: [Function],
       ruleStr: '${name.firstName}_${name.lastName}' },
     { ruleFn: [Function],
       ruleStr: '${name.lastName}${name.firstName}' },
     { ruleFn: [Function],
       ruleStr: '${name.lastName}.${name.firstName}' },
     { ruleFn: [Function],
       ruleStr: '${name.lastName}_${name.firstName}' },
     { ruleFn: [Function],
       ruleStr: '${name.firstNameInitial}${name.lastName}' },
     { ruleFn: [Function],
       ruleStr: '${name.firstNameInitial}.${name.lastName}' },
     { ruleFn: [Function],
       ruleStr: '${name.firstNameInitial}_${name.lastName}' },
     { ruleFn: [Function],
       ruleStr: '${name.firstName}${name.lastNameInitial}' },
     { ruleFn: [Function],
       ruleStr: '${name.firstName}.${name.lastNameInitial}' },
     { ruleFn: [Function],
       ruleStr: '${name.firstName}_${name.lastNameInitial}' },
     { ruleFn: [Function],
       ruleStr: '${name.lastNameInitial}${name.firstName}' },
     { ruleFn: [Function],
       ruleStr: '${name.lastNameInitial}.${name.firstName}' },
     { ruleFn: [Function],
       ruleStr: '${name.lastNameInitial}_${name.firstName}' } ] }
**/


// Generate Email:
const email = res.emails[0];
res.emails[0].ruleFn('super.com'); // karan@super.com
```

#### Run Tests
```bash
$ npm test
```
