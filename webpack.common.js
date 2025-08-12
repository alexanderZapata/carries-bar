const path = require('path');

module.exports = {
  entry: {
    // The source files live under src/public; point the entry there so the
    // production build can locate the application script during CI builds.
    app: './src/public/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
};
