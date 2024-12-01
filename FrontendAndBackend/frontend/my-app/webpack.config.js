const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      buffer: require.resolve('buffer/'),
      url: require.resolve('url/'),
      http: require.resolve('stream-http'),
      fs: false, // Node.js `fs` module is not supported in browsers
      net: false,
    },
  },
};
