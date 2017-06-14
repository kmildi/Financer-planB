import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './body.html';
import './templates.js';
import './methods.js';

Meteor.subscribe('notes');

Template.worksheet.helpers({
	checkCookie: function checkCookie() {
      var user=getCookie("userid");
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }       
            }
            return "";
        }
        if (user != "") {
            return user
        } else {
            alert("Nincs sütije, menjen a beléptetésre?");    
        }
    }
});