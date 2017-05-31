import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import '/imports/ui/methods.js';

Notes = new Meteor.Collection('notes');
Users = new Meteor.Collection('users');
