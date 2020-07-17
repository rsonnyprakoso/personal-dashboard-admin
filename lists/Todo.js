const { Text, CalendarDay, Select, Checkbox, Relationship } = require('@keystonejs/fields');

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
      type: CalendarDay
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
    project: { type: Relationship, ref: 'Project.tasks', many: false },
  },
};