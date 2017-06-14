import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import '/imports/ui/cookie.js';
 
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
		Meteor.call('enterUser', userEmail);
		setCookie("email", userEmail, 60);	
		function setCookie(cname,cvalue,exdays) {
    		var d = new Date();
   			d.setTime(d.getTime() + (exdays*24*60*60*1000));
    		var expires = "expires=" + d.toGMTString();
   			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}
		evt.target.emailLog.value = "";	
	}
});