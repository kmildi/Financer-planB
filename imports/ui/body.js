import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './body.html';
import './templates.js';
import './methods.js';

Meteor.subscribe('notes');