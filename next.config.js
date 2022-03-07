const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'lutfor',
        mongodb_password: 'Crisis@208',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'next-js-goal-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'lutfor',
      mongodb_password: 'Crisis@208',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'next-js-goal',
    },
  };
};
