import { FlowRouter } from 'meteor/kadira:flow-router';
import  '/imports/ui/body.html';

FlowRouter.route('/', {
    action: function() {
       BlazeLayout.render('home');
  },
});

FlowRouter.route('/worksheet', {
     action: function() {
       BlazeLayout.render('worksheet');
  },
});

FlowRouter.route('/login', {
    action: function() {
       BlazeLayout.render('loginPage');
    }
});