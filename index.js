require('dotenv').config({ path: process.env.NODE_ENV === 'development' ? '.env.local' : '.env' });

const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const TodoSchema = require('./lists/Todo.js');
const ProjectSchema = require('./lists/Project.js');
const ShortcutSchema = require('./lists/Shortcut.js');

const PROJECT_NAME = 'personal-dashboard-admin';
const adapterConfig = { mongoUri: process.env.KEYSTONE_MONGODB_URL };

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.KEYSTONE_COOKIE_SECRET
});

keystone.createList('Todo', TodoSchema);
keystone.createList('Project', ProjectSchema);
keystone.createList('Shortcut', ShortcutSchema);

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })],
};
