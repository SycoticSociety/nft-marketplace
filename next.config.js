const nextConfig = {
    webpack: (config) => {
        config.experiments = {
          topLevelAwait: true,
          layers:true
        }
        return config
      },
    images: {
        domains: ['images.unsplash.com','gateway.ipfscdn.io'],
    }
};

module.exports = nextConfig;
