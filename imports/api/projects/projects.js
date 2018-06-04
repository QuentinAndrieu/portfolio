import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

class ProjectsCollection extends Mongo.Collection {
  insert(project, callback) {
    return super.insert(project, callback);
  }

  update(id, project, callback) {
    return super.update({ _id: id }, project, callback);
  }

  remove(selector, callback) {
    return super.remove(selector, callback);
  }
}

export const Projects = new ProjectsCollection('projects');

// Deny all client-side updates since we will be using methods to manage this collection
Projects.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Projects.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  name: { type: String },
  description: { type: String },
  createdDate: { type: Date },
  githubLink: { type: String },
});

Projects.attachSchema(Projects.schema);

Factory.define('project', Projects, {});

Projects.helpers({

});
