const { Text, Relationship, Select } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    priority: {
      type: Select,
      options: ['high', 'medium', 'low'],
      defaultValue: 'medium'
    },
    status: {
      type: Select,
      options: ['todo', 'upcoming', 'ongoing', 'later', 'done'],
      defaultValue: 'upcoming'
    },
    tasks: { type: Relationship, ref: 'Todo.project', many: true },
  },
};