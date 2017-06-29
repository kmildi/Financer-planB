import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Random } from 'meteor/random';
import { setCookiefn } from '/imports/ui/cookie.js';
 
import './templates.html';
import './methods.js';

 Template.savedNotes.helpers({
	"showNotes":function(){
	  return Notes.find({}, { sort: { createdAt: -1 } });
  	}
  });
  Template.writeInForm.events({
 	 "submit form":function(evt){
		evt.preventDefault();
		var typedTextVar = evt.target.typedText.value;
		Meteor.call('createNotes', typedTextVar);
		evt.target.typedText.value = "";
   }
  });

Template.loginForm.events({
	"submit form":function(evt){
		evt.preventDefault();
		var userEmail = evt.target.emailLog.value;
		var tempId = Random.id();
		Meteor.call('enterUser', userEmail);
		setCookiefn("tempId", tempId, 60);	
		
		evt.target.emailLog.value = "";	
	}
});