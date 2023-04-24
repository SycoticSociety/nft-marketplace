/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
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
