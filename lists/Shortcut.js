const { Text, Url } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    url: {
      type: Url,
      isRequired: true,
    },
    icon: {
      type: Text,
      isRequired: true,
    }
  },
};