import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Notes = new Meteor.Collection('notes');

if(Meteor.isClient){
  Template.savedNotes.helpers({
	"showNotes":function(){
	  return Notes.find();
  	}
  });
  Template.writeInForm.events({
	"submit form": function(evt){
		evt.preventDefault();
		var typedTextVar = evt.target.typedText.value;
		Notes.insert({
			text: typedTextVar,
		});
		evt.target.typedText.value = "";
    	}
  });

}
 
if(Meteor.isServer){
   
}