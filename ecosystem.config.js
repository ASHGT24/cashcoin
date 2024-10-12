module.exports = {
    apps: [
      {
        name: 'nextjs-app',     // Name of the application
        script: 'npm',          // Using npm to run the Next.js scripts
        args: 'start',          // Runs 'npm start' to start the Next.js server
        instances: 'max',       // Auto-scale to all available CPUs
        exec_mode: 'cluster',   // Enable load balancing between instances
        watch: false,           // Disable file watching for production
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  