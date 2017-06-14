import { Meteor } from 'meteor/meteor';
import '/imports/api/base.js';

Meteor.methods({

  'createNotes': function(typedTextVar){
     if (! this.userId) {
      throw new Meteor.Error('not-authorized');
     }
     Notes.insert({
        text: typedTextVar,
        owner: this.userId,
        createdAt: new Date(),
      })
  },

  'enterUser': function(userEmail){
    // if (...) {
    //  throw new Meteor.Error('already-exist');
    // }
     AlternateUsers.insert({
        email: userEmail,
        createdAt: new Date(),
    })
  },

})
