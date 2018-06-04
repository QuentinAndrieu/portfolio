/* global alert */

export const displayError = (error) => {
  if (error) {
    // It would be better to not alert the error here but inform the user in some
    alert(error); // eslint-disable-line no-alert
    // more subtle way
  }
};
