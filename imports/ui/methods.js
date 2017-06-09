import { Meteor } from 'meteor/meteor';
import '/imports/api/base.js'




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
})
