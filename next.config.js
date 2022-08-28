const path = require('path');

module.exports = {
  trailingSlash: true,
  // webpackDevMiddleware: config => {
  // 	config.watchOptions = {
  // 		poll: 1000,
  // 		aggregateTimeout: 300
  // 	}

  // 	return config
  // },
	assetPrefix: './',
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' }
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
