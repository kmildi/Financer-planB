import { Meteor } from 'meteor/meteor';


if (Meteor.isServer) {
 
  Meteor.publish('notes', function notesPublication() {
    return Notes.find({
      $or: [
       { owner: this.userId },
      ],
    });
  });

}