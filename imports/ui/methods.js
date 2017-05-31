import { Meteor } from 'meteor/meteor';
import '/imports/api/base.js'


Meteor.methods({

  'createNotes': function(typedTextVar){
      Notes.insert({
        text: typedTextVar,
        createdAt: new Date(),
      })
  },

  'createUser': function(userEmail){
      Users.insert({
        email: userEmail,
      })
  }
})