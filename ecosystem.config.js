module.exports = {
    apps: [
      {
        name: "nextjs-app",
        script: "server.js",    // Or 'npm start' if using package.json start script
        instances: "max",       // Auto-scaled to the number of CPUs available
        exec_mode: "cluster",   // Enables load-balancing mode
        watch: false,           // If you want PM2 to watch file changes
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  