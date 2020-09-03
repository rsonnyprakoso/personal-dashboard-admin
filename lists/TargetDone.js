const { CalendarDay, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    target: { type: Relationship, ref: 'Target.targetDoneList', many: false },
    completedDate: {
      type: CalendarDay
    }
  },
};