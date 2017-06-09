import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
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

//Template.loginForm.events({
	//"submit form":function(evt){
		//evt.preventDefault();
		//var userEmail = evt.target.emailLog.value;
		//Meteor.call('createUser', userEmail);	
		//evt.target.emailLog.value = "";	
	//}
//});