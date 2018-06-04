/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { Projects } from '../projects.js';

Meteor.publish('projects', function projectsPublic() {
  return Projects.find();
});

console.log('publication');
