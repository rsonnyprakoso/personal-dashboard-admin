const { Text, Relationship, Select } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    priority: {
      type: Select,
      options: [
        { value: 1, label: 'High' },
        { value: 2, label: 'Medium' },
        { value: 3, label: 'Low' }
      ],
      dataType: 'integer',
      defaultValue: 2
    },
    status: {
      type: Select,
      options: [
        { value: 1, label: 'To Do' },
        { value: 2, label: 'Upcoming' },
        { value: 3, label: 'Ongoing' },
        { value: 4, label: 'Later' },
        { value: 5, label: 'Done' },
      ],
      dataType: 'integer',
      defaultValue: 2
    },
    tasks: { type: Relationship, ref: 'Todo.project', many: true },
  },
};