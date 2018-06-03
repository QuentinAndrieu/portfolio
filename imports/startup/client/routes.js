import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import layout
import '../../ui/layouts/app_body/app-body.js';
// Import pages
import '../../ui/pages/home-page.js';
import '../../ui/pages/project-page.js';
import '../../ui/pages/skill-page.js';
import '../../ui/pages/experience-page.js';
import '../../ui/pages/education-page.js';

import '../../ui/pages/app-not-found.js';


FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Home_page' });
  },
});

FlowRouter.route('/projects', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Project_page' });
  },
});

FlowRouter.route('/skills', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Skill_page' });
  },
});

FlowRouter.route('/experiences', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Experience_page' });
  },
});

FlowRouter.route('/education', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Education_page' });
  },
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
