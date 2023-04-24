/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	webpack: (config) => {
		config.experiments = {
		  topLevelAwait: true,
		}
		return config
	  }
};

module.exports = nextConfig;
