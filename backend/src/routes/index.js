const { defineCompanyRoutes } = require('./companies');

function defineRoutes({ app }) {
  defineCompanyRoutes({ app });
}

module.exports = { defineRoutes };
