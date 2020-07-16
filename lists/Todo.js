const { Text, DateTimeUtc, Select, Checkbox, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    isComplete: {
      type: Checkbox,
      defaultValue: false,
    },
    scheduledOn: {
      type: DateTimeUtc
    },
    priority: {
      type: Select,
      options: ['high', 'medium', 'low'],
      defaultValue: 'medium'
    },
    project: { type: Relationship, ref: 'Project.tasks', many: false },
  },
};