const { Text, Integer, Select, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    cycle: {
      type: Select,
      isRequired: true,
      options: [
        { value: 1, label: 'Daily' },
        { value: 2, label: 'Weekly' },
        { value: 3, label: 'Monthly' },
        { value: 4, label: 'Annual' }
      ],
      dataType: 'integer',
      defaultValue: 2
    },
    cycleTarget: {
      type: Integer,
      isRequired: true
    },
    targetDoneList: { type: Relationship, ref: 'TargetDone.target', many: true },
  },
};