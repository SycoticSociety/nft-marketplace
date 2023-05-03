const nextConfig = {
    webpack: (config) => {
        config.experiments = {
          topLevelAwait: true,
          layers:true
        }
        return config
      }
};

module.exports = nextConfig;
