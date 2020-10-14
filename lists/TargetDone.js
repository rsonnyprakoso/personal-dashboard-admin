const { Relationship } = require('@keystonejs/fields');
const { createdAt } = require('@keystonejs/list-plugins');

module.exports = {
  fields: {
    target: { type: Relationship, ref: 'Target.targetDoneList', many: false }
  },
  plugins: [
    createdAt({ createdAtField: 'doneAt' })
  ]
};