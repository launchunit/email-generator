
module.exports = [
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
