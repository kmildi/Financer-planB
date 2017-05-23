import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
import './templates.html';

 Template.savedNotes.helpers({
	"showNotes":function(){
	  return Notes.find();
  	}
  });
  Template.writeInForm.events({
	"submit form":function(evt){
		evt.preventDefault();
		var typedTextVar = evt.target.typedText.value;
		Notes.insert({
			text: typedTextVar,
		});
		evt.target.typedText.value = "";
    	}
  });
