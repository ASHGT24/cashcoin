module.exports = {
    apps: [
      {
        name: 'CashCoins',
        script: 'npm',
        args: 'start',
        instances: 'max',   // or a specific number of instances, e.g., 4
        exec_mode: 'cluster',  // Use 'cluster' mode instead of 'fork'
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  