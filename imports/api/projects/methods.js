import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Projects } from './projects.js';

export const insert = new ValidatedMethod({
  name: 'projects.insert',
  validate: () => {
    return true;
  },
  run(project) {
    return Projects.insert(project, null);
  },
});


export const update = new ValidatedMethod({
  name: 'projects.update',
  validate: () => {
    return true;
  },
  run({ projectId, project }) {
    Projects.update(projectId, {
      $set: { project },
    });
  },
});

export const remove = new ValidatedMethod({
  name: 'projects.remove',
  validate: () => {
    return true;
  },
  run({ projectId }) {
    Projects.remove(projectId);
  },
});
