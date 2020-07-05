const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const TodoSchema = require('./lists/Todo.js');
const ProjectSchema = require('./lists/Project.js');
const ShortcutSchema = require('./lists/Shortcut.js');

const PROJECT_NAME = 'personal-dashboard-admin';
const adapterConfig = { mongoUri: 'mongodb+srv://pd-admin:pd-admin-13@cluster0.ormnm.gcp.mongodb.net/pd-db?retryWrites=true&w=majority' };


/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(adapterConfig),
  cookieSecret: 'gG8nb4AJZhL1LdD85khFT6fOwHi2aIPVm'
});

keystone.createList('Todo', TodoSchema);
keystone.createList('Project', ProjectSchema);
keystone.createList('Shortcut', ShortcutSchema);

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })],
};
