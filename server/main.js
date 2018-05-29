import { Meteor } from 'meteor/meteor';

import {
  insertDefaultUsers,
} from '/server/lib/defaultDataRelated'

Meteor.startup(() => {
  // code to run on server at startup
  insertDefaultUsers([{
    username: 'superadmin',
    email: 'superadmin@treno.kz',
    password: 'superadmin',
    profile: {
      firstName: 'Супер',
      lastName: 'Администратор',
      isAdmin: true
    }
  }])
});
