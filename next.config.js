const nextConfig = {
	experimental: {
		appDir: true,
		layers:true
	  },
	webpack: (config) => {
		config.experiments = {
		  topLevelAwait: true,
		}
		return config
	  },
	  future: {
		webpack5: true,
	  },
	
};

module.exports = nextConfig;
